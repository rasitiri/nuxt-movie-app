<template>
  <div>
    <div class="border-b border-gray-800">
      <div class="flex items-center">
        <div class="mx-auto">
          <loading
            opacity="0.1"
            :active.sync="isLoading"
            loader="dots"
            color="#fc8c03"
          ></loading>
        </div>
      </div>
      <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
        <div class="flex-none">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${person.profile_path}`"
            alt="poster"
            class="lg:w-3/4 64"
          />
        </div>
        <div>
          <h2 class="text-4xl md:mt-0 font-semibold">{{ person.name }}</h2>
          <div class="flex flex-wrap items-center text-gray-400 text-sm">
            <svg class="fill-current text-orange-500 w-4" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <path
                  d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                  data-name="star"
                />
              </g>
            </svg>
            <span class="ml-1">{{ person.popularity }}</span>
            <span class="mx-2">|</span>
            <span>{{ person.birthday }}</span>
          </div>
          <p class="text-gray-300 mt-8 text-sm">{{ person.biography }}</p>
          <div class="mt-8">
            <h4 class="text-white font-semibold">
              {{ person.place_of_birth }}
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isLoading2" class="border-b border-gray-800">
      <div class="container mx-auto px-4 py-16">
        <h2 class="text-4xl font-semibold">Movies</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          <div
            v-for="credit in credits"
            :key="`${credit.id} ${credit.charecter}`"
            class="mt-8"
          >
            <nuxt-link :to="`/movie-detail/${credit.id}`">
              <img
                v-if="credit.poster_path"
                :src="`https://image.tmdb.org/t/p/w500/${credit.poster_path}`"
                class="hover:opacity-75 transition ease-in-out duration-150"
              />
              <img
                v-else
                src="https://www.pikpng.com/pngl/b/168-1685824_png-file-transparent-background-person-icon-clipart.png"
                class="hover:opacity-75 transition ease-in-out duration-150"
              />
            </nuxt-link>
            <div class="mt-2">
              <nuxt-link
                :to="`/people-detail/${credit.id}`"
                class="text-lg mt-2 hover:text-gray:300"
                >{{ credit.name }}</nuxt-link
              >
              <div class="text-sm text-gray-400">{{ credit.character }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: { Loading },
  data() {
    return {
      person: '',
      credits: '',
      isLoading: true,
      fullPage: true,
    }
  },
  mounted() {
    this.getPerson()
    this.getCredits()
  },
  methods: {
    async getPerson() {
      const res = await this.$axios.get(
        `/person/${this.$route.params.id}/?api_key=c26a114b77533a5023489c45b4fb3423`
      )
      this.person = res.data
      this.isLoading = false
    },

    async getCredits() {
      const res = await this.$axios.get(
        `/person/${this.$route.params.id}/movie_credits/?api_key=c26a114b77533a5023489c45b4fb3423`
      )

      this.credits = res.data.cast
      this.isLoading = false
    },
  },
}
</script>
