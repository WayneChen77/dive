<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="text-dark" to="CouponView">優惠券後台</router-link>
        </li>

        <li class="breadcrumb-item active" aria-current="page">
          <router-link class="text-dark" to="adminProduct">產品後台</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link class="text-dark" to="Orders">訂單資料</router-link>
        </li>
      </ol>
    </nav>

    <router-view></router-view>
  </div>
  <ToastMessages></ToastMessages>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    ToastMessages,
  },
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
