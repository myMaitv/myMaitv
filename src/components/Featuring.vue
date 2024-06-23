<script lang="ts" setup>
import { ref } from 'vue';
</script>

<template>
  <div class="featuring">
    <div class="featuring__background">
      <img src="https://kenh14cdn.com/203336854389633024/2024/6/18/1-1433-1718632919958-1718632920090278823002-17186733436311358633289.jpg" alt="">
    </div>
    <div class="featuring__title">
    </div>
  </div>
</template>
<style lang="scss">
.featuring {
  height: 900px;
  max-height: 100vh;
  position: relative;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0px -50px 43px -10px rgba(17, 17, 17, 1) inset;
      -webkit-box-shadow: 0px -50px 43px -10px rgba(17, 17, 17, 1) inset;
      -moz-box-shadow: 0px -50px 43px -10px rgba(17, 17, 17, 1) inset;
      z-index: 0;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      box-shadow: 0px 35px 43px -10px rgba(17, 17, 17, 0.5) inset;
      -webkit-box-shadow: 0px 35px 43px -10px rgba(17, 17, 17, 0.5) inset;
      -moz-box-shadow: 0px 35px 43px -10px rgba(17, 17, 17, 0.5) inset;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      z-index: -1;
    }
  }
}
</style>