<template>
  <div class="diveBoard">
    <router-view></router-view>
  </div>
  <ToastMessages></ToastMessages>
  <CartIcons></CartIcons>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';
import CartIcons from '@/components/Front/CartIcons.vue';

export default {
  components: {
    ToastMessages,
    CartIcons,
  },
};
</script>

<style lang="scss" scoped></style>
