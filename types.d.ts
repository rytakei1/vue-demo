export interface TMDB_MOVIE {
  original_title: string;
  vote_average: number;
  id: number;
  genre_ids: number[];
  poster_path: string;
  release_date: string;
  title: string;
  backdrop_path: string;
  overview: string;
}

export interface TMDB_RESPONSE {
  page: number;
  results: TMDB_MOVIE[];
  total_pages: number;
  total_results: number;
}

export interface IRating {
  movieId: number;
  userId: string | null;
  rating: number | null;
  movieName: string | null;
  moviePosterPath: string | null;
}