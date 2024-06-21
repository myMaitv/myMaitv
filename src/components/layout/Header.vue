<script setup lang="ts">
import Menu from '../base/Menu.vue';
import { ref, onMounted, computed } from 'vue';
import logo from '/logo-mytv.svg?url';

const scrollTop = ref(0);
const classObject = computed(() => {
  return {
    'header--bg-active': scrollTop.value > 0
  }
})
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollTop.value = window.scrollY;
  })
})
</script>
<template>
  <header class="header" :class="classObject">
    <div class="header__left">
      <div class="header__logo">
        <img :src="logo" alt="logo">
      </div>
      <Menu />
    </div>
    <div class="header__right"></div>
  </header>

</template>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  padding: 0 60px;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background: rgb(0, 0, 0, 0);
  transition: background 0.3s;
  border-bottom: 1px solid #424242b0;

  &--bg-active {
    background: rgb(0, 0, 0, 0.4);
  }

  &__left,
  &__right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 100%;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    img {
      height: 100%;
      width: auto;
    }
  }
}
</style>