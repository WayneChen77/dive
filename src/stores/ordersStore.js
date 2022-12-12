import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('OrdersStore', {
  state: () => ({ dataList: {}, show: false, progersNum: 66 }),

  actions: {
    getOrders(id) {
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`;
      console.log(Api);
      axios
        .get(Api)
        .then((res) => {
          if (!res.data.order) {
            this.show = true;
            this.dataList = {};
          } else {
            this.show = false;
            this.dataList = res.data.order;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
