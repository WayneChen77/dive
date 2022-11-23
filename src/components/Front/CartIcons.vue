<template>
  <div class="p-2 rounded-2 fixbtn">
    <a
      data-bs-toggle="collapse"
      href="#collapseExample"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      <i class="bi bi-heart fs-3" type="button">
        <span class="badge rounded-pill cartnum" v-if="likedData">{{ likedData.length }}</span
        ><span class="visually-hidden">unread messages</span></i
      >
    </a>
    <div class="collapse" id="collapseExample">
      <div class="card card-body cartBlock">
        <h3 class="col-12 text-center">關注中</h3>
        <div v-if="likedStore.length > 0">
          <div class="row justify-content-center col-12 g-3" v-for="i in likedStore" :key="i.title">
            <span class="col-2 fs-3" @click="deleLike" @keyup="deleLike(i)"
              ><i class="bi bi-trash"></i
            ></span>
            <div class="col-4"><img :src="i.imageUrl" :alt="i.engtitle" /></div>
            <span type="button" class="col-4">{{ i.title }}</span>
            <span class="col-2 fs-3" @click="updateCart(i)" @keyup="updateCart(i)"
              ><i class="bi bi-cart-plus"></i>
            </span>
            <hr />
          </div>
        </div>
        <div class="" v-else>
          <div class="text-center">
            <i class="bi bi-cart4 display-1 fw-bold text-dark" />
            <h6 class="p-3">目前沒有商品唷</h6>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/UserCarts"
      ><i class="bi bi-cart-fill position-relative d-block fs-3"
        ><span class="badge rounded-pill cartnum"
          >{{ cartNum }}<span class="visually-hidden">unread messages</span></span
        ></i
      ></router-link
    >
    <i
      class="bi bi-arrow-up-square d-block fs-3"
      type="button"
      @click="toTop"
      @keyup.enter="toTop"
    ></i>
  </div>
</template>

<script>
export default {
  data() {
    return { carts: [], products: [], likedData: [], likedStore: [], cartNum: 0 };
  },
  mounted() {
    // 確認有資料更新已抓取api刷新畫面
    this.$emitter.on('push-cart', () => {
      this.getusercarts();
    });
    // 最愛
    this.$emitter.on('push-like', () => {
      this.getLikes();
    });
  },

  methods: {
    toTop() {
      window.scrollTo({ top: 0 });
    },
    deleLike(i) {
      const a = this.likedData.indexOf(i.id);
      this.likedData.splice(a, 1);
      localStorage.setItem('liked', JSON.stringify(this.likedData));
      //   吐司回覆
      this.$emitter.emit('push-like', {
        style: 'success',
        title: '關注',
        content: '已更新最愛標籤',
      });
    },
    updateCart(i) {
      this.isLoading = true;
      const cart = {
        product_id: i.id,
        qty: 1,
      };
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(Api, { data: cart })
        .then((res) => {
          //   吐司回覆
          this.$emitter.emit('push-cart', {
            style: 'success',
            title: res.data.message,
            content: res.data.message,
          });

          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 最愛資料
    getLikes() {
      this.likedData = JSON.parse(localStorage.getItem('liked'));
      const num = this.likedData.length;
      const data = this.products;
      const likeArry = [];
      for (let n = 0; n < num; n += 1) {
        const a = data.filter((i) => i.id === this.likedData[n]);
        likeArry.push(a[0]);
      }
      this.likedStore = likeArry;
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
    // 取得產品資料 篩選最愛資料
    getproducts() {
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(Api)
        .then((res) => {
          this.products = res.data.products;
          this.getLikes();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  computed: {
    // 會報錯找不到
    // 監聽資料輸出最愛
    // likedStore() {
    //   const num = this.likedData.length ?? 10;
    //   const data = this.products;
    //   const likeArry = [];
    //   for (let n = 0; n < num; n += 1) {
    //     const a = data.filter((i) => i.id === this.likedData[n]);
    //     likeArry.push(a[0]);
    //   }
    //   return likeArry;
    // },
  },
  // watch: {
  //   likedData() {
  //     const num = this.likedData.length;
  //     const data = this.products;
  //     const likeArry = [];
  //     for (let n = 0; n < num; n += 1) {
  //       const a = data.filter((i) => i.id === this.likedData[n]);
  //       likeArry.push(a[0]);
  //     }
  //     this.likedStore = likeArry;
  //   },
  // },
  created() {
    this.getusercarts();
    this.getproducts();
  },
};
</script>

<style lang="scss" scoped>
.cartBlock {
  position: absolute;
  left: -350px;
  top: -200px;
  width: 350px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
  // overflow: scroll;
}
.fixbtn {
  position: fixed;
  z-index: 99;
  bottom: 30vh;
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
