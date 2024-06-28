<template>
  <footer class="footer">
    <p class="footer__copyright">Copyright © {{ year }}. All rights reserved.</p>
  </footer>
</template>

<script lang="ts" setup>
const year = new Date(Date.now()).getFullYear();
</script>

<style lang="scss" scoped>
  .footer {
    position: relative;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(0, 0, 0, 0.4);
    padding: 0 60px;
    margin-top: 50px;
    &::before {
      height: 1px;
      background:linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      content: '';
    }
    &__copyright {
      font-size: 0.8rem;
      color: #fff;
    }
  }
</style>