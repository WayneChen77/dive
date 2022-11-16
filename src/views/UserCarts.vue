<template>
  <!-- 全域原件 -->
  <LoadingView :active="isLoading"></LoadingView>
  <div class="container UserCarts">
    <div class="title mb-5">
      <nav aria-label="breadcrumb">
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
            v-if="!sendData"
            class="progress-bar bg-titleblue"
            role="progressbar"
            style="width: 0%"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            v-if="sendData"
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
        <CartsItem
          :data="carts"
          @reduce-Cart="reduceCart"
          @add-Cart="addCart"
          @remove-Cart="removeCartItem"
          @dele-Cart="deleteCart"
          v-if="!sendData"
        ></CartsItem>

        <CartsForm v-if="sendData"></CartsForm>
      </div>
      <div class="col-12 col-md-4">
        right
        <div class="input-group mb-3 input-group-sm" v-if="!sendData">
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
        <div class="col-12 col-md-8 rounded mb-3" v-if="sendData">
          <div class="accordion w-100" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  購物車品項
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default,
                  until the collapse plugin adds the appropriate classes that we use to style each
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row ms-1 pe-2">
          <div class="col-12 col-md-8 border rounded p-3">
            <div class="text-gray">
              商品金額:
              <p class="text-end">${{ price.total }}</p>
            </div>
            <div v-if="price.total != price.final_total">
              折扣金額:
              <p class="text-end">${{ price.total - price.final_total }}</p>
            </div>
            <div class="text-danger">
              總金額:
              <p class="text-end">${{ price.final_total }}</p>
            </div>
            <div class="text-end">
              <button
                class="btn btn-outline-secondary mb-3"
                type="button"
                @click="sendData = true"
                v-if="!sendData"
              >
                送出資料
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartsItem from '@/components/CartsItem.vue';
import CartsForm from '@/components/CartsForm.vue';

export default {
  data() {
    return {
      carts: [],
      price: {},
      coupon_code: '',
      sendData: false,
      isload: false,
      isLoading: false,
    };
  },
  components: { CartsItem, CartsForm },
  methods: {
    // 更新資料
    reduceCart(item) {
      this.isLoad = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty - 1,
      };
      this.$http.put(Api, { data: cart }).then((res) => {
        console.log(res);
        this.isLoad = false;
        this.getusercarts();
      });
    },
    addCart(item) {
      this.isLoad = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty + 1,
      };
      this.$http.put(Api, { data: cart }).then((res) => {
        console.log(res);
        this.isLoad = false;
        this.getusercarts();
      });
    },
    // 移除資料
    removeCartItem(id) {
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(Api).then((res) => {
        console.log(res);
        // this.$httpMessageState(response, '移除購物車品項');
        this.getusercarts();
      });
    },
    // 清空資料
    deleteCart() {
      this.isLoading = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(Api).then((res) => {
        console.log(res);
        this.isLoading = false;
        // this.$httpMessageState(response, '移除購物車品項');
        this.getusercarts();
      });
    },

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
          this.price = res.data.data;
          this.carts = res.data.data.carts;
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    toForm() {},
  },

  created() {
    this.getusercarts();
  },
};
</script>

<style lang="scss" scoped></style>
