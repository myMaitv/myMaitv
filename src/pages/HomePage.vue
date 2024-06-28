<script lang="ts" setup>
import Layout from '../components/layout/Layout.vue';
import FeaturingMovies from '../components/FeaturingMovies.vue';
import Loading from '../components/base/Loading.vue';
import CategoryMovieList from '../components/CategoryMovieList.vue';
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
    <Suspense>
      <CategoryMovieList title="Hoạt hình" category="hoat-hinh" />
      <template #fallback>
      </template>
    </Suspense>
  </Layout>
</template>