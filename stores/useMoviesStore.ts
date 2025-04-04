import type { IRating, TMDB_MOVIE } from "~/types";

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [] as TMDB_MOVIE[],
    ratings: [] as IRating[]
  }),
  actions: {
    async fetchMovies() {
      const movies = await $fetch('/api/movies')
      if (!movies) return
      this.movies = movies
      return this.movies
    },
    async fetchRatings() {
      const ratings = await $fetch('/api/ratings') as IRating[]
      if (!ratings) return
      this.ratings = ratings
      return this.ratings
    }
  }
})