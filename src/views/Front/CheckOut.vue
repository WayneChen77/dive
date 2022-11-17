<template>
  <div class="row justify-content-center text-center">
    <h3>已收到訂單</h3>
    <div class="text-center col-12 col-md-8 mb-3 shadow">
      <p>確認資料後將於約3-5工作天與您聯繫課程事項</p>
      <p>我門將發送您的電子收據至您的電子信箱</p>
      如有其他疑問歡迎聯絡我門
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataid: '',
    };
  },

  methods: {
    getParams() {
      const { id } = this.$route.params;
      this.dataid = id;
      this.$emitter.emit('push-check', 'check');
    },
  },
  created() {
    this.getParams();
  },
};
</script>

<style lang="scss" scoped></style>
