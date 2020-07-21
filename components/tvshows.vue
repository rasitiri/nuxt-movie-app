<template>
  <div class="px-20 pt-12">
    <h1
      class="uppercase border-t border-gray-800 pt-10 tracking-wider text-orange-500 text-lg font-semibold"
    >
      Popular TV Shows
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
    >
      <tv-show-card
        v-for="tvshow in tvshows"
        :id="tvshow.id"
        :key="tvshow.id"
        :poster-path="tvshow.poster_path"
        :title="tvshow.name"
        :vote-average="tvshow.vote_average"
        :release-date="tvshow.first_air_date"
      ></tv-show-card>
    </div>
  </div>
</template>

<script>
import TvShowCard from './TvShowCard'

export default {
  components: { TvShowCard },
  data() {
    return {
      tvshows: '',
    }
  },
  mounted() {
    this.getMovies()
  },
  methods: {
    async getMovies() {
      const res = await this.$axios.get(
        `/trending/tv/day?api_key=c26a114b77533a5023489c45b4fb3423`
      )
      this.tvshows = res.data.results
    },
  },
}
</script>
