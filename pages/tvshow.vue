<template>
  <div>
    <div class="px-20 pt-12">
      <h1
        class="uppercase tracking-wider text-orange-500 text-lg font-semibold"
      >
        Popular TV Shows (Today)
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
      >
        <tv-show-card
          v-for="tv in tvToday"
          :id="tv.id"
          :key="tv.id"
          :poster-path="tv.poster_path"
          :title="tv.name"
          :vote-average="tv.vote_average"
          :release-date="tv.first_air_date"
        ></tv-show-card>
      </div>
    </div>
    <div class="px-20 pt-12">
      <h1
        class="uppercase border-t border-gray-800 pt-12 tracking-wider text-orange-500 text-lg font-semibold"
      >
        Popular TV Shows (This week)
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
      >
        <tv-show-card
          v-for="tv in tvWeek"
          :id="tv.id"
          :key="tv.id"
          :poster-path="tv.poster_path"
          :title="tv.name"
          :vote-average="tv.vote_average"
          :release-date="tv.first_air_date"
        ></tv-show-card>
      </div>
    </div>
  </div>
</template>

<script>
import TvShowCard from '../components/TvShowCard'

export default {
  components: { TvShowCard },
  data() {
    return {
      tvToday: '',
      tvWeek: '',
    }
  },
  mounted() {
    this.getTvToday()
    this.getTvThisWeek()
  },
  methods: {
    async getTvToday() {
      const res = await this.$axios.get(
        `/trending/tv/day?api_key=c26a114b77533a5023489c45b4fb3423`
      )
      this.tvToday = res.data.results
    },
    async getTvThisWeek() {
      const res = await this.$axios.get(
        `/trending/tv/week?api_key=c26a114b77533a5023489c45b4fb3423`
      )
      this.tvWeek = res.data.results
    },
  },
}
</script>
