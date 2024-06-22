<script lang="ts" setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="main-layout">
    <Header/>
    <main>
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  main {
    flex-grow: 1;
  }
}
</style>