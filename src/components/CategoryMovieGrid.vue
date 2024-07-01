<script lang="ts" setup>
import Title from './base/Title.vue';
import { getCategoryMovies } from '../services/categoryMoviesService';

defineProps<{
  title: string,
  slug: string
}>()
</script>

<template>
  <Title>{{ title }}</Title>
</template>

<style lang="scss">
  
</style>