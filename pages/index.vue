<template>
  <div>
    <movies></movies>
    <tvshows></tvshows>
    <div class="flex items-center">
      <div class="mx-auto">
        <loading
          :opacity="opacity"
          :active.sync="isLoading"
          loader="dots"
          color="#fc8c03"
          :is-full-page="fullPage"
        ></loading>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import movies from '../components/movies'
import tvshows from '../components/tvshows'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: { movies, tvshows, Loading },
  data() {
    return {
      movies: '',
      isLoading: true,
      fullPage: true,
      opacity: 0.1,
    }
  },
  mounted() {
    this.getMovies()
  },
  methods: {
    async getMovies() {
      const res = await this.$axios.get(
        `/trending/tv/week?api_key=c26a114b77533a5023489c45b4fb3423`
      )
      this.movies = res.data.results
      this.isLoading = false
    },
  },
}
</script>
