<template>
  <div class="search-box">
    <form action="" method="get">
      <InputBox type="text" placeholder="Tìm kiếm"/>
    </form>
  </div>
</template>
<script setup lang="ts">
import InputBox from './InputBox.vue';
import { ref } from 'vue';
</script>
<style lang="scss" scoped>
.search-box {
  
}
</style>