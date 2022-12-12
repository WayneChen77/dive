<template>
  <div class="container">
    <div class="title mb-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link class="text-decoration-none" to="/home">韋恩潛水</router-link>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <router-link class="text-decoration-none" to="/userProducts">潛水假期</router-link>
          </li>
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
      <div class="col-12 col-md-6 m-auto">
        <h3>{{ product.title }}</h3>
        <p>{{ product.engtitle }}</p>
        <p>{{ product.category }}</p>
        <p style="white-space: pre-wrap">{{ product.description }}</p>
        <div class="text-end">
          <small>
            <s>${{ this.$filters.currency(product.origin_price) }}</s></small
          >
          <br />
          <b class="fs-4">售價$:{{ this.$filters.currency(product.price) }}/人</b>
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
          <div class="like">
            <i
              class="bi"
              :class="isLiked(product) ? 'bi-heart-fill' : 'bi-heart'"
              @click="liked(product)"
              @keyup="liked(product)"
            ></i>
            <button
              type="button"
              class="btn btn-titleblue w-50"
              @click.prevent="updateCart(product, productNum)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 row justify-content-center bottxt bg-bgblue pt-3">
      <div class="col-5 text-center">
        <h4>課程內容:</h4>
        <p style="white-space: pre-wrap">{{ product.content }}</p>
      </div>
      <div class="col-5 text-center">
        <h4>注意事項:</h4>
        <p style="white-space: pre-wrap">{{ product.precautions }}</p>
      </div>
    </div>
    <h3 class="text-titleblue mt-3">你可能有興趣</h3>
    <OtherCard></OtherCard>
  </div>
</template>

<script>
import axios from 'axios';
// components
import OtherCard from '@/components/Front/OtherCard.vue';
// stores
import StatusStore from '@/stores/statusStore';
import UserProductsStore from '@/stores/userProductsStore';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const statusStore = StatusStore();
const userProductsStore = UserProductsStore();

export default {
  setup() {
    const mainImg = ref('');
    const classIndex = ref(-1);
    const productNum = ref(1);
    const product = ref({});
    const Route = useRoute();

    // 取得商品資料
    const getproduct = () => {
      statusStore.isLoading = true;
      const { id } = Route.params;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      axios
        .get(Api)
        .then((res) => {
          product.value = res.data.product;
          if (product.value.images) {
            const mainImgdata = product.value.images[0];
            mainImg.value = mainImgdata;
            classIndex.value = 0;
            console.log(product.value.images[0]);
          } else {
            console.log(product.value);
            mainImg.value = product.value.imageUrl;
          }
          statusStore.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getproduct();
    // 主圖片選擇
    const pickPic = (i, index) => {
      classIndex.value = index;
      mainImg.value = i;
    };
    // stores函式
    const { isLiked, liked, updateCart } = userProductsStore;

    // 限制商品數量
    watch(productNum, (n, o) => {
      if (productNum.value <= 0 || productNum.value > 4) {
        productNum.value = o;
      }
    });

    //  路由改變時強制刷新
    watch(Route, (n) => {
      if (n.name === 'UserSelect') {
        getproduct();
      }
    });

    return {
      mainImg,
      productNum,
      classIndex,
      product,
      getproduct,
      isLiked,
      liked,
      pickPic,
      updateCart,
    };
  },
  components: {
    OtherCard,
  },
};
</script>

<style lang="scss" scoped>
.mainimg {
  img {
    width: 100%;
    object-fit: cover;
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

.like {
  font-size: 2.5rem;
  cursor: pointer;
  i {
    margin-right: 1rem;
  }
  color: red;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
