<template>
  <!-- 全域原件 -->
  <LoadingView :active="isLoading"></LoadingView>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th class="rwd">Email</th>
        <th class="rwd">課程名稱</th>
        <th class="phone">課程資料</th>
        <th class="rwd">應付金額</th>
        <th class="rwd">是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td class="rwd"><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <span class="phone" v-if="item.user"
                >信箱: <br />
                {{ item.user.email }}</span
              >
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.engtitle }}
                <br />
                人數：{{ product.qty }}
                <br />
                <!-- {{ product.product.unit }} -->
                <div class="form-check form-switch phone">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`paidSwitch${item.id}`"
                    v-model="item.is_paid"
                    @change="updatePaid(item)"
                  />
                  <label class="form-check-label" :for="`paidSwitch${item.id}`">
                    <span v-if="item.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </li>
            </ul>
          </td>
          <td class="text-right rwd">{{ item.total }}</td>
          <td class="rwd">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />

              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">
                檢視
              </button>
              <button class="btn btn-outline-danger btn-sm" @click="deleteModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <!-- 區域原件 -->
  <OrderModal :order="tempOrder" ref="OrderModal" @update-order="updatePaid"></OrderModal>
  <Pagination :pages="pagination" @change-pagination="getOrders"></Pagination>
  <DeleteModal :product="tempOrder" @del-item="deleteOrder" ref="DeleteModal"></DeleteModal>
</template>

<script>
import OrderModal from '@/components/Back/OrderModal.vue';
import DeleteModal from '@/components/Back/DeleteModal.vue';
// 分頁資訊
import Pagination from '@/components/Back/DivePagination.vue';

export default {
  data() {
    return {
      // 所有資料
      orders: [],
      // 要傳往modal處理的資料
      pagination: {},
      isLoading: false,
      currentPage: 1,
      tempOrder: {},
    };
  },
  components: { OrderModal, DeleteModal, Pagination },
  methods: {
    getOrders(currentPage = 1) {
      this.currentPage = currentPage;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`;
      this.isLoading = true;
      this.$http.get(Api).then((res) => {
        this.orders = res.data.orders;
        this.pagination = res.data.pagination;
        this.isLoading = false;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempOrder = {};
      } else {
        this.tempOrder = { ...item };
      }
      const modal = this.$refs.OrderModal;
      modal.showModal();
    },
    // 開啟刪除開區塊
    deleteModal(item) {
      this.tempOrder = { ...item };
      const modal = this.$refs.DeleteModal;
      modal.showModal();
    },
    // 刪除資料
    deleteOrder(item) {
      this.isLoading = true;
      this.tempOrder = item;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.$http
        .delete(Api)
        .then((res) => {
          const modal = this.$refs.DeleteModal;
          this.getOrders(this.currentPage);
          // 關閉讀取效果
          this.isLoading = false;
          modal.hideModal();
          this.$emitter.emit('push-msg', {
            style: 'danger',
            title: res.data.message,
            content: res.data.message,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updatePaid(item) {
      // 開啟讀取效果
      this.isLoading = true;
      this.tempOrder = item;
      const modal = this.$refs.OrderModal;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http.put(Api, { data: paid }).then((res) => {
        this.isLoading = false;
        modal.hideModal();
        if (res.data.success) {
          this.getOrders(this.currentPage);
          this.$emitter.emit('push-msg', {
            style: 'success',
            title: res.data.message,
            content: res.data.message,
          });
        } else {
          this.$emitter.emit('push-msg', {
            style: 'warning',
            title: '更新失敗',
            content: res.data.message.join(','),
          });
        }
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: 481px) {
  .phone {
    display: none;
  }
}
@media (max-width: 480px) {
  .rwd {
    display: none;
  }
}
</style>
