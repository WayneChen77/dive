<template>
  <ToastView v-for="(msg, key) in messages" :key="key" :msg="msg" />
</template>

<script>
import ToastView from '@/components/ToastView.vue';
import StatusStore from '@/stores/statusStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import mitt from 'mitt';

export default {
  components: { ToastView },

  setup() {
    const statusStore = StatusStore();
    const { messages } = storeToRefs(statusStore);
    const emitter = mitt();
    // 無效 原因為何
    onMounted(() => {
      emitter.on('push-msg', (msg) => {
        const { style = 'succes', title, content } = msg;

        messages.push({ style, title, content });
        console.log(messages);
      });
    });
    return { messages };
  },
  // data() {
  //   return {
  //     messages: [],
  //   };
  // },
  mounted() {
    // 後台使用op api
    this.$emitter.on('push-msg', (msg) => {
      const { style = 'succes', title, content } = msg;
      this.messages.push({ style, title, content });
    });

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
  },
};
</script>
