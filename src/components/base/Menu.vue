<script setup lang="ts">
import { reactive } from 'vue';
import homeIcon from '/src/assets/home.svg?url';
import movieIcon from '/src/assets/movie.svg?url';
import tvIcon from '/src/assets/tv.svg?url';

const menus = reactive([
  {
    name: 'Trang chủ',
    path: '/',
    icon: homeIcon
  },
  {
    name: 'Phim bộ',
    path: '/phim-bo',
    icon: movieIcon
  },
  {
    name: 'TV Shows',
    path: '/tv-shows',
    icon: tvIcon
  }
]);
</script>

<template>
  <nav class="main-menu">
    <ul class="main-menu__list">
      <li class="main-menu__item" v-for="(menu, index) in menus" :key="index">
        <a class="main-menu__link" :href="menu.path">
          <span class="main-menu__icon" :style="{ maskImage: `url(${menu.icon})`, WebkitMaskImage: `url(${menu.icon})` }"></span>
          <span>{{ menu.name }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.main-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 100%;
  }

  &__item {
    list-style: none;
    height: 100%;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    height: 100%;
    font-size: 1.1rem;
    gap: 10px;

    .main-menu__icon {
      display: block;
      mask-size: 100%;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      mask-position: center;
      height: 35px;
      width: 35px;
      background: white;
    }

    &:hover {
      color: #bd4b1f;

      .main-menu__icon {
        background: #bd4b1f;
      }
    }
  }
}
</style>