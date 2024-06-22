<script lang="ts" setup>
import { onUpdated, ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';
import Layout from '../components/layout/Layout.vue';

const category: Ref<string | null> = ref(null);
onMounted(() => {
  category.value = <string>useRouter().options.history.state.category;
})

onUpdated(() => {
  category.value = <string>useRouter().options.history.state.category;
})
</script>
<template>
  <Layout>
    <h1>Trang {{ category }}</h1>
  </Layout>
</template>