<template>
  <div class="mb-3">
    <swiper :modules="modules" :slides-per-view="swNum" :space-between="50">
      <swiper-slide v-for="(i, key) in products" :key="key">
        <div data-aos="flip-left" class="card shadow border-0 m-3">
          <div class="card-img-top cardImg">
            <img :src="i.imageUrl" alt="i.engtitle" />
          </div>
          <div class="overlay card-img-top">
            <a href="#" @click.prevent="userproduct(i)">
              <div class="text-center p-5 text-white fs-5">商品資訊</div>
            </a>
          </div>
          <div class="card-body text-center">
            <h5 class="card-title fs-5 text-truncate">{{ i.title }}</h5>
          </div>
        </div></swiper-slide
      >
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import { ref, reactive, onMounted } from 'vue';
import UserProductsStore from '@/stores/userProductsStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const userProductsStore = UserProductsStore();

export default {
  setup() {
    const modules = reactive([Scrollbar, A11y]);
    const swNum = ref(1);
    const { products } = storeToRefs(userProductsStore);

    // 商品連結
    const Router = useRouter();
    const userproduct = (i) => {
      Router.push(`/UserSelect/${i.id}`);
    };

    onMounted(() => {
      //  調整swiper顯示
      if (window.innerWidth < 430) {
        swNum.value = 1;
      } else {
        swNum.value = 2;
      }
      // 監聽調整swiper顯示
      window.addEventListener('resize', () => {
        if (window.innerWidth < 430) {
          swNum.value = 1;
        } else if (window.innerWidth < 821 && window.innerHeight < 1200) {
          swNum.value = 2;
        } else {
          swNum.value = 3;
        }
      });
    });
    return { swNum, modules, products, userproduct };
  },

  components: {
    Swiper,
    SwiperSlide,
  },
  // 這邊不用跑函式取得資料 上層已跑
  // methods: {
  //   getproducts() {
  //     const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
  //     this.$http
  //       .get(Api)
  //       .then((res) => {
  //         this.products = res.data.products;
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  min-width: 18vw;
  max-width: 25vw;
  overflow: hidden;
  .card-img-top {
    height: 30vh;
    overflow: hidden;
    img {
      object-fit: cover;
      height: 30vh;
      width: 100%;
    }
  }
  .overlay {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    opacity: 0;
  }
  &:hover {
    .cardImg.card-img-top {
      img {
        transform: scale(1.5);
        transition: all 1.5s;
      }
    }
    .overlay {
      transition: all 0.5s;
      opacity: 1;
    }
  }
}
@media screen and (max-width: 430px) {
  .card {
    position: relative;
    min-width: 90%;
    margin: auto;
  }
}

@media screen and (min-width: 1600px) {
  .card {
    position: relative;
    width: 18vw;
  }
}
</style>
