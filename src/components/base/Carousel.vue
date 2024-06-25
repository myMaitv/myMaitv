<script setup lang="ts">
import { reactive } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import type { MovieInfo } from '../../services/types';

const props = defineProps<{
  slides: [any] | null
}>()

const options = reactive({ rewind: true, type: 'fade', autoplay: true, lazyLoad: true, speed: 1000 })

</script>

<template>
  <Splide class="carousel" :options="options" aria-label="Phim nổi bật">
    <template v-for="movie in slides" :key="movie.id">
      <SplideSlide class="carousel__item">
        <div>
          <RouterLink :to="{ name: 'home', params: { id: movie.id } }">
            <img :src="movie.thumb_url" :alt="movie.name">
          </RouterLink>
        </div>
      </SplideSlide>
    </template>
  </Splide>
</template>

<style lang="scss" scoped>
.carousel {
  :deep(.splide__track) {
    height: 100%;
  }
}
</style>