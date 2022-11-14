<template>
  <button class="btn btn-outline-secondary mb-3" type="button" @click="deleteCart">清空資料</button>
  <div class="row">
    <div class="border">
      <div class="container mt-4" v-if="carts.length > 0">
        <table class="table table-hover align-middle align-middle">
          <thead>
            <tr class="align-middle text-sm text-gray-400">
              <th scope="col" style="width: 52%">購物車</th>
              <th scope="col" class="d-none d-md-table-cell" style="width: 23%">人數</th>
              <th scope="col" class="d-none d-md-table-cell" style="width: 15%">總計</th>
              <th scope="col" class="d-none d-md-table-cell text-center" style="width: 10%">
                刪除
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carts" :key="item.id">
              <td class="d-flex align-items-center flex-column flex-sm-row">
                <div class="d-md-none p-2">
                  <button
                    type="button"
                    class="btn d-md-block mx-auto btnClose"
                    @click="removeCartItem(item.id)"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
                <img
                  class="productImg w-50 p-1"
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                  :title="item.product.title"
                />
                <div class="text-start py-4">
                  <div class="h5 fw-bolder">{{ item.product.title }}</div>
                  <div class="d-md-none">
                    <div class="py-2">NT${{ $filters.currency(item.total) }}</div>
                    <div class="input-group">
                      <button
                        type="button"
                        class="btn btn-outline-dark"
                        @click="updateCart(item, item.qty - 1)"
                        :disabled="item.qty == 1"
                      >
                        <i class="bi bi-dash" />
                      </button>
                      <input
                        id="num1"
                        type="text"
                        min="1"
                        v-model.number="item.qty"
                        class="form-control text-center border-dark bg-transparent"
                        readonly
                      />
                      <button
                        type="button"
                        class="btn btn-outline-dark"
                        @click="updateCart(item, item.qty + 1)"
                        :disabled="item.qty == 10"
                      >
                        <i class="bi bi-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              </td>
              <!-- 電腦版 -->
              <td class="d-none d-md-table-cell text-end align-middle">
                <div class="input-group">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    @click="updateCart(item, item.qty - 1)"
                    :disabled="item.qty == 1"
                  >
                    <i class="bi bi-dash" />
                  </button>
                  <input
                    id="num"
                    type="text"
                    min="1"
                    v-model.number="item.qty"
                    class="form-control form-control-sm text-center border-dark"
                    readonly
                  />
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    @click="updateCart(item, item.qty + 1)"
                    :disabled="item.qty === 10 || isLoad"
                  >
                    <i class="bi bi-plus" />
                  </button>
                </div>
              </td>
              <td class="d-none d-md-table-cell text-end h5">
                NT${{ $filters.currency(item.total) }}
              </td>
              <td class="d-none d-md-table-cell text-end">
                <button
                  type="button"
                  class="btn d-md-block mx-auto btnClose"
                  @click="removeCartItem(item.id)"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container-fluid mt-4" v-else>
        <div class="text-center">
          <i class="bi bi-cart4 display-1 fw-bold text-dark" />
          <h3 class="p-3">目前購物車還沒有商品唷</h3>
          <router-link to="/UserProducts" class="btn btn-outline-dark btn-lg mb-5"
            >選購商品</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      coupon_code: '',
      isLoading: false,
      isLoad: false,
    };
  },
  methods: {
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
    // 移除資料
    removeCartItem(i) {
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${i}`;
      this.$http.delete(Api).then((res) => {
        console.log(res);
        // this.$httpMessageState(response, '移除購物車品項');
        this.getusercarts();
      });
    },
    // 更新資料
    updateCart(i, num) {
      this.isLoad = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${i.id}`;
      //   this.isLoading = true;
      //   this.status.loadingItem = item.id;
      const cart = {
        product_id: i.product_id,
        // qty要調整
        qty: num,
      };
      this.$http.put(Api, { data: cart }).then((res) => {
        console.log(res);
        // this.status.loadingItem = '';
        this.isLoad = false;
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
