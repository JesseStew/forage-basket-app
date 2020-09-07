<template>
  <v-container>
    <v-row>
      <v-col v-if="!user.isAdmin" cols="12">
        <div class="content-view" ref="contentContainer"></div>
      </v-col>
      <v-col v-if="user.isAdmin" cols="12">
        <v-btn v-show="!edit" @click="toggleEdit">
          Edit
        </v-btn>
        <v-btn v-show="edit" @click="save">
          Save
        </v-btn>
        <div v-show="!edit" class="content-view" ref="contentContainer"></div>
        <quill-editor
          v-show="edit"
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import { mapState } from 'vuex'
import { DB } from '../firebase/db.js'

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: '',
      savedContent: '',
      unsavedContent: '',
      edit: false,
      editorOption: {
        placeholder: 'Edit your post...',
        readOnly: true,
        theme: 'snow'
      }
    }
  },
  props: {
    delta: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    collection: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    }
  },
  mounted() {
    let article = document.createElement('article')
    let quill = new Quill(article, {})
    quill.enable(false)
    quill.setContents(this.delta)
    setTimeout(() => {
      this.$refs.contentContainer.appendChild(article)
      this.$refs.myQuillEditor.quill.setContents(this.delta)
    }, 0)
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit
      if (!this.edit) {
        this.$parent.componentKey = this.$parent.componentKey + 1
      }
    },
    save() {
      let delta = JSON.parse(
        JSON.stringify(this.$refs.myQuillEditor.quill.getContents())
      )
      DB.collection(this.collection)
        .doc(this.id)
        .update({ delta: delta })
        .then(obj => {
          // console.log(obj, this.action)
          this.$store.dispatch(this.action).then(this.toggleEdit())
        })
    }
  }
}
</script>

<style scoped></style>
