<template>
  <div class="border-top">
    <form class="mt-5 row justify-content-center" @submit.prevent="signin">
      <div class="col-md-5 col-8">
        <h1 class="h3 mb-3 font-weight-900">管理員登入</h1>
        <div class="mb-2">
          <label for="inputEmail " class="d-block"
            >請輸入管理員帳號
            <input
              type="email"
              id="inputEmail"
              class="w-100 p-2"
              placeholder="Email address"
              required
              v-model="user.username"
          /></label>
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="d-block"
            >請輸入管理員密碼
            <input
              type="password"
              id="inputPassword"
              class="w-100 p-2"
              placeholder="Password"
              required
              autocomplete="off"
              v-model="user.password"
          /></label>
        </div>
        <span class="bg-warning" v-if="warnMsg">帳號或密碼錯誤</span>
        <div class="mt-4">
          <button class="text-white bg-titleblue p-2 w-100" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      warnMsg: '',
    };
  },
  methods: {
    signin() {
      const Api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http
        .post(Api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `userToken=${token}; expires=${new Date(expired)}`;
            this.$router.push('dashboard/adminProduct');
          } else {
            this.warnMsg = ' ';
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
