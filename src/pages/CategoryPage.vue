<script lang="ts" setup>
import { onUpdated, ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';
import Layout from '../components/layout/Layout.vue';
import FeaturingMovies from '../components/FeaturingMovies.vue';
import Loading from '../components/base/Loading.vue';

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
    <Transition name="fade">
      <Suspense timeout="5000">
        <FeaturingMovies />
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </Transition>
  </Layout>
</template>