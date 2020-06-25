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
        <p class="headline">
          The Native American wild Shiaqga mushroom is considered one of the
          most powerful weapons in protection against illness, disease, and
          aging. It is a certified ceremonial sacrament for use by all Medicine
          Men and Women in traditional Native American Healing
        </p>
        <p class="title text-right">
          - Chieftess Pahamy, Medicine Woman Practitioner
        </p>
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row no-gutters>
      <v-col :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
        <h2 class="display-1">
          Our Guarantee
        </h2>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <br />
      <p class="subtitle-1 pt-5 pb-9">
        Even though many health issues are dealt with rather quickly, we
        understand that health conditions vary and some people may take longer
        to notice the benefits of taking Shiaqga. Still, we are confident that
        you will see the benefit if you allow your body to build upon the
        nutritional support the Shiaqga offers. Because of this, we offer a full
        120 Day Money Back Guarantee on your purchases. Take the Shiaqga
        supplements for four months and if you don't notice positive benefits,
        contact us for a full refund.
      </p>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row align="center" no-gutters>
      <v-col cols="12" md="5">
        <v-container>
          <v-row>
            <v-col align-self="center" cols="12" md="6">
              <img
                style="width:100%"
                src="../assets/images/alignment-front-bottle-graphic-500x500.jpg"
                alt="essential-oil-bottle"
              />
            </v-col>
            <v-col class="subtitle-1" cols="12" md="6">
              <p>
                We are pleased to announce the addition of truly Therapeutic
                Essential Oils to ​ our product line.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <router-link :to="{ name: 'Essential Oils' }">
                Please click here to find out the difference in our essential
                oils and what other companies offer.
              </router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" md="7">
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
          height="100%"
          src="https://www.youtube.com/embed/ROR2Lii741s"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
      <v-col cols="12" md="6">
        <p>
          Dr. Tim Chapman, M.D. from Sun City, California writes: "My comment is
          . . . to acknowledge a product that has significantly created immune
          system enhancing activities, both safely and repetitively. It is
          called Shiaqga. Its anti-neoplastic and immune-stimulating efficacies
          are superior."
        </p>
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
        <p>
          Our products are formulated with true Shiaqga not with the much
          cheaper 'Chaga Mushroom' that many companies attempt to pass off as
          true Shiaqga.
        </p>
        <p>
          "When I first learned about Shiaqga I asked my Medicine Chief what the
          difference was between that and the Chaga mushroom I was familiar
          with. He said, 'Oh, Shiaqga is 1000% times better.' " - Man Found
          Standing, Medicine Man Practitioner
        </p>
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col
        :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
        cols="12"
      >
        <h2>
          Assist your body to heal itself!
        </h2>
      </v-col>
      <v-col cols="12">
        <p>
          "The modulation of the immune system is a given when taking Shiaqga. I
          have seen the immune system increase over 4000% within 20 hours after
          taking Shiaqga. Over time the modulation of the immune system will
          start the activation of the body's healing stem cells." - Chief Man
          Found Standing, Medicine Man Practitioner
        </p>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="text-center">
        <v-btn x-large router to="/information">
          <!-- here, change link -->
          SHIAQGA INFORMATION
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
        <p class="subtitle-1">
          “The doctor of the future will give no medicine, but will interest her
          or his patients in the care of the human frame, in a proper diet, and
          in the cause and prevention of disease.”
        </p>
        <span class="headline">--Thomas A. Edison</span>
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
        <!-- here, hook up -->
        <h3 class="headline">
          Enter your email below to sign up for our Newsletter.
        </h3>
        <v-form>
          <!-- here, add logic -->
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          >
          </v-text-field>
          <v-btn>
            <!-- here, hook up -->
            Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col>
        <p>
          Join our Shiaqga affiliate program and receive 7% commission for your
          direct referrals and 10% commission on your second tier level.
        </p>
        <p>
          You will automatically be placed in your referer's first level tier.
          (In the future, a company-wide profit sharing plan based on referrals
          sales will be added.)
        </p>
      </v-col>
      <v-col class="text-center" cols="12">
        <!-- here, add link -->
        <v-btn>
          Join Affiliate Program
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col>
        <p class="headline">
          "The Shiaqga product is one of natures most powerful natural healers
          that I know about."
        </p>
        <p class="title text-right">
          - Chief SunStar
        </p>
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col>
        <p>
          Consumers should always seek the advice of a physician or other
          competent health care provider with any questions regarding medical
          conditions. The educational information on our website and in our
          online advertisements has not been evaluated by the United States Food
          and Drug Administration and is not intended to diagnose, treat, cure
          or prevent any disease. Consumers should never disregard medical
          advice or delay in seeking it because of something they have read on
          our Site or in our online advertisements.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
}
</script>
