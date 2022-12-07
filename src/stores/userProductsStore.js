import { defineStore } from 'pinia';
import axios from 'axios';
// import Status from '@/stores/status';

// const status = Status();

export default defineStore('UserProductsStore', {
  state: () => ({ products: [], search: '', likedData: [] }),
  getters: { dataList: (state) => state.products.filter((i) => i.title.match(state.search)) },
  actions: {
    //  進入商品業面
    // userproduct(i) {
    //   this.$router.push(`/UserSelect/${i.id}`);
    // },
    // 加入購物車
    updateCart(i) {
      // this.isLoading = true;
      const cart = {
        product_id: i.id,
        qty: 1,
      };
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      axios
        .post(Api, { data: cart })
        .then((res) => {
          console.log(res);
          //   吐司回覆
          // this.$emitter.emit('push-cart', {
          //   style: 'success',
          //   title: res.data.message,
          //   content: res.data.message,
          // });
          // this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getproducts() {
      // this.isLoading = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      axios
        .get(Api)
        .then((res) => {
          this.products = res.data.products;
          // this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
