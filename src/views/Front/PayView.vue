<template>
  <div class="row justify-content-center">
    <div class="text-center top col-12 col-md-8 mb-3 shadow">
      <h2>訂單品項</h2>
      <div>
        <table class="table">
          <thead class="table-primary">
            <tr>
              <th scope="col" width="33%">品項</th>
              <th scope="col" width="33%">人數</th>
              <th scope="col" width="33%">金額</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in dataList.products" :key="i.id">
              <th scope="row">{{ i.product.title }}</th>
              <td>{{ i.qty }}</td>
              <td>{{ i.final_total }}</td>
            </tr>
          </tbody>
          <tr>
            <th scope="row"></th>
            <td scope="row">總價:</td>
            <td>{{ dataList.total }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="col-12 col-md-8 text-center bot mb-3 shadow">
      <h2>訂單資料</h2>
      <div>
        <table class="table table-hover">
          <thead class="table-primary">
            <tr>
              <th scope="col" width="33%">訂單編號</th>
              <th scope="col" width="66%">{{ dataList.id }}</th>
            </tr>
          </thead>
          <tbody v-if="dataList.user">
            <tr>
              <th scope="row">聯絡人姓名:</th>
              <td>{{ dataList.user.name }}</td>
            </tr>
            <tr>
              <th scope="row">聯絡人電話:</th>
              <td>{{ dataList.user.tel }}</td>
            </tr>
            <tr>
              <th scope="row">聯絡人mail:</th>
              <td>{{ dataList.user.email }}</td>
            </tr>
            <tr>
              <th scope="row">聯絡人地址:</th>
              <td>{{ dataList.user.address }}</td>
            </tr>
            <tr>
              <th scope="row">付款狀態:</th>
              <td>{{ dataList.is_paid }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-8 text-end">
      <button type="button" class="btn btn-outline-primary" @click="CheckOut(id)">我要付款</button>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue';
import OrdersStore from '@/stores/ordersStore';
import StatusStore from '@/stores/statusStore';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const Route = useRoute();
    const Router = useRouter();
    const { id } = Route.params;
    const ordersStore = OrdersStore();
    const { dataList } = ordersStore;
    ordersStore.getOrders(id);
    const CheckOut = (ID) => {
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${ID}`;
      axios
        .post(Api)
        .then((res) => {
          const statusStore = StatusStore();
          const statusData = {
            content: res.data.message,
          };
          statusStore.pushMessage(statusData);
        })
        .catch((e) => console.log(e));
      Router.push(`/Order/CheckOut/${id}`);
    };
    return { dataList, id, CheckOut };
  },
  // data() {
  //   return {
  //     dataList: {},
  //   };
  // },
  methods: {
    // getorder() {
    //   const { id } = this.$route.params;
    //   const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`;
    //   this.$http
    //     .get(Api)
    //     .then((res) => {
    //       this.dataList = res.data.order;
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
    // CheckOut() {
    //   const { id } = this.$route.params;
    //   const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${id}`;
    //   this.$http
    //     .post(Api)
    //     .then((res) => {
    //       this.$emitter.emit('push-cart', {
    //         style: 'success',
    //         title: res.data.message,
    //         content: res.data.message,
    //       });
    //     })
    //     .catch((e) => console.log(e));
    //   this.$router.push(`/Order/CheckOut/${id}`);
    // },
  },
  // created() {
  //   this.getorder();
  // },
};
</script>

<style lang="scss" scoped></style>
