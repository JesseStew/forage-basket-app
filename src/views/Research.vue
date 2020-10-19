<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Extensive Research</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          The Apán supplements contain many beneficial bioavailable
          ingredients and chemistry including the bitter triterpene compounds,
          3-beta-D-glucans, polysaccharides, germanium, angiotensin re-uptake
          inhibitors, and the organic essential oils with all their wonderful
          beneficial chemistry. There has been such a vast array of medical &amp
          scientific studies, throughout the entire world on these compounds and
          for such a long period of time, that it is a simple process of just
          'googling' to find greater information. So, we will not attempt to
          post 'an endless &amp ever-growing' list of references here but just
          share a little more information to get you jumpstarted on your own
          research.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>
          Cancer Research:
        </h2>
      </v-col>
      <v-col
        class="text-center"
        v-for="pdf in cancerResearch.pdf"
        :key="pdf.id"
        cols="12"
        md="6"
        lg="4"
        xl="3"
      >
        <v-btn target="_blank" class="ma-1" :href="pdf.src" :title="pdf.title">
          {{ truncate(pdf.title) }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>
          Immunostimulant
        </h2>
      </v-col>
      <v-col
        class="text-center"
        v-for="pdf in immunostimulant.pdf"
        :key="pdf.id"
        cols="12"
        md="6"
        lg="4"
        xl="3"
      >
        <v-btn target="_blank" class="ma-1" :href="pdf.src" :title="pdf.title">
          {{ truncate(pdf.title) }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>
          Radiation
        </h2>
      </v-col>
      <v-col
        class="text-center"
        v-for="pdf in radiation.pdf"
        :key="pdf.id"
        cols="12"
        md="6"
        lg="4"
        xl="3"
      >
        <v-btn target="_blank" class="ma-1" :href="pdf.src" :title="pdf.title">
          {{ truncate(pdf.title) }}
        </v-btn>
      </v-col>
      <!-- here, add article -->
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>
          Cholesterol
        </h2>
      </v-col>
      <v-col
        class="text-center"
        v-for="pdf in cholesterol.pdf"
        :key="pdf.id"
        cols="12"
        md="6"
        lg="4"
        xl="3"
      >
        <v-btn target="_blank" class="ma-1" :href="pdf.src" :title="pdf.title">
          {{ truncate(pdf.title) }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>
          Anthrax
        </h2>
      </v-col>
      <v-col
        class="text-center"
        v-for="pdf in anthrax.pdf"
        :key="pdf.id"
        cols="12"
        md="6"
        lg="4"
        xl="3"
      >
        <v-btn target="_blank" class="ma-1" :href="pdf.src" :title="pdf.title">
          {{ truncate(pdf.title) }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>
          Infectious Disease
        </h2>
      </v-col>
      <v-col
        class="text-center"
        v-for="pdf in infectiousDisease.pdf"
        :key="pdf.id"
        cols="12"
        md="6"
        lg="4"
        xl="3"
      >
        <v-btn target="_blank" class="ma-1" :href="pdf.src" :title="pdf.title">
          {{ truncate(pdf.title) }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>
          Injection vs Oral Administration
        </h2>
          <v-col
            class="text-center"
            v-for="pdf in injectionVsOralAdministration.pdf"
            :key="pdf.id"
            cols="12"
            md="6"
            lg="4"
            xl="3"
          >
            <v-btn
              target="_blank"
              class="ma-1"
              :href="pdf.src"
              :title="pdf.title"
            >
              {{ truncate(pdf.title) }}
            </v-btn>
          </v-col>
        </v-col>
      </v-row>
    <v-row>
      <v-col>
        <h2>
          Dr. Tim Chapman, M.D.
        </h2>
        <p>
          We would like to express our deep &amp sincere gratitude to Dr. Tim
          Chapman, M.D. for his extraordinary assistance in the gathering of a
          wide variety of research documentation and putting it together for
          easy access here.
        </p>
        <p>
          Dr. Chapman's personal care and expertise have been invaluable in
          assisting us to reach the professional medical community with this
          important information - for the benefit of highest level physicians
          who have dedicated their lives in serving their patients, to their
          ultimate ability, in achieving optimal health, wellness, and
          well-being.
        </p>
        <p>
          Dr. Chapman is retired now from his personal practice and contributes
          to our work on a 100% voluntary basis - strictly for the sake of
          educating others about advanced &amp effective solutions available
          through Integrative Medicine.
        </p>
        <p>
          Please note that he does so exclusively as a labor of love &amp
          commitment to his lifetime of caring endeavor, and receives no
          financial compensation whatsoever from our company.
        </p>
        <p>
          We have included a PDF Summary of Dr. Chapman's 48-year medical career
          history and, if you are under medical professional care and have
          specific questions regarding the utilization of Apán as a
          complementary protocol in your health recovery program, please
          <router-link to="/contact">contact us</router-link>.
        </p>
        <p>
          Dr. Chapman will be happy to speak with your own physician(s)
          personally if they are open to doing so.
        </p>
      </v-col>
      <v-col class="text-center" cols="12">
        <v-btn
          target="_blank"
          class="ma-1"
          :href="timChapman.src"
          :title="timChapman.title"
        >
          {{ truncate(timChapman.title) }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>
          20 Abstracts of 6999 on Beta Glucans listed on Pubmed
        </h2>
      </v-col>
      <v-col
        class="text-center"
        v-for="pdf in abstractsOnBetaGlucan.pdf"
        :key="pdf.id"
        cols="12"
        md="6"
        lg="4"
        xl="3"
      >
        <v-btn target="_blank" class="ma-1" :href="pdf.src" :title="pdf.title">
          {{ truncate(pdf.title) }}
        </v-btn>
      </v-col>
      <!-- here, link to article -->
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>
          Additionally, There are also 3362 abstracts on Germanium that can also
          be found on Pubmed:
        </h2>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn
          href="https://pubmed.ncbi.nlm.nih.gov/"
          target="_blank"
          title="Pubmed"
        >
          Pubmed
        </v-btn>
      </v-col>
      <v-col cols="12">
        <h3>
          The following document references just 7 of them:
        </h3>
      </v-col>
      <v-col class="text-center">
        <v-btn
          href="https://firebasestorage.googleapis.com/v0/b/forage-basket-7a7ed.appspot.com/o/Research%2F7_abstracts_with_germanium_research.pdf?alt=media&token=7c2c14dc-0a48-44f0-83ad-f26dfa35efde"
          target="_blank"
          title="7 Abstracts with Germanium Research"
        >
          Germanium Research <br />
          (7 Abstracts)
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>
          Avian Flu &amp Apán
        </h2>
        <p>
          Avian Flu Research Abstract<br />
          Dr. Landis<br />
          Location: Moroni, UT<br />
          Date: June 2006 through Sept. 2006
        </p>
        <p>
          Subject: 36 Hubble and White King Squabbing Pigeons<br />
          Control Group: 10 Pigeons<br />
          Test Group: 26 Pigeons<br />
        </p>
        <p>
          Introduction: Avian Influenza is a common problem for poultry
          operations in the United States. Most commercial poultry plants are
          under continuous quarantine because of the very real threat of the
          introduction of new and mutable strains of Influenza.
        </p>
        <p>
          The Battery Method of commercial poultry production provides the
          perfect laboratory to study virus mutability, since the environment is
          not only not natural (requiring the virus to change is modus
          operendi), but also the close quarters and significantly diminished
          immune systems of the battery birds provides an excellent pathway for
          the “skipping of generations.” In other words, what might have taken
          countless generations to create in the wild, is dramatically
          facilitated by the Battery Method.
        </p>
        <p>
          Research Description: A small backyard flock of squabbling pigeons was
          used for this research. The pigeons were housed in a facility with
          less than one square foot floor space per bird, with nest boxes
          attached to the back wall. This population density exceeds that of
          most Battery Production Facilities and so goes further in
          concentrating the transmissibility and mutability of virus.
        </p>
        <p>
          Ten birds were housed separately but with the same approximate living
          quarters. These were used as controls. The test group consisted of
          twenty six birds housed as described above. The Test Group was fed a
          ration containing “Apán” mixed into the feed for one week prior to
          the test.
        </p>
        <p>
          The Control Group was fed normally.
        </p>
        <p>
          Two infected individuals were obtained from a local, wild flock. The
          birds were demonstrating the classic symptoms of Avian Influenza. One
          infected bird was placed in each of the pens and the groups were
          observed for seven days.
        </p>
        <p>
          Data:
        </p>
        <p>
          Control Group: All of the control birds were infected with the
          Influenza within three days of exposure. All of the control group
          birds, including the original vector, died within the seven days of
          the observation period.
        </p>
        <p>
          Test Group: Although all of the test group birds demonstrated symptoms
          of infection, i.e., nasal discharge, coughing, swollen eyes, etc.,
          none of the twenty six test birds died during the observation period.
          The only bird in the test pen to succumb was the original vector.
        </p>
        <p>
          Follow up: The Test Group continued to receive Apán and were
          observed for three months post-infection. During that time, only two
          birds died – one of egg binding and another became entangled in the
          mesh wiring of the pen. None of the birds exhibited any symptoms after
          the initial bout of flu. The hens all went off production and did not
          become eggy again until the following spring. Molt was as usual.
        </p>
        <p>
          Postscript: It is interesting to note that, after the research was
          terminated, and the test group birds were no longer receiving Apán
          in their feed, the loft was infected by a different wild strain of
          Influenza which had been transported to the loft by wild starlings.
          The entire loft was stricken with the infection and two thirds of the
          birds died within the first five days after infection. Those that
          survived never returned to normal production.
        </p>
        <p>
          Findings: The commercial product “Apán” provided the immune support
          needed for the closely quartered birds to fight Influenza. The results
          of the Test Group were not unlike an influenza epidemic that is
          “winding down.” Individuals became symptomatic but were able to fight
          off the virus.
        </p>
        <p>
          The results of the Control Group were reminiscent of the first weeks
          of an epidemic, when the virus is the most dangerous. These
          observations are compelling and demonstrate a need for greater
          research into the effects of Beta1;3, 1;6 glucan use in prevention of
          Influenza Outbreak.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>
          Medical &amp Scientific Research on the Organic Essential Oils found
          in the Apán product:
        </h2>
        <p>
          (Apán contains essential oils that synergize to create greater body
          health. Each daily dosage is a small amount and generally regarded as
          safe by the FDA. Our essential oils, unlike most all oils in the
          marketplace, have been grown & processed properly. They are pure and
          unadulterated to maintain their delicate chemical constituents that
          provide authentic therapeutic actions. If you are completely
          unfamiliar with essential oils and the rampant adulteration in the
          marketplace, below are two links for you to learn more.)
        </p>
        <v-row>
          <v-col cols="6">
            <v-btn router to="/essential-oils">
              <!-- here, add routing -->
              ESSENTIAL OILS
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              target="_blank"
              href="https://www.ncbi.nlm.nih.gov/books/NBK65874/"
            >
              <!-- here, add routing -->
              PUBMED
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>
          Black Cumin
        </h2>
        <v-row>
          <v-col
            class="text-center"
            v-for="pdf in blackCumin.pdf"
            :key="pdf.id"
            cols="12"
            md="6"
            lg="4"
            xl="3"
          >
            <v-btn
              target="_blank"
              class="ma-1"
              :href="pdf.src"
              :title="pdf.title"
            >
              {{ truncate(pdf.title) }}
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" lg="4" xl="3" class="text-center">
            <v-btn>
              <!-- here, add routing -->
              CLICK HERE TO LEARN <br />
              MORE ABOUT BLACK CUMIN
              <!-- here, -->
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>
          Lemon
        </h2>
        <v-row>
          <v-col
            class="text-center"
            v-for="pdf in blackCumin.pdf"
            :key="pdf.id"
            cols="12"
            md="6"
            lg="4"
            xl="3"
          >
            <v-btn
              target="_blank"
              class="ma-1"
              :href="pdf.src"
              :title="pdf.title"
            >
              {{ truncate(pdf.title) }}
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" lg="4" xl="3" class="text-center">
            <v-btn>
              <!-- here, add routing -->
              CLICK HERE TO LEARN <br />
              MORE ABOUT LEMON
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>
          Cinnamon Bark
        </h2>
        <v-row>
          <v-col
            class="text-center"
            v-for="pdf in blackCumin.pdf"
            :key="pdf.id"
            cols="12"
            md="6"
            lg="4"
            xl="3"
          >
            <v-btn
              target="_blank"
              class="ma-1"
              :href="pdf.src"
              :title="pdf.title"
            >
              {{ truncate(pdf.title) }}
            </v-btn>
          </v-col>
          <v-col class="text-center" cols="12" md="6" lg="4" xl="3">
            <v-btn>
              <!-- here, add routing -->
              CLICK HERE TO LEARN <br />
              MORE ABOUT CINNAMON BARK
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>
          Peppermint
        </h2>
        <v-row>
          <v-col
            class="text-center"
            v-for="pdf in peppermint.pdf"
            :key="pdf.id"
            cols="12"
            md="6"
            lg="4"
            xl="3"
          >
            <v-btn
              target="_blank"
              class="ma-1"
              :href="pdf.src"
              :title="pdf.title"
            >
              {{ truncate(pdf.title) }}
            </v-btn>
          </v-col>
          <v-col class="text-center" cols="12" md="6" lg="4" xl="3">
            <v-btn>
              <!-- here, add routing -->
              CLICK HERE TO LEARN <br />
              MORE ABOUT PEPPERMINT
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>
          Sacred Frankincense
        </h2>
      </v-col>
      <v-col class="text-center" cols="12" md="6" lg="4" xl="3">
        <v-btn
          href="https://www.ncbi.nlm.nih.gov/books/NBK75572/"
          target="_blank"
        >
          SYSTEMATIC REVIEW <br />
          OF FRANKINCENSE ON PUBMED
        </v-btn>
      </v-col>
      <v-col class="text-center" cols="12" md="6" lg="4" xl="3">
        <v-btn
          href="https://www.ncbi.nlm.nih.gov/books/NBK75572/"
          target="_blank"
        >
          <!-- here, add routing -->
          LEARN MORE ABOUT <br />
          SACRED FRANKINCENSE
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          ​Click Here to view the list that the U.S. FDA already regarded as
          safe for internal usage (GRAS), updated 10/2016. (This list has been
          required to grow extensively over just the past few years as solid
          peer-reviewed research ever widens throughout the world.)
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <img
          style="max-width:100%"
          src="https://firebasestorage.googleapis.com/v0/b/forage-basket-7a7ed.appspot.com/o/Pictures%2Feinstein_1.jpg?alt=media&token=87bb2f43-276a-4ae5-be63-a575e663dad2"
          alt=""
        />
      </v-col>
      <v-col cols="12" md="6">
        <p>
          True results cannot ever be 'faked' - nor will 'exaggerated claims'
          make any difference in what actually happens in real life. The proof
          is, and always will be, in what any product actually does. We
          encourage Research - because of the reason behind all 'searching' - no
          matter what subject - is always, ultimately, to learn and be certain
          of the truth. Truth empowers us all in making the wisest choices for
          ourselves and our loved ones.
        </p>
        <p>
          True results cannot ever be 'faked' - nor will 'exaggerated claims'
          make any difference in what actually happens in real life. The proof
          is, and always will be, in what any product actually does. We
          encourage Research - because of the reason behind all 'searching' - no
          matter what subject - is always, ultimately, to learn and be certain
          of the truth. Truth empowers us all in making the wisest choices for
          ourselves and our loved ones.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InformationLink from '@/components/InformationLink.vue'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      timChapman: {
        title: 'Summary of 48 years in Professional Medical Service',
        order: 2,
        src:
          'https://firebasestorage.googleapis.com/v0/b/forage-basket-7a7ed.appspot.com/o/Research%2FinjectionVsOralAdministration%2Ftim_chapman_md_48_year_medical_history_summary.pdf?alt=media&token=be7d8841-49f6-43c6-92f9-08d41fe0fc51',
      },
    }
  },
	mounted() {
		window.scrollTo(0,0)
	},
  computed: {
    ...mapState(['researchData', 'researchDataLoaded']),
    currentRouteName() {
      return this.$route.name
    },
    cancerResearch() {
      return this.$_.find(this.researchData, (article) => {
        return article.title === 'cancer'
      })
    },
    immunostimulant() {
      return this.$_.find(this.researchData, (article) => {
        return article.title === 'immunostimulant'
      })
    },
    radiation() {
      return this.$_.find(this.researchData, (article) => {
        return article.title === 'radiation'
      })
    },
    cholesterol() {
      return this.$_.find(this.researchData, (article) => {
        return article.title === 'cholesterol'
      })
    },
    anthrax() {
      return this.$_.find(this.researchData, (article) => {
        return article.title === 'anthrax'
      })
    },
    infectiousDisease() {
      return this.$_.find(this.researchData, (article) => {
        return article.title === 'infectiousDisease'
      })
    },
    injectionVsOralAdministration() {
      return this.$_.find(this.researchData, (article) => {
        return article.title === 'injectionVsOralAdministration'
      })
    },
    abstractsOnBetaGlucan() {
      return this.$_.find(this.researchData, (article) => {
        return article.title === '20AbstractsOf6999OnBetaGlucansListedOnPubmed'
      })
    },
    blackCumin() {
      return this.$_.find(this.researchData, (article) => {
        return article.title === 'blackCumin'
      })
    },
    lemon() {
      return this.$_.find(this.researchData, (article) => {
        return article.title === 'lemon'
      })
    },
    cinnamonBark() {
      return this.$_.find(this.researchData, (article) => {
        return article.title === 'cinnamonBark'
      })
    },
    peppermint() {
      return this.$_.find(this.researchData, (article) => {
        return article.title === 'peppermint'
      })
    },
  },
  methods: {
    openNewTab(link) {
      window.open(link.toString())
    },
    truncate(text) {
      return this.$_.truncate(text)
    },
    isUl(index) {
      let regex = RegExp('ul$')
      return regex.test(index)
    },
    orderElements(elements) {
      return this.$_.orderBy(elements, 'order')
    },
  },
  components: {
    InformationLink,
  },
  created() {
    if (!this.researchDataLoaded) {
      console.log('loading this.researchData')
      this.$store.dispatch('loadResearchData')
    }
  },
}
</script>
