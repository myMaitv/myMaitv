<template>
  <ul v-if="movies" class="movie-list">
    <li v-for="(movie) in movies" :key="movie.id" class="movie-list__item">
      <div class="movie-list__image">
        <img :src="`${imgHost}${movie.thumb_url}`" alt="">
      </div>
      <div class="movie-list__info">
        <strong class="movie-list__title">{{ movie.name }}</strong>

      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { MovieCategory } from '../../services/types';
defineProps<{
  movies: [any] | null;
  imgHost: string;
  apiHost: string;
}>()

function categoryListString : string (categoryTags : MovieCategory) {
  
}
</script>
<style lang="scss"></style>