import { defineStore } from "pinia";
import type {
  FeaturingMovieResponse,
  CategoryMoviesResponse,
  MovieDetailResponse,
} from "../services/types";

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
    apiRes: new Map<string, CategoryMoviesResponse>(),
  }),
  actions: {
    setApiRes(cateogry: string, res: CategoryMoviesResponse) {
      this.apiRes.set(cateogry, res);
    },
    clearApiRes(category: string) {
      this.apiRes.delete(category);
    },
  },
});

export const useMovieDetailStore = defineStore("movie", {
  state: () => ({
    apiRes: new Map<string, MovieDetailResponse>(),
  }),
  actions: {
    setApiRes(slug: string, res: MovieDetailResponse) {
      this.apiRes.set(slug, res);
    },
    clearApiRes(slug: string) {
      this.apiRes.delete(slug);
    },
  },
});
