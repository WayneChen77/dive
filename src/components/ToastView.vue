<template>
  <div class="toast-container position-fixed pe-3 end-0" data-aos="fade-left">
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
      <div class="toast-header" v-if="msg.style">
        <span :class="`bg-${msg.style}`" class="p-2 rounded me-2 d-inline-block"></span>
        <strong class="me-auto">{{ msg.title }}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>

      <div class="toast-body" v-if="msg.content">
        {{ msg.content }}
        <!-- <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button> -->
      </div>
    </div>
  </div>
</template>
<script>
import Toast from 'bootstrap/js/dist/toast';

export default {
  name: 'ToastView',
  props: ['msg'],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 2000,
    });
    toast.show();
  },
};
</script>
<style lang="scss" scoped>
.toast-container {
  top: 10vh;
}
.toast {
  width: 100%;
}
</style>
