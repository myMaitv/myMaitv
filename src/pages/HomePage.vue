<script lang="ts" setup>
import Layout from '../components/layout/Layout.vue';
import Featuring from '../components/Featuring.vue';
import Loading from '../components/base/Loading.vue';

</script>
<template>
  <Layout>
    <Transition name="fade">
      <Suspense>
        <Featuring />
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </Transition>
  </Layout>
</template>