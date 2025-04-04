<template>
  <div class="flex gap-4 w-full flex-wrap">
    <MovieCard v-for="movie in moviesStore.movies" :key="movie.id" :movie="movie"
      :rating="moviesStore.ratings.find(r => r.movieId === movie.id)" />
  </div>
</template>

<script setup lang='ts'>

definePageMeta({
  layout: 'authenticated'
})
const moviesStore = useMoviesStore()
await useAsyncData('movies', () => Promise.all([moviesStore.fetchMovies(), moviesStore.fetchRatings()]))
</script>

<style scoped></style>