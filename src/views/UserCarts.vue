<template>
  <!-- 全域原件 -->
  <LoadingView :active="isLoading"></LoadingView>
  <div class="container UserCarts">
    <div class="title mb-5">
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link class="text-decoration-none" to="/">韋恩潛水</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">購物車</li>
        </ol>
      </nav>
      <hr />
      <div class="position-relative m-4">
        <div class="progress" style="height: 5px">
          <div
            class="progress-bar bg-titleblue"
            role="progressbar"
            style="width: 33%"
            aria-valuenow="33"
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
          class="position-absolute top-0 translate-middle btn btn-secondary rounded-pill"
          style="left: 100%"
        >
          <i class="bi bi-emoji-smile"></i>
        </button>
      </div>
    </div>
    <!-- 下方區塊 -->
    <div class="row">
      <!-- 下方左區塊 -->
      <div class="col-12 col-sm-8">
        <router-view></router-view>
      </div>
      <div class="col-12 col-sm-4">
        right
        <div class="input-group mb-3 input-group-sm">
          <label for="coupon"
            ><input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
          /></label>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CartsItem from '@/components/CartsItem';

export default {
  data() {
    return {
      carts: [],
      coupon_code: '',
      isload: false,
      isLoading: false,
    };
  },
  // components:{CartsItem},
  methods: {
    addCouponCode() {
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(Api, { data: coupon }).then((res) => {
        // res.message 回覆吐司
        // this.$httpMessageState(response, '加入優惠券');
        console.log(res);
        this.getusercarts();
        this.isLoading = false;
      });
    },
    // 取得購物車群資料
    getusercarts() {
      this.isLoading = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(Api)
        .then((res) => {
          // 優惠碼價格資料建議從cartsitem取得 不然資料更新會delay
          // 下傳上比較方便 要用mitt
          console.log(res.data.data.total);
          // final_total
          this.carts = res.data.data.carts;
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  created() {
    this.getusercarts();
  },
};
</script>

<style lang="scss" scoped></style>
