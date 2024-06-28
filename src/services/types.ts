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

interface BaseData {
  name:string;
  slug: string;
}

export interface MovieCategory extends BaseData {}
export interface MovieCountry extends BaseData {}

export interface MovieListInfo {
  modified: {
    time: string;
  };
  name: string;
  slug: string;
  origin_name: string;
  type: string;
  poster_url: string;
  thumb_url: string;
  sub_docquyen: boolean;
  chieurap: boolean;
  time: string;
  episode_current: string;
  quality: string;
  lang: string;
  year: number;
  category: MovieCategory[];
  country: MovieCountry[];
  [key: string]: any;
}

export interface categoryMoviesResponse {
  status: boolean;
  msg: string;
  data: {
    items: MovieListInfo[];
    params: {
      pagination: {
        totalItems: number;
        totalItemsPerPage: number;
        currentPage: number;
        totalPages: number;
      };
    }
  }
}