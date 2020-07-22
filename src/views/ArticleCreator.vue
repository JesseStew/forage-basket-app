<template>
  <v-container>
    <v-row>
      <v-col v-if="user.email" cols="12">
        <v-btn @click="save">
          Save
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="title"
                  label="Title"
                ></v-text-field>
                <v-select
                  required
                  :items="pages"
                  label="Page"
                  v-model="page"
                  :rules="[(v) => !!v || 'Item is required']"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
      <v-col>
        <quill-editor
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
      title: undefined,
      page: undefined,
      pages: [
        {
          text: 'home',
          disabled: false,
        },
        {
          text: 'information',
          disabled: false,
        },
        {
          text: 'testimonies',
          disabled: false,
        },
        {
          text: 'health',
          disabled: false,
        },
        {
          text: 'essentialOils',
          disabled: false,
        },
        {
          text: 'shop',
          disabled: false,
        },
        {
          text: 'research',
          disabled: false,
        },
      ],
      editorOption: {
        placeholder: 'Edit your post...',
        readOnly: true,
        theme: 'snow'
      },
      delta: undefined,
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.myQuillEditor.quill.setContents(this.delta)
    }, 0)
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    save() {
      let article = {}
      let delta = JSON.parse(
        JSON.stringify(this.$refs.myQuillEditor.quill.getContents())
      )
      article.delta = delta
      if(this.title){
        article.title = this.title
      }
      DB.collection(this.page)
        .doc()
        .set(article)
    }
  }
}
</script>

<style scoped></style>
