<template>
  <div class="serachOrder">
    <TopImg>
      <h2 class="">查詢訂單</h2>
      <p>serach</p>
    </TopImg>
    <div class="container">
      <div class="row justify-content-center py-3">
        <div class="text-center col-10">
          <input
            type="text"
            placeholder="請輸入訂單編號"
            v-model="searchID"
            @keydown.enter="getOrders(searchID)"
            class="my-3 rounded me-3 border border-titleblue searchInput"
          />
          <input
            type="button"
            value="送出"
            class="btn-outline-titleblue btn btn-sm"
            @keydown.enter="getOrders(searchID)"
            @click="getOrders(searchID)"
          />
        </div>

        <!-- 錯誤資料 -->
        <div v-if="show" class="text-center top col-12 col-md-8 my-3 shadow" data-aos="zoom-in">
          <h2>訂單品項</h2>
          <p class="text-danger">訂單不存在</p>
        </div>
        <!-- 查詢訂單 -->
        <div
          class="text-center top col-12 col-md-8 my-3 shadow"
          data-aos="zoom-in"
          v-if="dataList.products"
        >
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
        <div
          class="col-12 col-md-8 text-center bot mb-3 shadow"
          data-aos="zoom-in"
          v-if="dataList.products"
        >
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
        <h3 class="col-8">重要提醒</h3>
        <div class="border p-3 col-8">
          <ul>
            <li>
              訂單編號範例：<br />
              <span class="text-danger"> -NHU1TGpWvTfNIDLXduD</span>
            </li>
            <li>
              如購買過程有任何疑問，歡迎 <router-link to="/contact"> 聯繫我們</router-link>，
              我們會盡快回覆您。
            </li>
            <li>課程下單後，專人將於一至三天安排課程，我們將盡快以電子郵件通知您。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import TopImg from '@/components/Front/TopImg.vue';
import ordersStore from '@/stores/ordersStore';
import { storeToRefs } from 'pinia';

const order = ordersStore();

export default {
  setup() {
    const searchID = ref('');
    const { dataList, show } = storeToRefs(order);
    const { getOrders } = order;
    return { dataList, searchID, show, getOrders };
  },

  components: { TopImg },
};
</script>

<style lang="scss" scoped>
.searchInput:focus {
  box-shadow: 0 0 00.3rem rgba(#2660a9, 0.5);
}
</style>
