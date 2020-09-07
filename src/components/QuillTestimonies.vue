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
        <v-btn v-show="edit" @click="deleteTestimony">
          Delete
        </v-btn>
			</v-col>
      <v-col>
        <h3>
          Associated Conditions
        </h3>
        <ul>
          <li v-for="selectedCondition in data.selectedConditions" :key="selectedCondition.id">
            {{ selectedCondition }}
          </li>
        </ul>
      </v-col>
			<v-col cols="12">
        <div v-show="!edit" class="content-view" ref="contentContainer"></div>
        <quill-editor
          v-show="edit"
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
        />
      </v-col>
      <v-col v-show="edit" cols="12">
        <p>
          {{ data.selectedConditions }}
        </p>
      </v-col>
			<v-col v-show="edit" cols="6" sm="4" md="3" v-for="condition in     conditions" :key="condition.id">
				<v-checkbox
					v-model="data.selectedConditions"
					:label="condition" :value="condition">
				</v-checkbox>
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
      },
      conditions: ['arthritis', 'back', 'blood', 'blood pressure', 'breathing', 'bowels', 'broken ankle', 'bronchitis', 'cancer', 'chemotherapy side effects', 'cholesterol', 'covid-19', 'detox', 'diabetes', 'ears', 'energy', 'eyes', 'fibromyalgia', 'generic', 'heart', 'hodgkins lymphoma', 'infections', 'tumors', 'injury', 'kidney', 'libido', 'lumps', 'lyme disease', 'lymph node', 'menopause', 'menstration', 'mole or lesion', 'mono', 'multiple sclerosis', 'non-hodgkins lymphoma', 'oxygen', 'pain', 'parkinsons', 'pneumonia', 'psoriasis', 'respiratory', 'scars', 'seasonal allergies', 'shingles', 'sinuses', 'skin/hair', 'sleep', 'sores/open wound on body', 'stomach', 'thyroid', 'tonsils', 'toothache', 'tremors','viruses', 'youthful appearance'],
    }
  },
  props: {
    data: {
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
    quill.setContents(this.data.delta)
    setTimeout(() => {
      this.$refs.contentContainer.appendChild(article)
      this.$refs.myQuillEditor.quill.setContents(this.data.delta)
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
      let data = {
        delta: JSON.parse(JSON.stringify(this.$refs.myQuillEditor.quill.getContents())),
        selectedConditions: this.data.selectedConditions,
      }
      let delta = JSON.parse(
        JSON.stringify(this.$refs.myQuillEditor.quill.getContents())
      )
      DB.collection(this.collection)
        .doc(this.id)
        .update({
          delta: delta,
          selectedConditions: this.data.selectedConditions
        })
        .then(obj => {
          // console.log(obj, this.action)
          this.$store.dispatch(this.action).then(this.toggleEdit())
        })
    },
    deleteTestimony(){
      let confirmDelete = confirm('Are you sure you want to delete this testimony?')
      if (confirmDelete) {
        DB.collection(this.collection)
          .doc(this.id)
          .delete()
          .then(obj => {
            // console.log(obj, this.action)
            this.$store.dispatch(this.action).then(this.toggleEdit())
          })
      }
    }
  }
}
</script>

<style scoped></style>
