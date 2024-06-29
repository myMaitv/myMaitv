import { defineStore } from "pinia";
import type {
  FeaturingMovieResponse,
  CategoryMoviesResponse,
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
      this.apiRes[category] = {} as CategoryMoviesResponse;
    },
  },
});
