<script lang="ts" setup>
import { ref, onMounted, onUpdated } from 'vue';
import { getFeaturingMovies } from '../services/featuringMoviesService';
import type { FeaturingMovieResponse, MovieInfo } from '../services/types';
import type { Ref } from 'vue';
import Carousel from './base/Carousel.vue';

const movies: Ref<FeaturingMovieResponse | null> = ref(null);
const movieItems: Ref<[MovieInfo] | null> = ref(null);

const fetchMovies = async () => {
  try {
    movies.value = await getFeaturingMovies();
    movieItems.value = movies.value?.items;
  } catch (error) {
    console.log(`Error fetching featuring movies in component with message: ${error}`);
  }
}

onMounted(fetchMovies);

</script>

<template>
  <div class="featuring">
    <div class="featuring__banner">
      <Carousel class="featuring__banner-slides" :slides="movieItems" />
    </div>
  </div>
</template>
<style lang="scss">
.featuring {
  height: 900px;
  max-height: 100vh;
  position: relative;

  &__banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;

    &::after {
      content: '';
      width: calc(100% + 2px);
      height: 36%;
      position: absolute;
      right: -1px;
      bottom: -1px;
      left: -1px;
      z-index: 3;
      background-image: linear-gradient(0deg, #111 0, rgba(17, 17, 17, 0) 82%);
      pointer-events: none;
    }

    &::before {
      content: '';
      width: calc(100% + 2px);
      height: 50%;
      position: absolute;
      right: -1px;
      bottom: -1px;
      left: -1px;
      z-index: 2;
      background-image: linear-gradient(0deg, #111 0, rgba(17, 17, 17, 0) 100%);
      pointer-events: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
      height: 80px;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1;
      background-blend-mode: multiply;
      mix-blend-mode: multiply;
      background-image: linear-gradient(180deg, #111 0, rgba(17, 17, 17, 0) 100%);
      pointer-events: none;
    }
  }
}
</style>