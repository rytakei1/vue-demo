import { TMDB_RESPONSE } from "~/types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { public: { tmdbReadToken } } = useRuntimeConfig(event)
  const page = query.page || 1;
  let apiUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&page=${page}`;
  if (query.search) {
    apiUrl += `&query=${query.search}`;
  } else {
    apiUrl = `https://api.themoviedb.org/3/discover/movie?vote_count.gte=200&page=${page}`;
  }
  const res = await fetch(apiUrl, {
    headers: { Authorization: `Bearer ${tmdbReadToken}` }
  });

  const response = (await res.json()) as TMDB_RESPONSE;
  return response.results || []
})