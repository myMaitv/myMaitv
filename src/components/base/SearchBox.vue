<template>
  <div class="search-box">
    <form action="" method="get">
      <InputBox id="searchInput" type="text" placeholder="Tìm kiếm" />
    </form>
  </div>
</template>
<script setup lang="ts">
import InputBox from './InputBox.vue';
</script>

<style lang="scss" scoped>

.search-box {
  :deep(#searchInput) {
    &::placeholder {
      color: rgb(255, 255, 255);
    }
  }
  :deep(.input-box:not(:focus-within)) {
    border-color: white;
  }

  :deep(.input-box__icon) {
    background: #fff;
  }
}
</style>