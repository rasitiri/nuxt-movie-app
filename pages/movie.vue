<template>
  <div>
    <div class="px-20 pt-12">
      <h1
        class="uppercase tracking-wider text-orange-500 text-lg font-semibold"
      >
        Popular Movies (Today)
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
      >
        <movie-card
          v-for="movie in moviesToday"
          :id="movie.id"
          :key="movie.id"
          :poster-path="movie.poster_path"
          :title="movie.title"
          :vote-average="movie.vote_average"
          :release-date="movie.release_date"
        ></movie-card>
      </div>
    </div>
    <div class="px-20 pt-12">
      <h1
        class="uppercase border-t border-gray-800 pt-12 tracking-wider text-orange-500 text-lg font-semibold"
      >
        Popular Movies (This week)
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
      >
        <movie-card
          v-for="movie in moviesWeek"
          :id="movie.id"
          :key="movie.id"
          :poster-path="movie.poster_path"
          :title="movie.title"
          :vote-average="movie.vote_average"
          :release-date="movie.release_date"
        ></movie-card>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard'

export default {
  components: { MovieCard },
  data() {
    return {
      moviesToday: '',
      moviesWeek: '',
    }
  },
  mounted() {
    this.getMoviesToday()
    this.getMoviesThisWeek()
  },
  methods: {
    async getMoviesToday() {
      const res = await this.$axios.get(
        `/trending/movie/day?api_key=c26a114b77533a5023489c45b4fb3423`
      )
      this.moviesToday = res.data.results
    },
    async getMoviesThisWeek() {
      const res = await this.$axios.get(
        `/trending/movie/week?api_key=c26a114b77533a5023489c45b4fb3423`
      )
      this.moviesWeek = res.data.results
    },
  },
}
</script>
