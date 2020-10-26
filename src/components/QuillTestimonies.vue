<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="content-view" ref="contentContainer"></div>
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
  },
  methods: {
  }
}
</script>

<style scoped></style>
