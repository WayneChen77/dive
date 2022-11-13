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
    <div class="row">
      <div class="col-12 col-sm-8" v-if="carts">
        <div class="box row">
          <div class="title col-sm-7 col-8 my-3" v-for="(i, key) in carts" :key="key">
            <h1>{{ i.product.title }}</h1>
            <p>{{ i.product.engtitle }}</p>
          </div>
        </div>
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
        <div class="card-body text-gray">
          <a
            href="#"
            class="btn btn-primary position-absolute end-0"
            @click.prevent="removeCartItem"
            >刪除
          </a>
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
      isload: false,
      isLoading: false,
    };
  },
  methods: {
    // 移除資料
    removeCartItem(i) {
      this.isload = i.id;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${i.id}`;
      this.$http.delete(Api).then((res) => {
        console.log(res);
        // this.$httpMessageState(response, '移除購物車品項');
      });
    },
    // 更新資料
    updateCart(i) {
      this.isload = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${i.id}`;
      //   this.isLoading = true;
      //   this.status.loadingItem = item.id;
      const cart = {
        product_id: i.product_id,
        // qty要調整
        qty: i.qty,
      };
      this.$http.put(Api, { data: cart }).then((res) => {
        console.log(res);
        // this.status.loadingItem = '';
        this.isload = false;
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
          console.log(this.carts[0]);
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

<style lang="scss" scoped>
// 設定卡片重疊陰影
.productflex {
  display: flex;
  flex-wrap: wrap;
}
.addticket {
  .product {
    position: relative;
    margin: 1rem;
    width: 9rem;
    height: 18rem;
  }
  img {
    height: 73%;
    width: 100%;
  }
  .product:hover {
    .cardhover {
      opacity: 0.6;
    }
  }
  .cardhover {
    display: flex;
    min-width: 9rem;
    width: 100%;
    height: 73%;
    background-color: black;

    opacity: 0;
    position: absolute;
    transition: all 0.5s;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;

    .hovertxt {
      margin: auto;

      i {
        padding: 1rem;
        border-radius: 50%;
      }
      a span {
        height: 1px;
        width: 1px;
        position: absolute;
        overflow: hidden;
        top: -10px;
      }
    }
  }
  @media (max-width: 480px) {
    .product {
      width: 18rem;
      height: 27rem;
    }
  }
}
</style>
