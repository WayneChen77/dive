<template>
  <div class="container UserCarts">
    <div class="title mb-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link class="text-decoration-none" to="/home">首頁</router-link>
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
          class="position-absolute top-0 translate-middle btn btn-titleblue rounded-pill btnadj"
          style="left: 0"
        >
          <i class="bi bi-cart2"></i>
        </button>
        <button
          type="button"
          class="position-absolute top-0 translate-middle btn btn-titleblue rounded-pill btnadj"
          style="left: 33%"
        >
          <i class="bi bi-card-checklist"></i>
        </button>
        <button
          type="button"
          class="position-absolute top-0 translate-middle btn btn-titleblue rounded-pill btnadj"
          style="will-change: ; left: 66%"
        >
          <i class="bi bi-cash-coin"></i>
        </button>
        <button
          type="button"
          class="position-absolute top-0 translate-middle btn btn-titleblue rounded-pill btnadj"
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
        <CartsItem v-if="!sendData"> </CartsItem>
        <div class="cartsrwd"></div>
      </div>
      <div class="col-12 col-md-4">
        <!-- 右區塊 -->
        <div class="input-group mt-md-0 mt-3 mb-3 input-group-sm" v-if="!sendData">
          <label for="coupon"
            ><input
              type="text"
              class="form-control mb-3"
              v-model="couponCode"
              placeholder="請輸入優惠碼"
          /></label>
          <div class="input-group-append ms-3">
            <!-- 沒商品禁用 disabled -->
            <button
              :disabled="carts.length < 1"
              class="btn btn-outline-titleblue"
              type="button"
              @click="addCouponCode"
            >
              套用優惠碼
            </button>
          </div>
          <span class="mt-3 text-titleblue">迎接假期！輸入： godive ，即享88折優惠！</span>
        </div>
        <!-- 伸縮品項 -->
        <div class="col-12 col-md-10 rounded mb-3" v-if="sendData">
          <div class="accordion w-100" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button text-titleblue"
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
                class="accordion-collapse collapse show text-titleblue"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row" v-for="i in carts" :key="i.id">
                    <div class="col-8">{{ i.product.title }}</div>
                    <div class="col-4 text-end">X{{ i.qty }}</div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3 pe-2 col-12 col-md-10">
          <div class="border rounded p-0">
            <div class="bg-bgblue rounded-top text-center text-titleblue py-3 mb-3">
              <h3>訂單資料</h3>
            </div>
            <div class="mx-3">
              商品金額:
              <p class="text-end">${{ this.$filters.currency(price.total) }}</p>
            </div>
            <div v-if="price.total != price.final_total" class="mx-3">
              折扣金額:
              <p class="text-end">${{ this.$filters.currency(price.total - price.final_total) }}</p>
            </div>
            <div class="text-danger mx-3">
              總金額:
              <p class="text-end">${{ this.$filters.currency(price.final_total) }}</p>
            </div>
            <!-- 沒商品禁用 :disabled-->
            <div class="text-end">
              <button
                class="btn btn-outline-titleblue m-3"
                type="button"
                :disabled="carts.length < 1"
                @click="sendData = true"
                v-if="!sendData"
              >
                送出資料
              </button>
            </div>
          </div>
        </div>
        <teleport to=".cartsrwd" v-if="isMounted" class="imgtp" :disabled="isDisabled">
          <CartsForm v-if="sendData"></CartsForm>
        </teleport>
      </div>
    </div>
  </div>
</template>

<script>
import CartsItem from '@/components/Front/CartsItem.vue';
import CartsForm from '@/components/Front/CartsForm.vue';

import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import axios from 'axios';
import UserProductsStore from '@/stores/userProductsStore';
import statusStore from '@/stores/statusStore';

const userProductsStore = UserProductsStore();

export default {
  setup() {
    const isMounted = ref(false);
    const isDisabled = ref(false);
    const sendData = ref(false);
    const couponCode = ref('');

    onMounted(() => {
      // 解決Teleport掛載問題
      isMounted.value = true;
      if (window.innerWidth < 430) {
        isDisabled.value = true;
      }
      // 判斷當前螢幕關閉Teleport
      window.addEventListener('resize', () => {
        console.log(window.screen.width);
        if (window.innerWidth < 430) {
          isDisabled.value = true;
        } else {
          isDisabled.value = false;
        }
      });
    });

    // 取得資料
    const { carts, price } = storeToRefs(userProductsStore);
    const { getusercarts } = userProductsStore;
    getusercarts();
    const addCouponCode = () => {
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: couponCode.value,
      };
      // this.isLoading = true;
      axios.post(Api, { data: coupon }).then((res) => {
        const statusData = {
          style: 'info',
          title: res.data.message,
          content: res.data.message,
        };
        statusStore.pushMessage(statusData);
      });

      this.getusercarts();
      // this.isLoading = false;
    };

    return {
      couponCode,
      sendData,
      isDisabled,
      isMounted,
      carts,
      price,
      getusercarts,
      addCouponCode,
    };
  },

  components: {
    CartsItem,
    CartsForm,
  },
  methods: {
    // 更新車群資料
    // reduceCart(item) {
    //   this.isLoad = true;
    //   const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
    //   const cart = {
    //     product_id: item.product_id,
    //     qty: item.qty - 1,
    //   };
    //   this.$http.put(Api, { data: cart }).then((res) => {
    //     this.$emitter.emit('push-cart', {
    //       style: 'warning',
    //       title: res.data.message,
    //       content: res.data.message,
    //     });
    //     console.log(res);
    //     this.isLoad = false;
    //     this.getusercarts();
    //   });
    // },
    // addCart(item) {
    //   this.isLoad = true;
    //   const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
    //   const cart = {
    //     product_id: item.product_id,
    //     qty: item.qty + 1,
    //   };
    //   this.$http.put(Api, { data: cart }).then((res) => {
    //     this.$emitter.emit('push-cart', {
    //       style: 'success',
    //       title: res.data.message,
    //       content: res.data.message,
    //     });
    //     console.log(res);
    //     this.isLoad = false;
    //     this.getusercarts();
    //   });
    // },
    // adjCart(item) {
    //   this.isLoad = true;
    //   const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
    //   const cart = {
    //     product_id: item.product_id,
    //     qty: item.qty,
    //   };
    //   this.$http.put(Api, { data: cart }).then((res) => {
    //     this.$emitter.emit('push-cart', {
    //       style: 'success',
    //       title: res.data.message,
    //       content: res.data.message,
    //     });
    //     console.log(res);
    //     this.isLoad = false;
    //     this.getusercarts();
    //   });
    // },
    // // 移除單一資料
    // removeCartItem(id) {
    //   const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
    //   this.$http.delete(Api).then((res) => {
    //     this.$emitter.emit('push-cart', {
    //       style: 'warning',
    //       title: res.data.message,
    //       content: res.data.message,
    //     });
    //     this.getusercarts();
    //   });
    // },
    // // 清空資料
    // deleteCart() {
    //   this.isLoading = true;
    //   const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
    //   this.$http.delete(Api).then((res) => {
    //     this.isLoading = false;
    //     this.$emitter.emit('push-cart', {
    //       style: 'danger',
    //       title: res.data.message,
    //       content: res.data.message,
    //     });
    //     this.getusercarts();
    //   });
    // },
    // addCouponCode() {
    //   const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
    //   const coupon = {
    //     code: this.coupon_code,
    //   };
    //   this.isLoading = true;
    //   this.$http.post(Api, { data: coupon }).then((res) => {
    //     this.$emitter.emit('push-cart', {
    //       style: 'info',
    //       title: res.data.message,
    //       content: res.data.message,
    //     });
    //     this.getusercarts();
    //     this.isLoading = false;
    //   });
    // },
    // // 取得購物車群資料
    // getusercarts() {
    //   this.isLoading = true;
    //   const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
    //   this.$http
    //     .get(Api)
    //     .then((res) => {
    //       this.price = res.data.data;
    //       this.carts = res.data.data.carts;
    //       this.isLoading = false;
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
  },
  // created() {
  //   this.getusercarts();
  // },
};
</script>

<style lang="scss" scoped>
.btnadj {
  cursor: default;
}
</style>
