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
          v-if="progersNum === 66"
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
        class="position-absolute top-0 translate-middle btn bg-titleblue rounded-pill btnadj"
        style="left: 0"
      >
        <i class="bi text-white bi-cart2"></i>
      </button>
      <button
        type="button"
        class="position-absolute top-0 translate-middle btn bg-titleblue rounded-pill btnadj"
        style="left: 33%"
      >
        <i class="bi text-white bi-card-checklist"></i>
      </button>
      <button
        type="button"
        class="position-absolute top-0 translate-middle btn bg-titleblue rounded-pill btnadj"
        style="will-change: ; left: 66%"
      >
        <i class="bi text-white bi-cash-coin"></i>
      </button>
      <button
        type="button"
        class="position-absolute top-0 translate-middle btn bg-titleblue rounded-pill btnadj"
        style="left: 100%"
      >
        <i class="bi bi-emoji-smile text-white"></i>
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import OrdersStore from '@/stores/ordersStore';
import { storeToRefs } from 'pinia';

const ordersStore = OrdersStore();

export default {
  setup() {
    // 進度條位置
    const { progersNum } = storeToRefs(ordersStore);
    progersNum.value = 66;
    return { progersNum };
  },
};
</script>

<style lang="scss" scoped>
.btnadj {
  cursor: default;
}
</style>
