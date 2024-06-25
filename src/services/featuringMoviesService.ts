import type { FeaturingMovieResponse } from "./types";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
});

export const getFeaturingMovies = async (
  page: number = 1
): Promise<FeaturingMovieResponse> => {
  try {
    const response = await api.get<FeaturingMovieResponse>(
      `/danh-sach/phim-moi-cap-nhat?page=${page}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch featuring movies: ${error.message}`);
    } else {
      throw new Error("Failed to fetch featuring movies");
    }
  }
};
