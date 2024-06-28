<script lang="ts" setup>
import { getFeaturingMovies } from '../services/featuringMoviesService';
import type { FeaturingMovieResponse, MovieInfo } from '../services/types';
import type { Ref } from 'vue';
import FeaturingCarousel from './base/FeaturingCarousel.vue';

const movies: FeaturingMovieResponse = await getFeaturingMovies();
const movieItems: [MovieInfo] = await movies.items;
</script>

<template>
  <div class="featuring">
    <div class="featuring__banner">
      <FeaturingCarousel class="featuring__banner-slides" :slides="movieItems" />
    </div>
  </div>
</template>
<style lang="scss">
.featuring {
  height: 730px;
  position: relative;
  transition: opacity 1s ease;

  &__banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &.fade-enter-from {
      opacity: 0;
    }

    &.fade-enter-to {
      opacity: 1;
    }
  }

  &__banner-slides {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 75px;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1;
      background-blend-mode: multiply;
      mix-blend-mode: multiply;
      background-image: linear-gradient(180deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.7) 55%, rgba(17, 17, 17, 0) 100%);
      pointer-events: none;
    }
  }
}
</style>