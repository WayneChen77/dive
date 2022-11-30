<template>
  <div class="mb-3">
    <swiper :modules="modules" :slides-per-view="num" :space-between="50">
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
          <!-- <i
            class="bi bi-heart position-absolute like"
            :class="{ liked: isLiked(i) }"
            @click="liked(i)"
            @keyup="liked(i)"
          ></i> -->
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

export default {
  data() {
    return {
      products: [],
      modules: [Scrollbar, A11y],
      num: 1,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getproducts() {
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(Api)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 商品連結
    userproduct(i) {
      this.$router.push(`/UserSelect/${i.id}`);
    },
  },
  mounted() {
    //  調整swiper顯示
    if (window.innerWidth < 430) {
      this.num = 1;
    } else {
      this.num = 3;
    }
    // 監聽調整swiper顯示
    window.addEventListener('resize', () => {
      if (window.innerWidth < 430) {
        this.num = 1;
      } else {
        this.num = 3;
      }
    });
  },

  created() {
    this.getproducts();
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 20vw;
  overflow: hidden;
  .card-img-top {
    height: 30vh;
    overflow: hidden;
    img {
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
  .like {
    top: 0;
    left: 2vw;
    z-index: 5;
    font-size: 2.5rem;
    color: gray;
    &:hover {
      color: white;
    }
  }
  .liked {
    color: bisque;
  }
}
@media screen and (max-width: 430px) {
  .card {
    position: relative;
    width: 90%;
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
