<script lang="ts" setup>
import Layout from '../components/layout/Layout.vue';
import FeaturingMovies from '../components/FeaturingMovies.vue';
import Loading from '../components/base/Loading.vue';

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