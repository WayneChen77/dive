<template>
  <button class="btn btn-outline-titleblue mb-3" type="button" @click="deleteCart">清空資料</button>
  <div class="row">
    <div class="border">
      <div class="container mt-4" v-if="carts.length > 0">
        <table class="table table-hover align-middle align-middle">
          <thead>
            <tr class="align-middle text-sm text-gray-400">
              <th scope="col" style="width: 52%">購物車</th>
              <th scope="col" class="d-none d-md-table-cell" style="width: 23%">人數</th>
              <th scope="col" class="d-none d-md-table-cell" style="width: 15%">總計</th>
              <th scope="col" class="d-none d-md-table-cell text-center" style="width: 10%">
                刪除
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carts" :key="item.id">
              <td class="d-flex align-items-center flex-column flex-sm-row">
                <div class="d-md-none p-2">
                  <button
                    type="button"
                    class="btn d-md-block mx-auto btnClose"
                    @click="removeCartItem(item.id)"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
                <img
                  class="productImg w-50 p-1"
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                  :title="item.product.title"
                />
                <div class="text-center py-4">
                  <div class="h5 fw-bolder">{{ item.product.title }}</div>
                  <div class="d-md-none">
                    <div class="py-2">NT${{ $filters.currency(item.total) }}</div>
                    <!-- <div class="input-group">
                      <button
                        type="button"
                        class="btn btn-outline-dark"
                        @click="$emit('reduceCart', item)"
                        :disabled="item.qty == 1"
                      >
                        <i class="bi bi-dash" />
                      </button>
                      <input
                        id="num1"
                        type="text"
                        min="1"
                        v-model.number="item.qty"
                        class="form-control text-center border-dark bg-transparent"
                        readonly
                      />
                      <button
                        type="button"
                        class="btn btn-outline-dark"
                        @click="$emit('addCart', item)"
                        :disabled="item.qty == 4"
                      >
                        <i class="bi bi-plus" />
                      </button>
                    </div> -->
                    <select
                      style="width: 50vw; padding: auto"
                      class="form-select text-center"
                      v-model.number="item.qty"
                      aria-label="Default select example"
                      @change="adjCart(item)"
                    >
                      <!-- <option selected disabled>{{ item.qty }}人</option> -->
                      <option value="1">1人</option>
                      <option value="2">2人</option>
                      <option value="3">3人</option>
                      <option value="4">4人</option>
                    </select>
                  </div>
                </div>
              </td>
              <!-- 電腦版 -->
              <td class="d-none d-md-table-cell text-end align-middle">
                <!-- <div class="input-group">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    @click="$emit('reduceCart', item)"
                    :disabled="item.qty == 1"
                  >
                    <i class="bi bi-dash" />
                  </button>
                  <input
                    id="num"
                    type="text"
                    min="1"
                    v-model.number="item.qty"
                    class="form-control form-control-sm text-center border-dark"
                    readonly
                  />
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    @click="$emit('addCart', item)"
                    :disabled="item.qty === 4"
                  >
                    <i class="bi bi-plus" />
                  </button>
                </div> -->
                <select
                  class="form-select px-1"
                  v-model.number="item.qty"
                  aria-label="Default select example"
                  @change="adjCart(item)"
                >
                  <option value="1">1人</option>
                  <option value="2">2人</option>
                  <option value="3">3人</option>
                  <option value="4">4人</option>
                </select>
              </td>
              <td class="d-none d-md-table-cell text-end h5">
                NT${{ $filters.currency(item.total) }}
              </td>
              <td class="d-none d-md-table-cell text-end">
                <button
                  type="button"
                  class="btn d-md-block mx-auto btnClose"
                  @click="removeCartItem(item.id)"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container-fluid mt-4" v-else>
        <div class="text-center">
          <i class="bi bi-cart4 display-1 fw-bold text-dark" />
          <h3 class="p-3">目前購物車還沒有商品唷</h3>
          <router-link to="/UserProducts" class="btn btn-outline-titleblue btn-lg mb-5"
            >選購商品</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import UserProductsStore from '@/stores/userProductsStore';

const userProductsStore = UserProductsStore();

export default {
  setup() {
    const { carts } = storeToRefs(userProductsStore);
    // add reduce未使用備用
    const { adjCart, removeCartItem, deleteCart, reduceCart, addCart } = userProductsStore;
    return { carts, adjCart, removeCartItem, deleteCart, reduceCart, addCart };
  },
};
</script>
<style lang="scss" scoped></style>
