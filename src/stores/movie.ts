import { defineStore } from "pinia";
import type {
  FeaturingMovieResponse,
  CategoryMoviesResponse,
  MovieDetailResponse,
} from "@/services/types";

export const useFeaturingMovieStore = defineStore("featuringMovie", {
  state: () => ({
    apiRes: {} as FeaturingMovieResponse,
  }),
  actions: {
    setApiRes(res: FeaturingMovieResponse) {
      this.apiRes = res;
    },
    clearApiRes() {
      this.apiRes = {} as FeaturingMovieResponse;
    },
  },
});

export const useCategoryMovieStore = defineStore("categoryMovie", {
  state: () => ({
    apiRes: [] as CategoryMoviesResponse[],
  }),
  actions: {
    setApiRes(cateogry: string, res: CategoryMoviesResponse) {
      this.apiRes[cateogry] = res;
    },
    clearApiRes(category: string) {
      delete this.apiRes[category];
    },
  },
});

export const useMovieDetailStore = defineStore("movie", {
  state: () => ({
    apiRes: [] as MovieDetailResponse[],
  }),
  actions: {
    setApiRes(slug: string, res: MovieDetailResponse) {
      this.apiRes[slug] = res;
    },
    clearApiRes(slug: string) {
      delete this.apiRes[slug];
    },
  },
});
