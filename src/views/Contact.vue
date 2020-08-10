<template>
  <div class="contact">
    <v-content>
      <v-row>
        <v-col>
          <h1>
            Call us toll free at 1-888-267-0194 or locally at 1-417-683-0149.
          </h1>
          <v-btn>
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
      <v-row>
        <h3 class="headline">
          Enter your email below to sign up for our Newsletter.
        </h3>
        <v-form>
          <!-- here, add logic -->
          <v-text-field
            v-model="firstName"
            :rules="firstNameRules"
            label="First"
            required
          ></v-text-field>
          <v-text-field
            v-model="lastName"
            :rules="lastNameRules"
            label="Last"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            label="Phone"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="comment"
            :rules="comment"
            label="Comment"
            required
          >
          </v-text-field>
          <v-btn>
            Submit
          </v-btn>
        </v-form>
      </v-row>
      <v-row>
        <v-col>
          <p>
            You can also write us at:
          </p>
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