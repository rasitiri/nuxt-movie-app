<template>
  <div class="px-20 pt-12">
    <h1 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">
      Popular Movies
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
    >
      <movie-card
        v-for="movie in movies"
        :id="movie.id"
        :key="movie.id"
        :poster-path="movie.poster_path"
        :title="movie.title"
        :vote-average="movie.vote_average"
        :release-date="movie.release_date"
      ></movie-card>
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard'

export default {
  components: { MovieCard },
  data() {
    return {
      movies: '',
    }
  },
  mounted() {
    this.getMovies()
  },
  methods: {
    async getMovies() {
      const res = await this.$axios.get(
        `/trending/movie/day?api_key=c26a114b77533a5023489c45b4fb3423`
      )
      this.movies = res.data.results
    },
  },
}
</script>
