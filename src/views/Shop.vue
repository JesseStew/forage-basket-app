<template>
  <div class="shop">
    <p>{{ test }}</p>
    <!-- <p>{{ shopData.shiaqgaOriginalFormula }}</p> -->
    <!-- <p>{{ shopData.essentialOilSingles }}</p> -->
    <!-- <p>{{ shopData.shiaqgaSuperConcentrate }}</p> -->
    <!-- <p>{{ shopData.essentialOilBlends }}</p> -->
    <!-- <p>{{ shopData.shiaqgaPetImmunity }}</p> -->
    <!-- <p>{{ shopData.accessories }}</p> -->
    <v-container>
      <v-row>
        <v-col cols="8">
          <p>
            Those professionals and retail establishments looking to purchase
            wholesale, please contact us for a list of our wholesale
            requirements.
          </p>
        </v-col>
        <v-col cols="4">
          <iframe
            width="300"
            height="300"
            src="https://www.youtube.com/embed/2g2fUDDAuG0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col cols="6">
          <ProductLink
            :key="componentKey"
            :productName="'shiaqgaOriginalFormula'"
          />
        </v-col>
        <v-col cols="6" class="text-center">
          <ProductLink
            :key="componentKey"
            :productName="'shiaqgaSuperConcentrate'"
          />
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col>
          <ProductLink
            :key="componentKey"
            :productName="'shiaqgaPetImmunity'"
          />
        </v-col>
        <v-col>
          <iframe
            width="90%"
            height="400"
            src="https://www.youtube.com/embed/jLZN1ftDVZg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col>
          <h2>Essential Oils</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <h3>
            Essential Oil Singles
          </h3>
          <img
            height="350"
            src="https://firebasestorage.googleapis.com/v0/b/forage-basket-7a7ed.appspot.com/o/Essential%20Oils%2FSingles%2Flavender.jpeg?alt=media&token=5af3ff14-1ae6-4427-aaf2-0d4bc33883b7"
            alt=""
          />

          <p>
            Man Found Standing, Medicine Man Practitioner writes, "The
            Therapeutic Oils have powerful healing effects both on the physical
            and emotional levels. Its like having a miracle in a bottle."
          </p>
          <v-row>
            <v-col>
              <!-- here, add routing -->
              <v-btn
                :to="{
                  name: 'Product Category',
                  query: { productCategory: 'essentialOilSingles' },
                }"
              >
                Essential Oil Singles
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <h3>
            Essential Oil Blends
          </h3>
          <img
            height="350"
            src="https://firebasestorage.googleapis.com/v0/b/forage-basket-7a7ed.appspot.com/o/Essential%20Oils%2FBlends%2Ffirst_aid.jpeg?alt=media&token=6214324c-0d6d-4278-811c-0ab5d267dd5d"
            alt=""
          />

          <p>
            Man Found Standing, Medicine Man Practitioner writes, "The Blends
            are a great way to first experience the healing power of the
            Therapeutic Oils. The are synergistically formulated to target
            particular health issues."
          </p>
          <v-row>
            <v-col>
              <!-- here, add routing -->
              <v-btn
                :to="{
                  name: 'Product Category',
                  query: { productCategory: 'essentialOilBlends' },
                }"
              >
                Essential Oil Blends
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <h3>
            Essential Oils Accessories
          </h3>
          <img
            height="350"
            src="https://firebasestorage.googleapis.com/v0/b/forage-basket-7a7ed.appspot.com/o/Essential%20Oils%2FAccessories%2Fessential_oil_travel_case.jpeg?alt=media&token=2cf9053f-c49e-4526-993b-29ee0a815203"
            alt=""
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <v-row>
            <v-col>
              <!-- here, add routing -->
              <v-btn
                :to="{
                  name: 'Product Category',
                  query: { productCategory: 'accessories' },
                }"
              >
                Essential Oil Blends
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col>
          <!-- <ProductLink
            :title="'Energy Balancing Necklace'"
            :imgSrc="
              'https://firebasestorage.googleapis.com/v0/b/forage-basket-7a7ed.appspot.com/o/Accessories%2Fenergy-necklace_2_orig.jpg?alt=media&token=70eb4a98-b686-4a6e-bb31-6676d653ad0d'
            "
            :text="
              'The Energy Balancing Necklace was designed to be a protection against harmful electromagnetic energies, such as computers, cell phones, and so forth. It also provides powerful assistance in recovering from exposure to low-level radiation sources.'
            "
            :productId="'prod_HRTGAPVyQhAn9R'"
            :priceId="'price_1GtHmYHhLIxiPD1kkqIdB9Ux'"
          /> -->
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col>
          <h2>
            Gift Card
          </h2>
          <img
            height="350"
            src="https://firebasestorage.googleapis.com/v0/b/forage-basket-7a7ed.appspot.com/o/Accessories%2Fgiftcard-w640.png?alt=media&token=e619cd94-a180-4a33-b196-f9ebd0e2061b"
            alt=""
          />

          <p>
            $10.00 - $100.00
          </p>
          <p>
            Surprise someone special with a Gift Card! The Gift Cards are
            delivered to the recipient by email and include instructions on how
            to redeem them at checkout. Our Shiaqga.com Gift Cards have no
            additional processing fees and never expire.
          </p>
          <v-row>
            <v-col>
              <!-- here, add routing -->
              <v-btn>
                Gift Card
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col>
          <h2>
            More products will be developed soon.
          </h2>
          <p>
            Click the button below if you wish to join our Shiaqga Affiliate
            Program. You will receive 7% commission for your direct referrals
            and 10% commissions on your second tier level. In the future a
            company-wide profit sharing plan based on referrals sales will be
            added.
          </p>
          <v-row>
            <v-col>
              <!-- here, add routing -->
              <v-btn>
                Click Here
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ProductLink from '@/components/ProductLink.vue'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      componentKey: 0,
    }
  },
  methods: {
    forceRerender() {
      this.componentKey += 1
    },
  },
  components: {
    ProductLink,
  },
  computed: {
    ...mapState(['shopData']),
  },
  watch: {
    shopData: 'forceRerender',
  },
  created() {
    this.$store.dispatch('loadShopData')
  },
}
</script>
