import { defineStore } from 'pinia';
// import axios from 'axios';
import StatusStore from '@/stores/statusStore';

const statusStore = StatusStore();

export default defineStore('UserProductsStore', {
  state: () => ({ products: [], search: '' }),
  getters: { dataList: (state) => state.products.filter((i) => i.title.match(state.search)) },
  actions: {
    // 只要有funtion就會報錯 沒有就不會報錯
    none() {
      statusStore.isLoading = false;
    },
    // 加入購物車
    // updateCart(i) {
    //   statusStore.isLoading = true;
    //   const cart = {
    //     product_id: i.id,
    //     qty: 1,
    //   };
    //   const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
    //   axios
    //     .post(Api, { data: cart })
    //     .then((res) => {
    //       //   吐司回覆
    //       const statusData = {
    //         // style: 'success',
    //         // title: '關注',
    //         content: res.data.message,
    //       };
    //       statusStore.pushMessage(statusData);
    //       statusStore.isLoading = false;
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
    // getproducts() {
    //   statusStore.isLoading = true;
    //   const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
    //   axios
    //     .get(Api)
    //     .then((res) => {
    //       this.products = res.data.products;
    //       statusStore.isLoading = false;
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
  },
});
