import { defineStore } from 'pinia';
import axios from 'axios';

import StatusStore from '@/stores/statusStore';
// 封裝pinia引用避免全域bug
// import { useRoute } from 'vue-router';
import pinia from './store';
// 這邊就是可能發生的全域bug

const statusStore = StatusStore(pinia);

export default defineStore('OrdersStore', {
  state: () => ({ dataList: {}, searchID: '', show: false, progersNum: 66 }),
  getters: {
    // 商品群資料搜尋
    data: (state) => {
      if (state.searchID === state.dataList.id) {
        return state.dataList;
      }
      return {};
    },
  },
  actions: {
    getOrders(id) {
      statusStore.isLoading = true;

      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`;
      axios
        .get(Api)
        .then((res) => {
          if (!res.data.order) {
            this.show = true;
            this.dataList = {};
            statusStore.isLoading = false;
          } else {
            this.show = false;
            this.dataList = res.data.order;
            statusStore.isLoading = false;
          }
        })
        .catch((e) => {
          console.log(e);
          statusStore.isLoading = false;
        });
    },
  },
});
