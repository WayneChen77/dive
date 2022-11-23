<template>
  <div class="container Order title mb-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="text-decoration-none" to="/">首頁</router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <router-link class="text-decoration-none" to="/UserCarts">購物車</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">結帳</li>
      </ol>
    </nav>
    <hr />
    <div class="position-relative m-4">
      <div class="progress" style="height: 5px">
        <div
          v-if="num === 66"
          class="progress-bar bg-titleblue"
          role="progressbar"
          style="width: 66%"
          aria-valuenow="66"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          v-else
          class="progress-bar bg-titleblue"
          role="progressbar"
          style="width: 100%"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <button
        type="button"
        class="position-absolute top-0 translate-middle btn btn-primary rounded-pill"
        style="left: 0"
      >
        <i class="bi bi-cart2"></i>
      </button>
      <button
        type="button"
        class="position-absolute top-0 translate-middle btn btn-primary rounded-pill"
        style="left: 33%"
      >
        <i class="bi bi-card-checklist"></i>
      </button>
      <button
        type="button"
        class="position-absolute top-0 translate-middle btn btn-primary rounded-pill"
        style="will-change: ; left: 66%"
      >
        <i class="bi bi-cash-coin"></i>
      </button>
      <button
        type="button"
        class="position-absolute top-0 translate-middle btn btn-primary rounded-pill"
        style="left: 100%"
      >
        <i class="bi bi-emoji-smile"></i>
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 66,
    };
  },
  mounted() {
    // 確認有資料更新已抓取api刷新畫面
    this.$emitter.on('push-check', () => {
      this.num = 100;
    });
  },
};
</script>

<style lang="scss" scoped></style>
