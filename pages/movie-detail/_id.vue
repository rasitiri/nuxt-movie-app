<template>
  <div>
    <div class="border-b border-gray-800">
      <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
        <div class="flex-none">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt="poster"
            class="lg:w-3/4 w-5/6"
          />
        </div>
        <div>
          <h2 class="text-4xl mt-4 md:mt-0 font-semibold">{{ movie.title }}</h2>
          <div class="flex flex-wrap items-center text-gray-400 text-sm">
            <svg class="fill-current text-orange-500 w-4" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <path
                  d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                  data-name="star"
                />
              </g>
            </svg>
            <span class="ml-1">{{ movie.vote_average }}</span>
            <span class="mx-2">|</span>
            <span>{{ movie.release_date }}</span>
            <span class="mx-2">|</span>
            <span>Sci-Fi</span>
          </div>
          <p class="text-gray-300 mt-8">{{ movie.overview }}</p>
          <div class="mt-12">
            <h4 class="text-white font-semibold">Featured Crew</h4>
            <div class="flex mt-4">
              <div class="mr-8">
                <div>Director</div>
                <div class="text-sm text-gray-400">Director</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div class="mx-auto">
        <loading :is-full-page="fullPage" :active.sync="isLoading"></loading>
      </div>
    </div>
    <div class="border-b border-gray-800">
      <div class="container mx-auto px-4 py-16">
        <h2 class="text-4xl font-semibold">Cast</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          <div
            v-for="credit in credits"
            :key="credit.id + credit.cast_id"
            class="mt-8"
          >
            <nuxt-link :to="`/people-detail/${credit.id}`">
              <img
                v-if="credit.profile_path"
                :src="`https://image.tmdb.org/t/p/w500/${credit.profile_path}`"
                class="hover:opacity-75 transition ease-in-out duration-150 lg:w-11/12 w-5/6"
              />
              <img
                v-else
                :src="`https://via.placeholder.com/500x690.png/5c615e/d9dedb?text=${credit.name}`"
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
  components: {
    Loading,
  },
  data() {
    return {
      movie: '',
      credits: '',
      isLoading: true,
      fullPage: true,
    }
  },
  mounted() {
    this.getData()
    this.getCredits()
  },
  methods: {
    async getData() {
      const res = await this.$axios.get(
        `/movie/${this.$route.params.id}?api_key=c26a114b77533a5023489c45b4fb3423`
      )

      this.movie = res.data
      this.isLoading = false
    },
    async getCredits() {
      const res = await this.$axios.get(
        `/movie/${this.$route.params.id}/credits?api_key=c26a114b77533a5023489c45b4fb3423`
      )
      this.credits = res.data.cast
      this.isLoading = false
    },
  },
}
</script>
