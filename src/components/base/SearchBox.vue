<template>
  <div class="search-box">
    <form action="" method="get">
      <InputBox id="searchInput" type="text" placeholder="Tìm kiếm"/>
    </form>
  </div>
</template>
<script setup lang="ts">
import InputBox from './InputBox.vue';
</script>

<style lang="scss">
#searchInput {
  &::placeholder {
    color: rgb(255, 255, 255) !important;
  }
}
</style>