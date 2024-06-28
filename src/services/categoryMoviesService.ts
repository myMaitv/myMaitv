import type { CategoryMoviesResponse } from "./types";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
});

export const getCategoryMovies = async (
  categorySlug: string,
  page: number = 1,
  limit: number = 5
): Promise<CategoryMoviesResponse> => {
  try {
    const response = await api.get<CategoryMoviesResponse>(
      `/v1/api/danh-sach/${categorySlug}?page=${page}&limit=${limit}`
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
