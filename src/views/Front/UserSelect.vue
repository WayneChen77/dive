<template>
  <!-- 全域原件 -->
  <LoadingView :active="isLoading"></LoadingView>
  <div class="container">
    <div class="title mb-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link class="text-decoration-none" to="/">韋恩潛水</router-link>
          </li>
          <li class="breadcrumb-item" aria-current="page">潛水假期</li>
          <li class="breadcrumb-item active" aria-current="page">潛水課程</li>
        </ol>
      </nav>
      <hr />
    </div>
    <div class="row px-5">
      <div class="col-12 col-md-6 row mainimg g-3">
        <img :src="mainImg" :alt="product.engtitle" :title="product.title" />
        <button
          v-for="(i, index) in product.images"
          :key="i.id"
          class="col-4 propimg border-0"
          @click="pickPic(i, index)"
        >
          <img class="rounded" :src="i" :alt="product.engtitle" :title="product.title" />
          <div class="overlay" :class="{ noneOverlay: index === classIndex }"></div>
        </button>
      </div>
      <div class="col-12 col-md-6">
        <h3>{{ product.title }}</h3>
        <p>{{ product.engtitle }}</p>
        <p>{{ product.category }}</p>
        <p>{{ product.content }}</p>
        <div class="text-end">
          <small>
            <s>${{ product.origin_price }}</s></small
          >
          <br />
          <b class="fs-4">售價$:{{ product.price }}/人</b>
          <div class="mb-3">
            <button
              class="btn btn-outline-secondary rounded-0"
              min="1"
              @click.prevent="productNum -= 1"
            >
              -</button
            ><label for="number1">
              <input
                name="number1"
                id="number1"
                type="number"
                max="10"
                min="1"
                class="productNumber btn border"
                v-model="productNum"
            /></label>
            <button class="btn btn-outline-secondary rounded-0" @click.prevent="productNum += 1">
              +
            </button>
          </div>
          <button type="button" class="btn btn-titleblue w-50" @click.prevent="updateCart">
            加入購物車
          </button>
        </div>
      </div>
    </div>
    <div class="text-center mt-5 p-3 bg-gray">
      <div class="bg-white m-3">
        <h4>課程內容:</h4>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
  <ToastMessages></ToastMessages>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import 'swiper/swiper-bundle.css';

export default {
  data() {
    return {
      product: {},
      isLoading: false,
      mainImg: '',
      classIndex: -1,
      productNum: 1, // modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  components: {
    ToastMessages,
    // Swiper,
    // SwiperSlide,
  },
  methods: {
    getproduct() {
      this.isLoading = true;

      const { id } = this.$route.params;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(Api)
        .then((res) => {
          this.product = res.data.product;
          if (this.product.images) {
            const mainImg = this.product.images[0];
            this.mainImg = mainImg;
            this.classIndex = 0;
          } else {
            this.mainImg = this.product.imageUrl;
          }
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateCart() {
      this.isLoading = true;
      const cart = {
        product_id: this.product.id,
        qty: this.productNum,
      };

      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(Api, { data: cart })
        .then((res) => {
          //   吐司回覆
          this.$emitter.emit('push-cart', {
            style: 'success',
            title: res.data.message,
            content: res.data.message,
          });

          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    pickPic(i, index) {
      this.classIndex = index;
      this.mainImg = i;
    },
  },
  watch: {
    productNum(n, o) {
      if (this.productNum <= 0 || this.productNum > 4) {
        //  吐司訊息
        this.productNum = o;
      }
    },
  },
  created() {
    this.getproduct();
  },
};
</script>

<style lang="scss" scoped>
.mainimg {
  img {
    width: 100%;
  }
  .propimg {
    position: relative;
    img {
      width: 100%;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: white, $alpha: 0.6);
      opacity: 1;
    }
    .noneOverlay {
      opacity: 0;
    }
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
