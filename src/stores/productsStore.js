import { defineStore } from 'pinia';
import axios from 'axios';
// import Status from '@/stores/status';

// const status = Status();

export default defineStore('ProductsStore', {
  state: () => ({ products: [] }),
  getters: { sortProducts: (state) => state.products.sort((a, b) => a.price - b.price) },
  actions: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      // status.isLoading = true;
      axios.get(url).then((response) => {
        this.products = response.data.products;
        console.log(123456);
        // status.isLoading = false;
      });
    },
  },
});
