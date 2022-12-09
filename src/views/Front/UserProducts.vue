<template>
  <div class="product">
    <div class="position-relative d-flex align-items-center">
      <div
        class="position-absolute text-center text py-3"
        style="width: 30%; min-height: 10vh; left: 18%"
      >
        <h2>潛水假期</h2>
        <p>馬上展開您的潛水假期</p>
      </div>
    </div>
    <div class="container">
      <div class="title my-3 row">
        <div class="col-md-9 col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link class="text-decoration-none" to="/home">首頁</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">產品介紹</li>
            </ol>
          </nav>
        </div>
        <div class="col-md-3 col-12">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="search"
              @change="filterData"
            />
          </form>
        </div>

        <hr class="mt-3" />
      </div>
      <div class="main mb-3 d-flex flex-wrap justify-content-between">
        <div
          class="card shadow border-0"
          v-for="(i, key) in dataList"
          :key="key"
          data-aos="flip-left"
        >
          <div class="card-img-top cardImg">
            <img :src="i.imageUrl" alt="i.engtitle" />
          </div>
          <div class="overlay card-img-top">
            <a href="#" @click.prevent="userproduct(i)">
              <div class="text-center py-5 text-bgblue">了解更多</div>
            </a>
          </div>
          <i
            class="bi position-absolute like"
            :class="isLiked(i) ? 'bi-heart-fill' : 'bi-heart'"
            @click="liked(i)"
            @keyup="liked(i)"
          ></i>
          <div class="card-body text-center">
            <h5 class="card-title text-truncate">{{ i.title }}</h5>
            <p class="card-text">${{ this.$filters.currency(i.price) }}</p>
            <a href="#" class="btn btn-outline-titleblue" @click.prevent="updateCart(i)"
              >馬上上課</a
            >
          </div>
        </div>
        <!-- 避免跑版 -->
        <span class="flexwrap"></span>
        <span class="flexwrap"></span>
        <span class="flexwrap"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import UserProductsStore from '@/stores/userProductsStore';
// import StatusStore from '@/stores/statusStore';
import { storeToRefs } from 'pinia';
// import { reactive } from 'vue';

export default {
  name: 'UserProducts',
  setup() {
    const Router = useRouter();
    const ProductsStore = UserProductsStore();
    // const statusStore = StatusStore();
    ProductsStore.getproducts();
    const { updateCart, isLiked, getLikes, liked } = ProductsStore;
    const { dataList, search } = storeToRefs(ProductsStore);
    // 函式
    //  進入商品業面

    const userproduct = (i) => {
      Router.push(`/UserSelect/${i.id}`);
    };
    getLikes();
    return { dataList, search, liked, userproduct, updateCart, isLiked, getLikes };
  },

  // mounted() {
  //   // 最愛 改到狀態管理
  //   this.$emitter.on('push-like', () => {
  //     this.getLikes();
  //   });
  // },
};
</script>
<style lang="scss" scoped>
.product {
  .position-relative {
    width: 100%;
    height: 30vh;
    overflow: hidden;
    background-image: url(https://images.pexels.com/photos/302549/pexels-photo-302549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-position: center 45vh;
    background-size: cover;
  }
  .text {
    color: white;
    background: rgba(0, 0, 0, 0.3);
    text-align: center;
  }

  // 排版用
  .flexwrap {
    width: 20%;
    margin: 1%;
  }
  .card {
    position: relative;
    width: 20%;
    min-height: 50vh;
    margin: 1%;

    overflow: hidden;
    .card-img-top {
      min-height: 30vh;
      overflow: hidden;
      img {
        height: 30vh;
        width: 100%;
        object-fit: cover;
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
      color: red;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 890px) {
    .card {
      width: 30%;
    }
  }
  @media screen and (min-width: 1600px) {
    .card {
      min-height: 40vh;
    }
  }
  @media screen and (max-width: 430px) {
    .card {
      position: relative;
      width: 90%;
      margin: auto;
      margin-bottom: 1.5rem;
    }
    .position-relative {
      background-position: center;
    }
  }
}
</style>
