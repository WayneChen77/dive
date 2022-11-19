<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="text-dark" to="CouponView">優惠券後台</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link class="text-dark" to="EditCandy">candy後台</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <router-link class="text-dark" to="adminProduct">產品後台</router-link>
        </li>
      </ol>
    </nav>

    <router-view></router-view>
  </div>
  <ToastMessages></ToastMessages>
</template>

<script>
// 使用mitt 直接父傳子下去讓所有原件使用 減少import程式碼
import ToastMessages from '@/components/ToastMessages.vue';
// import mitt from 'mitt';

// const emitter = mitt();

export default {
  components: {
    ToastMessages,
  },
  // provide() {
  //   return { emitter };
  // },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;

    const Api = `${process.env.VUE_APP_API}api/user/check`;

    this.$http
      .post(Api)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('login');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style lang="scss" scoped></style>
