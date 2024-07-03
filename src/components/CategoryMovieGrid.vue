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

const ITEM_PER_ROW = 5;

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
    flex: 0 0 auto;
    width: calc((100% - (15px * 4)) / v-bind(ITEM_PER_ROW));
    height: 250px;
  }
  :deep(.movie-item__info) {
    opacity: 1;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 1%,
      rgba(0, 0, 0, 0.81) 63%,
      rgba(0, 0, 0, 1) 100%
    );
  }
}
</style>