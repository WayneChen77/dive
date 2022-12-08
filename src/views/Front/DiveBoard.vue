<template>
  <div class="diveBoard">
    <router-view></router-view>
  </div>

  <LoadingView :active="isLoading"></LoadingView>
  <ToastMessages></ToastMessages>
  <CartIcons></CartIcons>
</template>

<script>
import Status from '@/stores/statusStore';
import { storeToRefs } from 'pinia';
import ToastMessages from '@/components/ToastMessages.vue';
import CartIcons from '@/components/Front/CartIcons.vue';

// const status = Status();

export default {
  setup() {
    const status = Status();
    const { isLoading } = storeToRefs(status);

    return { isLoading };
  },
  components: {
    ToastMessages,
    CartIcons,
  },
  // created() {
  //   this.$router.push('/home');
  // },
};
</script>

<style lang="scss" scoped></style>
