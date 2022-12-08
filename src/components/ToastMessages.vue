<template>
  <ToastView v-for="(msg, key) in messages" :key="key" :msg="msg" />
</template>

<script>
import ToastView from '@/components/ToastView.vue';
import StatusStore from '@/stores/statusStore';
import { storeToRefs } from 'pinia';

export default {
  components: { ToastView },

  setup() {
    const statusStore = StatusStore();
    const { messages } = storeToRefs(statusStore);
    return { messages };
  },
  // data() {
  //   return {
  //     messages: [],
  //   };
  // },
  // mounted() {
  //   // 後台
  //   this.$emitter.on('push-msg', (msg) => {
  //     const { style = 'succes', title, content } = msg;

  //     this.messages.push({ style, title, content });
  //   });
  //   // 前台
  //   this.$emitter.on('push-cart', (msg) => {
  //     const { content } = msg;

  //     this.messages.push({ content });
  //   });
  //   // 最愛
  //   this.$emitter.on('push-like', (msg) => {
  //     const { content } = msg;
  //     this.messages.push({ content });
  //   });
  // },
};
</script>
