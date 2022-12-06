<template>
  <div
    class="modal fade"
    id="delModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-warning">
          <h1 class="modal-title fs-5" id="exampleModalLabel">刪除品項</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h5 class="modal-title" id="exampleModalLabel">
            <p>
              <!-- 產品/優惠券資料 -->
              <span>{{ product.title }}</span>
              <span v-if="product.code">折扣碼:{{ product.code }}</span>
              <span v-if="product.price">$:{{ product.price }}</span>
            </p>
            <p v-if="product.percent">
              折數<span>{{ product.percent }}</span>
            </p>
            <p v-if="product.due_date">
              到期日<span>{{ this.$filters.date(product.due_date) }}</span>
            </p>
            <!-- 已成立訂單資料 -->
            <p>編號ID:{{ product.id }}</p>
            <p v-if="product.user">客戶:{{ product.user.name }}</p>
          </h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="$emit('del-item', product)">
            確認刪除
          </button>
          <button type="button" class="btn btn-secondary" @click="hideModal">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalmixiins from '@/mixins/modalmixins';

export default {
  data() {
    return {
      modal: '',
    };
  },
  props: {
    product: { type: Object },
    default() {
      return {};
    },
  },
  mixins: [modalmixiins],
};
</script>

<style lang="scss" scoped></style>
