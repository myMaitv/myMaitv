<template>
  <span class="icon" v-if="icon" :style="{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }">
  </span>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps<{
  src: string,
}>()

const icon = ref('');

watchEffect(async () => {
  try {
    const svgModule = await import(`../../assets/${props.src}.svg?url`);
    icon.value = svgModule.default || svgModule;
  } catch (error) {
    console.log(error);
  }
})

</script>
<style lang="scss" scoped>
.icon {
  display: block;
  mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  background: white;
  width: 100%;
  height: 100%;
}
</style>