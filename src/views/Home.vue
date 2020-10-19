<template>
  <v-container>
    <v-row align="center" class="my-10">
      <v-col class="text-center" cols="12" md="3">
        <img
          src="../assets/images/shiaqga-green.png"
          alt="shiaqga-bottle-green"
        />
      </v-col>
      <v-col class="text-center" cols="12" sm="12" md="9">
        <quill-editor
            :id="'9bpIeW8ne6wPQtLyBRJV'"
            :delta="getDelta('9bpIeW8ne6wPQtLyBRJV')"
            :key="componentKey"
            :collection="'home'"
            :action="'loadHomeData'"/>
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row color="white" style="background-color: #6e6f72; color: #eeeeee;" no-gutters>
      <quill-editor
            :id="'fhVzVN2WorpPuAmINh20'"
            :delta="getDelta('fhVzVN2WorpPuAmINh20')"
            :key="componentKey"
            :collection="'home'"
            :action="'loadHomeData'"/>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row align="center" no-gutters>
      <v-col cols="12">
        <p style="font-size: 1.5em; font-weight: 500" class="text-center">
          We are pleased to announce the addition of truly Therapeutic
          Essential Oils to ​ our product line.
        </p>
      </v-col>
      <v-col class="mb-5 text-center" cols="12" md="6">
          <img
            style="width:80%"
            src="../assets/images/alignment-front-bottle-graphic-500x500.jpg"
            alt="essential-oil-bottle"
          />
          <br />
          <router-link style="color: #5d8c6a;" :to="{ name: 'Essential Oils' }">
            Find out the difference in our essential oils.
          </router-link>
      </v-col>
      <v-col class="text-center" cols="12" md="6">
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/wkRP_XbiVmk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="text-center">
        <v-btn x-large router to="/shop" class="ma-5">Shop Now</v-btn>
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <iframe
          width="100%"
          height="300px"
          src="https://www.youtube.com/embed/ROR2Lii741s"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
      <v-col align-self="center" cols="12" md="6">
        <quill-editor
            :id="'1ryF9qYY55ZbE10XDxI3'"
            :delta="getDelta('1ryF9qYY55ZbE10XDxI3')"
            :key="componentKey"
            :collection="'home'"
            :action="'loadHomeData'"/>
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col cols="12" md="3">
        <img
          src="../assets/images/shiaqga-red.png"
          alt="shiaqga-bottle-red"
          srcset=""
        />
      </v-col>
      <v-col align-self="center" cols="12" md="9">
        <quill-editor
            :id="'GjDjKABRyH0IDjDwR5k6'"
            :delta="getDelta('GjDjKABRyH0IDjDwR5k6')"
            :key="componentKey"
            :collection="'home'"
            :action="'loadHomeData'"/>
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col cols="12">
        <quill-editor
            :id="'PD9t2ZtYT8ClEwd5eEmx'"
            :delta="getDelta('PD9t2ZtYT8ClEwd5eEmx')"
            :key="componentKey"
            :collection="'home'"
            :action="'loadHomeData'"/>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="text-center">
        <v-btn x-large router to="/information">
          <!-- here, change link -->
          Apán INFORMATION
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <iframe
          class="pa-3"
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/YXN-hi8-b9w"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
      <v-col cols="12" md="6">
        <iframe
          class="pa-3"
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/rGgikMEI2XM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
      <v-col cols="12" md="6">
        <iframe
          class="pa-3"
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/wkRP_XbiVmk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
      <v-col cols="12" md="6">
        <iframe
          class="pa-3"
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/FVUopBRstbk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
    </v-row>
    <v-row>
      <v-col :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
        <h2 class="display-1">
          More Videos
        </h2>
      </v-col>
    </v-row>
    <v-row class="ma-5">
      <v-col cols="12" md="6" class="text-center">
        <v-btn x-large href="https://youtu.be/2g2fUDDAuG0" target="_blank">
          HOW TO USE THE<br />
          SHIAQGA - 1:13
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <v-btn
          x-large
          href="https://www.youtube.com/watch?v=jLZN1ftDVZg"
          target="_blank"
        >
          HOW TO USE SHIAQGA <br />
          PET IMMUNITY - 0:44
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <quill-editor
            :id="'PgtJ21e7Bs1mXxqRwXTn'"
            :delta="getDelta('PgtJ21e7Bs1mXxqRwXTn')"
            :key="componentKey"
            :collection="'home'"
            :action="'loadHomeData'"/>
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row align="center">
      <v-col class="hidden-sm-and-down" cols="4">
        <img
          src="../assets/images/shiaqga-green.png"
          alt="shiaqga-bottle-green"
          srcset=""
        />
      </v-col>
      <v-col class="hidden-sm-and-down" cols="4">
        <img
          src="../assets/images/shiaqga-red.png"
          alt="shiaqga-bottle-red"
          srcset=""
        />
      </v-col>
      <v-col cols="12" md="4">
        <newsletter-signup />
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col>
        <quill-editor
            :id="'XfQiwbCmlllAvNsC3DO4'"
            :delta="getDelta('XfQiwbCmlllAvNsC3DO4')"
            :key="componentKey"
            :collection="'home'"
            :action="'loadHomeData'"/>
      </v-col>
      <v-col class="text-center" cols="12">
        <!-- here, add link -->
        <v-btn
          router
          to="/affiliate-creator"
        >
          Join Affiliate Program
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col>
        <quill-editor
            :id="'aDKvbC8Lcf2KPvo4NWW4'"
            :delta="getDelta('aDKvbC8Lcf2KPvo4NWW4')"
            :key="componentKey"
            :collection="'home'"
            :action="'loadHomeData'"/>
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col>
        <quill-editor
            :id="'4GhFLUMfH83JaCTmBHzn'"
            :delta="getDelta('4GhFLUMfH83JaCTmBHzn')"
            :key="componentKey"
            :collection="'home'"
            :action="'loadHomeData'"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import QuillEditor from '@/components/QuillEditor.vue'
import NewsletterSignup from '@/components/NewsletterSignup.vue'
import { mapState } from 'vuex'
import { Analytics } from '../firebase/analytics'

export default {
  name: 'Home',
  data(){
    return {
      delta: { "ops": [ { "insert": "To edit this content:" }, { "insert": "\n", "attributes": { "header": 1 } }, { "insert": "Go to User Account Page" }, { "attributes": { "list": "ordered" }, "insert": "\n" }, { "insert": "Register as a new user. -- You will be signed in." }, { "attributes": { "list": "ordered" }, "insert": "\n" }, { "insert": "Click any of the Buttons that say edit and begin adding content." }, { "insert": "\n", "attributes": { "list": "ordered" } }, { "insert": "\n" } ] },
      componentKey: 0,
     }
  },
  computed: {
    ...mapState(['homeData', 'homeDataLoaded']),
  },
  created() {
    if (!this.homeDataLoaded) {
      this.$store.dispatch('loadHomeData')
    }
    Analytics.logEvent("notification_recieved")
  },
	mounted() {
		window.scrollTo(0,0)
	},
  methods: {
    getDelta(id){
      console.log(this.$_.find(this.homeData, (obj)=>{
        return obj.id === id
      }).data.delta)
      return this.$_.find(this.homeData, (obj)=>{
        return obj.id === id
      }).data.delta
    }
  },
  components: {
    QuillEditor,
    NewsletterSignup
  },
}
</script>
<style>
.ql-editor {
  font-family: 'Roboto' !important;
  font-size: 20px !important;
  letter-spacing: 0.15px;
}
</style>