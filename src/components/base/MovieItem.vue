<script lang="ts" setup>
import { MovieListInfo, MovieCategory } from '../../services/types';
import Icon from './Icon.vue';
defineProps<{
  movie: MovieListInfo;
  imgHost: string
}>()

function categoryListString(categoryTags: MovieCategory[]): string {
  return categoryTags.map(obj => obj.name).join(', ');
}
</script>

<template>
  <div class="movie-item">
    <div class="movie-item__image">
      <img :src="`${imgHost}/${movie.thumb_url}`" alt="">
    </div>
    <div class="movie-item__info">
      <strong class="movie-item__title">{{ movie.name }}</strong>
      <p class="movie-item__meta">{{ categoryListString(movie.category) }}</p>
      <div class="movie-item__play">
        <Icon src="play" />
      </div>
    </div>
    <div class="movie-item__eps-tag">{{ movie.episode_current }}</div>
  </div>
</template>

<style lang="scss" scoped>
.movie-item {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &__image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover {
    .movie-item__info {
      opacity: 1;
    }

    .movie-item__image {
      filter: blur(5px);
    }

    .movie-item__play {
      opacity: 1;
      left: 15px;
    }
  }

  &__info {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 20px;
    color: white;
    gap: 5px;
    opacity: 0;
    transition: opacity 0.25s;
    background: rgba(0, 0, 0, 0.4);
  }

  &__title {
    font-size: 1.2rem;
  }

  &__meta {
    font-size: 0.8rem;
  }

  &__eps-tag {
    position: absolute;
    top: 15px;
    right: 0;
    padding: 5px 10px;
    color: white;
    background: rgb(92, 92, 92);
  }

  &__play {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 15px;
    left: 0px;
    background: white;
    border-radius: 50%;
    transition: all 0.5s cubic-bezier(.05, .64, .02, 1);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :deep(.icon) {
      background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
      width: 35px;
      height: 35px;
      margin-left: 4px;
      margin-top: 1px;
    }
  }
}
</style>