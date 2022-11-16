<template>
  <div class="p-2 rounded-2 fixbtn">
    <i class="bi bi-bag-fill position-relative d-block"
      ><span class="badge rounded-pill cartnum">1</span
      ><span class="visually-hidden">unread messages</span></i
    >
    <router-link to="/UserCarts"
      ><i class="bi bi-cart-fill position-relative d-block"
        ><span class="badge rounded-pill cartnum"
          >{{ cartNum }}<span class="visually-hidden">unread messages</span></span
        ></i
      ></router-link
    >
    <i class="bi bi-arrow-up-square d-block" @click="toTop" @keyup.enter="toTop"></i>
  </div>
</template>

<script>
export default {
  data() {
    return { carts: [], cartNum: 0 };
  },
  // 待設定
  mounted() {
    // 確認有資料更新已抓取api刷新畫面
    this.$emitter.on('push-msg', () => {
      this.getusercarts();
      console.log(this.cartNum);
    });
  },

  methods: {
    toTop() {
      window.scrollTo({ top: 0 });
    },
    // 取得資料計算購物車數量
    getusercarts() {
      this.isLoading = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(Api)
        .then((res) => {
          // 要先歸0 不然舊資料會加到新資料會多一倍資料
          this.cartNum = 0;
          this.carts = res.data.data.carts;
          this.isLoading = false;
        })
        .then(() => {
          for (let i = 0; i < this.carts.length; i += 1) {
            this.cartNum += this.carts[i].qty;
          }
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
//
<!-- window.scrollTo({ top: scrollDiv, behavior: 'smooth' }) -->
<style lang="scss" scoped>
.fixbtn {
  position: fixed;
  z-index: 99;
  bottom: 10vh;
  right: 5vw;
  background-color: rgba($color: rgb(7, 7, 78), $alpha: 0.3);

  .cartnum {
    position: absolute;
    background-color: red;
    transform: translate(-50%, -20%) scale(0.5);
    font-size: 1rem;
  }
}
</style>
