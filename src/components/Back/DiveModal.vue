<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label"
                  >輸入圖片網址
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="diveProduct.imageUrl"
                /></label>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="diveProduct.imageUrl = ''"
                >
                  移除
                </button>
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label"
                  >或 上傳圖片 <i class="fas fa-spinner fa-spin"></i
                  ><input type="file" class="form-control" ref="fileInput" @change="uploadFile" />
                </label>
                <div><img class="w-100" :src="diveProduct.imageUrl" alt="" /></div>
              </div>
              <div class="mt-5" v-if="diveProduct.images">
                <div class="mb-3">
                  <label for="customFile" class="form-label"
                    >新增 其餘圖片
                    <input
                      id="customFile"
                      type="file"
                      class="form-control"
                      ref="fileInputs"
                      @change="uploadFiles(key)"
                      multiple
                    /><i class="fas fa-spinner fa-spin"></i>
                  </label>
                </div>
                <div v-for="(image, key) in diveProduct.images" class="mb-3 input-group" :key="key">
                  <input
                    type="url"
                    class="form-control form-control"
                    v-model="diveProduct.images[key]"
                    placeholder="請輸入連結"
                  />
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="diveProduct.images.splice(key, 1)"
                  >
                    移除
                  </button>
                </div>
                <div
                  v-if="
                    diveProduct.images[diveProduct.images.length - 1] || !diveProduct.images.length
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="diveProduct.images.push('')"
                  >
                    新增其餘圖片網址
                  </button>
                </div>
                <swiper
                  class="d-block w-100 h-25"
                  v-if="diveProduct.images"
                  :modules="modules"
                  :slides-per-view="1"
                  :space-between="50"
                  navigation
                  :pagination="{ clickable: true }"
                  :scrollbar="{ draggable: true }"
                >
                  <swiper-slide v-for="(image, key) in diveProduct.images" :key="key"
                    ><img :src="image" :id="image" class="d-block img-fluid" alt="..." />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="title" class="form-label"
                    >*產品名稱<input
                      id="title"
                      type="text"
                      class="form-control"
                      placeholder="請輸入名稱"
                      v-model="diveProduct.title"
                  /></label>
                  <label for="engtitle" class="form-label"
                    >英文名稱<input
                      id="engtitle"
                      type="text"
                      class="form-control"
                      placeholder="請輸入名稱"
                      v-model="diveProduct.engtitle"
                  /></label>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label"
                    >*分類<input
                      id="category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                      v-model="diveProduct.category"
                  /></label>
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label"
                    >*原價<input
                      id="origin_price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入原價"
                      v-model="diveProduct.origin_price"
                  /></label>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label"
                    >*優惠價<input
                      id="price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入優惠價"
                      v-model="diveProduct.price"
                  /></label>
                </div>
              </div>
              <hr />
              <div class="row gx-2">
                <div class="mb-3 col-md-12">
                  <label for="description" class="form-label"
                    >描述介紹
                    <textarea
                      id="description"
                      type="text"
                      class="form-control"
                      placeholder="請輸入描述"
                      v-model="diveProduct.description"
                    ></textarea>
                  </label>
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-12">
                  <label for="content" class="form-label"
                    >說明內容(暫時未設定)
                    <textarea
                      id="content"
                      type="text"
                      class="form-control"
                      placeholder="請輸入說明內容"
                      v-model="diveProduct.content"
                    ></textarea>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <label class="form-check-label mx-3" for="is_enabled">
                是否開放
                <input
                  id="is_enabled"
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="diveProduct.is_enabled"
              /></label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-product', diveProduct)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalmixiins from '@/mixins/modalmixins';

import { Swiper, SwiperSlide } from 'swiper/vue';

// 滑動
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  data() {
    return { modal: {}, diveProduct: {}, modules: [Navigation, Pagination, Scrollbar, A11y] };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    product: { type: Object },
    default() {
      return {};
    },
  },
  watch: {
    // 監聽傳入資料 避免舊資料宣染
    product() {
      this.diveProduct = this.product;
      if (!this.diveProduct.images) {
        this.diveProduct.images = [];
      }
    },
  },
  methods: {
    // 上傳照片檔取得網址
    uploadFile() {
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          this.diveProduct.imageUrl = response.data.imageUrl;
        }
      });
    },
    uploadFiles() {
      const uploadedFile = this.$refs.fileInputs.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.axios.post(api, formData).then((response) => {
        if (response.data.success) {
          this.diveProduct.images.push(response.data.imageUrl);
        }
      });
    },
  },
  // 通用model開啟
  mixins: [modalmixiins],
};
</script>

<style lang="scss" scoped></style>
