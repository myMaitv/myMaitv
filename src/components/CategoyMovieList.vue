<script lang="ts" setup">
import Title from './base/Title.vue';
import { ref } from 'vue';

const props = defineProps<{
  title: string;
  category: string;
}>()
</script>

<template>
  <div class="category">
    <Title class="category__title">{{ title }}</Title>
    <div class="category__list">
      
    </div>
  </div>
</template>

<style lang="scss" scoped></style>