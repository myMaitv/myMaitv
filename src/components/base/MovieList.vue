<template>
  <Splide v-if="movies" class="movie-list" :options="options">
    <template v-for="movie in movies" :key="movie.id">
      <SplideSlide class="movie-list__item">
        <MovieItem :movie="movie" :img-host="imgHost" />
      </SplideSlide>
    </template>
  </Splide>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import MovieItem from './MovieItem.vue';
import type { MovieListInfo } from '../../services/types';
defineProps<{
  movies: MovieListInfo[] | null;
  imgHost: string;
}>()

const options = reactive({ type: 'slide', drag: 'free', wheel: true, perPage: 1, lazyLoad: true, autoWidth: true, speed: 300, gap: "20px", pagination: false, waitForTransition: true })

</script>
<style lang="scss" scoped>
.movie-list {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-top: 30px;

  :deep(.splide__arrow--prev) {
    left: -2.6em;
  }

  :deep(.splide__arrow--next) {
    right: -2.6em;
  }

  &__item {
    flex: 0 0 350px;
    position: relative;
    overflow: hidden;
    height: 250px;
  }
}
</style>