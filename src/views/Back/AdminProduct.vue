<template>
  <!-- 全域原件 -->
  <LoadingView :active="isLoading"></LoadingView>
  <div class="text-end">
    <button class="btn btn-titleblue col-2" @click="openModal(true)">新增課程</button>
  </div>
  <table class="table mt-4 container diveProduct">
    <thead>
      <tr>
        <th class="rwd">分類</th>
        <th class="rwdname">名稱</th>
        <th class="rwd">原價</th>
        <th class="rwd">優惠價</th>
        <th>上架</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in diveProducts" :key="i.id">
        <td class="rwd">{{ i.category }}</td>
        <td class="rwdname">
          {{ i.title }} <br />
          {{ `(${i.engtitle})` }}
        </td>
        <td class="text-right">{{ $filters.currency(i.origin_price) }}原價</td>
        <td class="text-right rwd">{{ $filters.currency(i.price) }}</td>
        <td>
          <span class="text-success">{{ i.is_enabled === 1 ? '(上架)' : '(下架)' }}</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, i)">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="deleteModal(i)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- 區域原件 -->
  <!-- 這邊有操作頁碼讀取當前資料業面資料 -->
  <DivePagination :pages="pagination" @change-pagination="getDiveProducts"></DivePagination>
  <DiveModal :product="diveProduct" @update-product="updateProduct" ref="DiveModal"></DiveModal>
  <DeleteModal :product="diveProduct" @del-item="delitem" ref="DeleteModal"></DeleteModal>
</template>

<script>
import DiveModal from '@/components/Back/DiveModal.vue';
import DeleteModal from '@/components/Back/DeleteModal.vue';
// 分頁資訊
import DivePagination from '@/components/Back/DivePagination.vue';

export default {
  data() {
    return {
      // 所有資料
      diveProducts: [],
      // 頁碼資料 傳往下層處理
      pagination: [],

      // 要傳往modal處理的資料
      diveProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: { DiveModal, DeleteModal, DivePagination },
  methods: {
    openModal(isNew, item) {
      if (isNew) {
        this.diveProduct = {};
        // 沒用到隨意設定
        this.diveProduct.unit = '人';
      } else {
        this.diveProduct = { ...item };
      }
      // this.isNew = isNew;這個讓下方update方法判斷用put還是post
      this.isNew = isNew;
      const modal = this.$refs.DiveModal;
      modal.showModal();
    },
    // 開啟刪除開區塊
    deleteModal(item) {
      this.diveProduct = { ...item };
      const modal = this.$refs.DeleteModal;
      modal.showModal();
    },
    // 刪除資料
    delitem(item) {
      // 開啟讀取效果
      this.isLoading = true;
      this.diveProduct = item;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
      this.$http
        .delete(Api)
        .then((res) => {
          // 關閉讀取效果
          this.isLoading = false;
          const modal = this.$refs.DeleteModal;
          this.getDiveProducts();
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

    updateProduct(item) {
      // 開啟讀取效果
      this.isLoading = true;
      this.diveProduct = item;
      const modal = this.$refs.DiveModal;
      // 新增
      let Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      //   修改
      if (!this.isNew) {
        Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      // 這邊如果將modal 放到139行
      modal.hideModal();
      this.$http[httpMethod](Api, { data: this.diveProduct }).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.getDiveProducts();
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
    // 預設取得資料為第一頁
    getDiveProducts(page = 1) {
      this.isLoading = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.$http
        .get(Api)
        .then((res) => {
          this.diveProducts = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    this.getDiveProducts();
  },
};
</script>

<style lang="scss" scoped>
.diveProduct {
  @media (max-width: 480px) {
    .rwd {
      display: none;
    }
    .rwdname {
      max-width: 90px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
