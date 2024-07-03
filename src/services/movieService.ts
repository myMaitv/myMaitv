import axios from "axios";
import { useMovieDetailStore } from "../stores/movie";
import type { MovieDetailResponse } from "./types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
});

export const getMovieDetail = async (
  slug : string
): Promise<MovieDetailResponse> => {
  const store = useMovieDetailStore();
  try {
    let data;
    const storeIndex = `${slug}`;
    if (store.apiRes[storeIndex]) {
      data = store.apiRes[storeIndex];
    } else {
      const response = await api.get<MovieDetailResponse>(
        `/phim/${slug}`
      );
      data = response.data;
      store.setApiRes(storeIndex, data);
      setTimeout(() => {
        store.clearApiRes(storeIndex);
      }, 5 * 60 * 1000);
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch movie detail: ${error.message}`);
    } else {
      throw new Error("Failed to fetch movie detail");
    }
  }
}