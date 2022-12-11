<template>
  <div class="row justify-content-center align-items-stretch text-center" style="min-height: 50vh">
    <h3>已收到訂單</h3>
    <div class="text-center col-12 col-md-8 mb-3 shadow p-3">
      <p>確認資料後將於約3-5工作天與您聯繫課程事項</p>
      <p>我門將發送您的電子收據至您的電子信箱</p>
      <p>如有其他疑問歡迎聯絡我門</p>

      <h4>
        訂單編號: <span class="text-danger">{{ id }}</span>
      </h4>
    </div>
    <div><router-link to="/home" class="btn btn-outline-titleblue">返回首頁</router-link></div>
  </div>
</template>

<script>
// import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    // const dataID = ref('');
    const Route = useRoute();
    const { id } = Route.params;
    // const getParams = () => {
    // const Route = useRoute();
    // const { id } = Route.params;
    // dataID.value = id;
    // this.$emitter.emit('push-check', 'check');
    // };
    // getParams();

    return { id };
  },

  // methods: {
  //   getParams() {
  //     const { id } = this.$route.params;
  //     this.dataid = id;
  //     this.$emitter.emit('push-check', 'check');
  //   },
  // },
  // created() {
  //   this.getParams();
  // },
};
</script>

<style lang="scss" scoped></style>
