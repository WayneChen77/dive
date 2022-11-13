<template>
  <!-- 全域原件 -->
  <LoadingView :active="isLoading"></LoadingView>
  <div class="product">
    <div class="row position-relative">
      <img
        src="https://images.pexels.com/photos/302549/pexels-photo-302549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div
        class="position-absolute text-center text"
        style="width: 30%; min-height: 10vh; top: 30%; left: 18%"
      >
        <h4>潛水假期</h4>
        <p>馬上展開您的潛水假期</p>
      </div>
    </div>
    <div class="container">
      <div class="title my-3 row">
        <div class="col-md-9 col-12">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link class="text-decoration-none" to="/">韋恩潛水</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">潛水假期</li>
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
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

        <hr class="mt-3" />
      </div>
      <div class="main mb-3 d-flex flex-wrap">
        <div class="card shadow border-0 m-3" v-for="(i, key) in dataList" :key="key">
          <div class="card-img-top cardImg">
            <img :src="i.imageUrl" alt="i.engtitle" />
          </div>
          <div class="overlay card-img-top">
            <a href="#" @click.prevent="userproduct(i)">
              <div class="text-center p-5 text-white">了解更多</div>
            </a>
          </div>

          <div class="card-body text-center">
            <h5 class="card-title">{{ i.title }}</h5>
            <p class="card-text">${{ i.price }}</p>
            <a href="#" class="btn btn-outline-primary" @click.prevent="updateCart(i)">馬上上課</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ToastMessages></ToastMessages>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  name: 'UserProducts',

  data() {
    return { products: [], isLoading: false, search: '' };
  },
  // 待設定更新購物車 下面是傳的方式
  // inject: ['emitter'],
  components: { ToastMessages },
  methods: {
    //  進入商品業面
    userproduct(i) {
      this.$router.push(`/UserSelect/${i.id}`);
    },
    // 加入購物車
    updateCart(i) {
      this.isLoading = true;
      console.log(i.id);
      const cart = {
        product_id: i.id,
        qty: 1,
      };
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(Api, { data: cart })
        .then((res) => {
          console.log(res.data.data.product_id);
          //   吐司回覆
          this.$emitter.emit('push-msg', {
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
    getproducts() {
      this.isLoading = true;
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(Api)
        .then((res) => {
          this.products = res.data.products;
          console.log(this.products);
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  computed: {
    // search
    dataList() {
      return this.products.filter((i) => i.title.match(this.search));
    },
  },
  created() {
    this.getproducts();
  },
};
</script>
<style lang="scss">
.product {
  .row.position-relative {
    img {
      width: 100%;
      height: 30vh;
    }
  }
  .text {
    color: aqua;
    background-color: rgba($color: white, $alpha: 0.3);
    text-align: center;
  }

  .card {
    position: relative;
    width: 18vw;
    .card-img-top {
      height: 30vh;
      overflow: hidden;
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
      width: 90%;
      margin: auto;
    }
  }
}
</style>
