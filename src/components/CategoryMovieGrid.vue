<script lang="ts" setup>
import Title from "./base/Title.vue";
import MovieItem from "./base/MovieItem.vue";
import Pagination from "./base/Pagination.vue";
import type { CategoryMoviesResponse } from "../services/types";
import { getCategoryMovies } from "../services/categoryMoviesService";

const props = withDefaults(
  defineProps<{
    title: string;
    slug: string;
    page?: number;
  }>(),
  {
    title: "Phim",
    page: 1,
  }
);

const ITEM_PER_PAGE = 15;

const movies: CategoryMoviesResponse = await getCategoryMovies(
  props.slug,
  props.page,
  ITEM_PER_PAGE
);
</script>

<template>
  <div class="category-movie">
    <Title class="category-movie__title">{{ title }}</Title>
    <div class="category-movie__grid">
      <MovieItem
        class="category-movie__grid-item"
        v-for="movie in movies.data.items"
        :key="movie.id"
        :movie="movie"
        :imgHost="movies.data.APP_DOMAIN_CDN_IMAGE"
      />
    </div>
    <Pagination v-bind="movies.data.params.pagination" />
  </div>
</template>

<style lang="scss" scoped>
.category-movie {
  padding: 100px 30px 0;

  &__title {
    margin-bottom: 30px;
  }

  &__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  &__grid-item {
    flex: 1 0 350px;
    height: 250px;
  }
}
</style>