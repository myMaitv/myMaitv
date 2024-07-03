<script lang="ts" setup>
import type { MovieDetail } from '../../services/types';
import { arrayToString } from '../../utils/helper';
defineProps<{
  movie: MovieDetail
}>()
</script>

<template>
  <div class="movie-meta">
    <p class="movie-meta__item">
      <span class="movie-meta__label">Thể loại:</span>
      <span class="movie-meta__value">{{ arrayToString(movie.category) }}</span>
    </p>
    <p class="movie-meta__item">
      <span class="movie-meta__label">Đạo diễn:</span>
      <span class="movie-meta__value">{{ arrayToString(movie.director) }}</span>
    </p>
    <p class="movie-meta__item">
      <span class="movie-meta__label">Diễn viên:</span>
      <span class="movie-meta__value">{{ arrayToString(movie.actor) }}</span>
    </p>
    <p class="movie-meta__item">
      <span class="movie-meta__label">Quốc gia:</span>
      <span class="movie-meta__value">{{ arrayToString(movie.country) }}</span>
    </p>
    <p class="movie-meta__item">
      <span class="movie-meta__label">Chất lượng:</span>
      <span class="movie-meta__value">{{ movie.quality }}</span>
    </p>
    <p class="movie-meta__item">
      <span class="movie-meta__label">Thời lượng:</span>
      <span class="movie-meta__value">{{ movie.episode_total }} tập - {{ movie.time }}</span>
    </p>
    <p class="movie-meta__item">
      <span class="movie-meta__label">Ngày phát hành:</span>
      <span class="movie-meta__value">{{ movie.year }}</span>
    </p>
    <p class="movie-meta__item movie-meta__item--fullwidth">
      <span class="movie-meta__label">Nội dung phim:</span>
      <span class="movie-meta__value" v-html="movie.content"></span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.movie-meta {
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
  flex-direction: column;

  &__item {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  &__item--fullwidth {
    flex-direction: column;
  }

  &__label {
    font-weight: 600;
    white-space: nowrap;
  }

  &__value {
    font-weight: 300;
    font-size: 0.9rem;
  }
  
}
</style>