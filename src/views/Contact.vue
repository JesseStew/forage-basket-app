<template>
  <div class="contact">
    <v-content>
      <v-row>
        <v-col class="text-center">
          <h1 class="pa-5">
            Call us toll free at<br />
            1-888-267-0194 or locally at 1-417-683-0149.
          </h1>
          <v-btn class="pa-5">
            <!-- here, Add Routing -->
            CLICK HERE TO LEARN MORE ABOUT US
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/forage-basket-7a7ed.appspot.com/o/Shiaqga%20-%20Droppers%2Fshiaqga-red.png?alt=media&token=4573a428-fcf1-438e-891a-42af2eb265e9"
            alt=""
          />
        </v-col>
        <v-col cols="6">
          <newsletter-signup />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>
            ​Please contact us with any questions. If you would like to receive
            a call from one of our associates, please include your phone number.
            We will get back to you as quickly as possible - including your time
            zone &amp the best times to connect with you is quite helpful.
          </p>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <h3>
            You can also write us at:
          </h3>
          <br />
          <!-- <br /> -->
          <p>
            Shiaqga <br />
            P.O. Box 2015 <br />
            Ava, MO 65608
          </p>
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>
<script>
import QuillEditor from '@/components/QuillEditor.vue'
import NewsletterSignup from '@/components/NewsletterSignup.vue'

export default {
  components: {
    QuillEditor,
    NewsletterSignup
  },
}
</script>