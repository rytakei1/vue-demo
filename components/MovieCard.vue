<template>
  <Card class="bg-white w-[232px] h-fit">
    <template #title>
      <img :src="getPosterUrl(movie.poster_path)" :alt='`${movie.title}-poster`' />
    </template>
    <template #content>
      <h5 class="h6 mb-2 truncate font-bold text-primary-900 transition group-hover:text-secondary-900">
        {{ movie.title }}
      </h5>
      <Rating :default-value="movie.vote_average / 2" readonly />
    </template>
  </Card>
</template>

<script setup lang='ts'>
import type { IRating, TMDB_MOVIE } from '~/types';

defineProps({
  movie: { type: Object as () => TMDB_MOVIE, required: true },
  rating: { type: Object as () => IRating }
})

const getPosterUrl = (posterPath: string) => {
  if (!posterPath) return 'https://placehold.co/200x300';
  return `https://image.tmdb.org/t/p/w200${posterPath}`;
};
</script>

<style scoped></style>