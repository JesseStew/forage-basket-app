<template>
  <v-expansion-panel>
    <v-expansion-panel-header
      v-if="document.link"
      @click="openNewTab(document.link)"
    >
      {{ document.linkText }}
    </v-expansion-panel-header>
    <v-expansion-panel-header v-else @click="displayInfo">
      {{ document.linkText }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-container>
        <v-row>
          <v-col>
            <h2>{{ document.title }}</h2>
            <h3 v-if="document.author">by {{ document.author }}</h3>
            <div
              v-for="element in orderElements(document.elements)"
              :key="element.id"
            >
              <h3 v-if="element.element == 'h3'">
                {{ element.content }}
              </h3>
              <h3 v-if="element.title">{{ element.title }}</h3>
              <img
                class="image"
                v-if="element.element == 'img'"
                :src="element.src"
                alt=""
              />
              <v-row>
                <v-col>
                  <ul v-if="element.element == 'ul'">
                    <li
                      v-for="item in orderElements(element.content)"
                      :key="item.id"
                    >
                      {{ item.content }}
                    </li>
                  </ul>
                  <ol v-if="element.element == 'ol'">
                    <li
                      v-for="item in orderElements(element.content)"
                      :key="item.id"
                    >
                      {{ item.content }}
                    </li>
                  </ol>
                </v-col>
              </v-row>
              <p v-if="element.element == 'p'">{{ element.content }}</p>
              <blockquote v-if="element.element == 'blockquote'">
                {{ element.content }}
              </blockquote>
              <button
                v-if="element.element == 'link'"
                @click="openNewTab(element.link)"
              >
                <!-- here, Add local logic -->
                {{ element.linkText }}
              </button>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  data() {
    return {
      display: false,
    }
  },
  props: {
    document: {
      type: Object,
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name
    },
  },
  methods: {
    openNewTab(link) {
      window.open(link.toString())
    },
    isUl(index) {
      let regex = RegExp('ul$')
      return regex.test(index)
    },
    orderElements(elements) {
      return this.$_.orderBy(elements, 'order')
    },
  },
}
</script>

<style scoped></style>
