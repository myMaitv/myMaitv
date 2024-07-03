<script setup lang="ts">
import Loading from "./components/base/Loading.vue";
</script>

<template>
  <RouterView v-slot="{ Component }" :key="$route.fullPath">
    <Suspense>
      <div>
        <component :is="Component"/>
      </div>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </RouterView>
</template>