export interface MovieInfo {
  modified: {
    time: string;
  };
  slug: string;
  origin_name: string;
  poster_url: string;
  thumb_url: string;
  year: number;
  [key: string]: any;
}

export interface FeaturingMovieResponse {
  items: MovieInfo[];
  status: boolean;
  pagination: {
    totalItems: number;
    totalItemsPerPage: number;
    currentPage: number;
    totalPages: number;
  };
}
