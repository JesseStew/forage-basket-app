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
              <v-col cols="12">
                <v-text-field
                  v-model="title"
                  label="Title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="location"
                  label="Location"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="author"
                  label="Author"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  required
                  :items="pages"
                  label="Page"
                  v-model="page"
                  :rules="[(v) => !!v || 'Item is required']"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  v-model="isArticle"
                  :label="'Article'">
                </v-checkbox>
              </v-col>
              <v-col cols="6" sm="4" md="3" v-for="condition in     conditions" :key="condition.id">
                <v-checkbox
                  v-model="selectedConditions"
                  :label="condition" :value="condition">
                </v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
      <v-col cols="12">
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
        />
      </v-col>
      <v-col cols="12">
        <v-btn @click="save">
          Save
        </v-btn>
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
      isArticle: false,
      conditions: ['arthritis', 'back', 'blood', 'blood pressure', 'breathing', 'bowels', 'broken ankle', 'bronchitis', 'cancer', 'chemotherapy side effects', 'cholesterol', 'covid-19', 'detox', 'diabetes', 'ears', 'energy', 'eyes', 'fibromyalgia', 'generic', 'heart', 'hodgkins lymphoma', 'infections', 'tumors', 'injury', 'kidney', 'libido', 'lumps', 'lyme disease', 'lymph node', 'menopause', 'menstration', 'mole or lesion', 'mono', 'multiple sclerosis', 'non-hodgkins lymphoma', 'oxygen', 'pain', 'parkinsons', 'pneumonia', 'psoriasis', 'respiratory', 'scars', 'seasonal allergies', 'shingles', 'sinuses', 'skin/hair', 'sleep', 'sores/open wound on body', 'stomach', 'thyroid', 'tonsils', 'toothache', 'tremors','viruses', 'youthful appearance'],
      selectedConditions: [],
      author: undefined,
      location: undefined,
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
    this.$store.dispatch('loggedIn')
  },
  computed: {
    ...mapState(['user']),
    conditionCheckbox(condition){
      return this.$_.includes(this.addedConditions, condition)
    }
  },
  methods: {
    save() {
      let article = {}
      let delta = JSON.parse(
        JSON.stringify(this.$refs.myQuillEditor.quill.getContents())
      )
      article.delta = delta
      article.isArticle = this.isArticle
      if (this.author) {
        article.author = this.author
      }
      if (this.title){
        article.title = this.title
      }
      if (this.location){
        article.location = this.location
      }
      if (this.selectedConditions.length > 0) {
        article.selectedConditions = this.selectedConditions
      }
      DB.collection(this.page)
        .doc()
        .set(article)
    }
  }
}
</script>

<style scoped></style>
