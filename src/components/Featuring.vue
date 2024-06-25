<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getFeaturingMovies } from '../services/featuringMoviesService';
import type { FeaturingMovieResponse } from '../services/types';
import type { Ref } from 'vue';

const movies : Ref<FeaturingMovieResponse|null> = ref(null);

const fetchMovies = async () => {
  try {
    movies.value = await getFeaturingMovies();
  } catch (error) {
    console.log(`Error fetching featuring movies in component with message: ${error}`);
  }
}

onMounted(fetchMovies);

</script>

<template>
  <div class="featuring">
    <div class="featuring__banner">
      <div class="featuring__banner-slides">
        <img src="https://kenh14cdn.com/203336854389633024/2024/6/18/1-1433-1718632919958-1718632920090278823002-17186733436311358633289.jpg" alt="">
      </div>
    </div>
    <div class="featuring__title">
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
    z-index: -1;

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
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__banner-slides {
    position: relative;
    z-index: -1;
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
      background-blend-mode: multiply;
      mix-blend-mode: multiply;
      background-image: linear-gradient(180deg, #111 0, rgba(17, 17, 17, 0) 100%);
    }
  }
}
</style>