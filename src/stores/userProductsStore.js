import { defineStore } from 'pinia';
import axios from 'axios';
// 狀態顯示
import StatusStore from '@/stores/statusStore';
// 封裝pinia引用避免全域bug
import pinia from './store';
// 這邊就是可能發生的全域bug
const statusStore = StatusStore(pinia);

export default defineStore('UserProductsStore', {
  state: () => ({
    // 商品群資料
    products: [],
    search: '',
    // 購物車資料
    cartNum: 0,
    carts: [],
    price: 0,
    // 優惠券
    coupon_code: '',
    // 最愛
    likedData: [1, 2],
    likedStore: [],
    likenum: 0,
  }),
  getters: {
    // 商品群資料搜尋
    dataList: (state) => state.products.filter((i) => i.title.match(state.search)),
  },
  actions: {
    // 加入購物車
    updateCart(i, qt = 1) {
      statusStore.isLoading = true;
      const cart = {
        product_id: i.id,
        qty: qt,
      };
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      axios
        .post(Api, { data: cart })
        .then((res) => {
          //   吐司回覆
          const statusData = {
            // style: 'success',
            // title: '關注',
            content: res.data.message,
          };
          statusStore.pushMessage(statusData);
          statusStore.isLoading = false;
          this.getusercarts();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 產品資料
    getproducts() {
      statusStore.isLoading = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      axios
        .get(Api)
        .then((res) => {
          this.products = res.data.products;
          statusStore.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 取得購物車數量
    getusercarts() {
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      axios
        .get(Api)
        .then((res) => {
          // 要先歸0 不然舊資料會加到新資料會多一倍資料
          this.cartNum = 0;
          this.carts = res.data.data.carts;
          this.price = res.data.data;
        })
        .then(() => {
          // for (let i = 0; i < this.carts.length; i += 1) {
          // this.cartNum += this.carts[i].qty;
          // updateNum += this.carts[i].qty;
          // this.carts.reduce((accumulator,currentValue)=>{
          //   return accumulator + currentValue;
          // })data.map(item=>item.age)
          const total = this.carts.map((i) => i.qty).reduce((acc, a) => acc + a, 0);

          // }
          this.cartNum = total;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 更新車群資料
    reduceCart(item) {
      statusStore.isLoad = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty - 1,
      };
      axios.put(Api, { data: cart }).then((res) => {
        const statusData = {
          style: 'warning',
          title: res.data.message,
          content: res.data.message,
        };

        statusStore.isLoad = false;

        this.getusercarts();
        statusStore.pushMessage(statusData);
      });
    },
    addCart(item) {
      statusStore.isLoad = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty + 1,
      };
      axios.put(Api, { data: cart }).then((res) => {
        const statusData = {
          style: 'success',
          title: res.data.message,
          content: res.data.message,
        };

        statusStore.isLoad = false;
        this.getusercarts();
        statusStore.pushMessage(statusData);
      });
    },
    adjCart(item) {
      statusStore.isLoad = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      axios.put(Api, { data: cart }).then((res) => {
        const statusData = {
          style: 'success',
          title: res.data.message,
          content: res.data.message,
        };

        statusStore.isLoad = false;
        this.getusercarts();
        statusStore.pushMessage(statusData);
      });
    },
    // 移除單一資料
    removeCartItem(id) {
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      axios.delete(Api).then((res) => {
        const statusData = {
          style: 'warning',
          title: res.data.message,
          content: res.data.message,
        };
        this.getusercarts();
        statusStore.pushMessage(statusData);
      });
    },
    // 清空資料
    deleteCart() {
      this.isLoading = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      axios.delete(Api).then((res) => {
        this.isLoading = false;
        const statusData = {
          style: 'danger',
          title: res.data.message,
          content: res.data.message,
        };
        this.getusercarts();
        statusStore.pushMessage(statusData);
      });
    },

    // like相關
    // 判斷css用
    isLiked(item) {
      if (this.likedData.indexOf(item.id) > -1) {
        return true;
      }
      return false;
    },

    // 改變like資料用
    liked(item) {
      const data = localStorage.getItem('liked');
      const dataArry = JSON.parse(data) ?? [];
      const a = dataArry.indexOf(item.id);
      if (a > -1) {
        dataArry.splice(a, 1);
        this.likedData = dataArry;
      } else {
        dataArry.push(item.id);
        this.likedData = dataArry;
      }
      this.getLikeData();
      localStorage.setItem('liked', JSON.stringify(this.likedData));
      //   吐司回覆
      const statusData = {
        // style: 'success',
        // title: '關注',
        content: '已更新最愛標籤',
      };
      statusStore.pushMessage(statusData);
    },
    // 刪除最愛資料
    deleLike(i) {
      const a = this.likedData.indexOf(i.id);
      this.likedData.splice(a, 1);
      localStorage.setItem('liked', JSON.stringify(this.likedData));

      //   吐司回覆
      const statusData = {
        // style: 'success',
        // title: '關注',
        content: '已更新最愛標籤',
      };
      statusStore.pushMessage(statusData);
      this.getLikeData();
    },
    // 取得locol最愛資料
    getLikes() {
      this.likedData = JSON.parse(localStorage.getItem('liked')) || [];
      // 這邊setime避免likedData 為underfine
      setTimeout(() => {
        this.getLikeData();
      }, 2000);
    },
    // 抓到資料
    getLikeData() {
      this.likenum = this.likedData.length;
      const data = this.products;
      const likeArry = [];
      for (let n = 0; n < this.likenum; n += 1) {
        const a = data.filter((i) => i.id === this.likedData[n]);
        likeArry.push(a[0]);
      }
      this.likedStore = likeArry;
    },
    // 優惠券
  },
});
