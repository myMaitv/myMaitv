<script lang="ts" setup>
import type { MovieListInfo } from '../../services/types';
defineProps<{
  movies: MovieListInfo[]
}>()
</script>

<template>
  <div class="movie-grid">
    <div class="movie-grid__item" v-for="movie in movies" key="movie.id">
      
    </div>
  </div>
</template>

<style lang="scss"></style>