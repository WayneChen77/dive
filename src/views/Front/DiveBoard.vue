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
  created() {
    this.$router.push('/home');
  },
};
</script>

<style lang="scss" scoped></style>
