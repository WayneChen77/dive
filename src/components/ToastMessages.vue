<template>
  <div class="toast-container position-fixed pe-3 top-0 end-0">
    <ToastView v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
import ToastView from '@/components/ToastView.vue';

export default {
  components: { ToastView },
  data() {
    return {
      messages: [],
    };
  },
  // inject: ['emitter'],
  mounted() {
    // 後台
    this.$emitter.on('push-msg', (msg) => {
      const { style = 'succes', title, content } = msg;

      this.messages.push({ style, title, content });
    });
    // 前台
    this.$emitter.on('push-cart', (msg) => {
      const { style = 'succes', title, content } = msg;

      this.messages.push({ style, title, content });
    });
    // 最愛
    this.$emitter.on('push-like', (msg) => {
      const { style = 'succes', title, content } = msg;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
