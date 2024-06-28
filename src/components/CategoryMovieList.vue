<script lang="ts" setup>
import Title from './base/Title.vue';
import MovieList from './base/MovieList.vue';
import type { CategoryMoviesResponse, MovieListInfo } from '../services/types';
import { getCategoryMovies } from '../services/categoryMoviesService';
const props = defineProps<{
  title: string;
  category: string;
}>()

const categoryMoiveList: CategoryMoviesResponse = await getCategoryMovies(props.category);
const movieList: MovieListInfo[] = await categoryMoiveList.data.items;
const APP_DOMAIN_CDN_IMAGE = await categoryMoiveList.data.APP_DOMAIN_CDN_IMAGE;

</script>

<template>
  <div class="category">
    <Title class="category__title">{{ title }}</Title>
    <div class="category__list">
      <MovieList :movies="movieList" :imgHost="APP_DOMAIN_CDN_IMAGE" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category {
  display: flex;
  flex-direction: column;
  padding: 0 60px;
}
</style>