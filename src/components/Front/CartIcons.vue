<template>
  <div class="p-2 rounded-2 fixbtn">
    <a
      data-bs-toggle="collapse"
      href="#collapseExample"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      <i class="bi bi-heart fs-3 text-titleblue" type="button">
        <span class="badge rounded-pill cartnum" v-if="likedData">{{ likedData.length }}</span
        ><span class="visually-hidden">unread messages</span></i
      >
    </a>

    <div class="collapse" id="collapseExample">
      <div class="card card-body cartBlock">
        <div class="position-relative">
          <h3 class="col-12 text-center">關注中</h3>
          <button
            type="button"
            data-bs-toggle="collapse"
            aria-label="Close"
            href="#collapseExample"
            class="position-absolute end-0 top-0 btn-close"
          ></button>
        </div>

        <div v-if="likedStore.length > 0">
          <div class="row justify-content-center col-12 g-3" v-for="i in likedStore" :key="i">
            <span class="col-2 fs-3 btn" @click="deleLike" @keyup="deleLike(i)"
              ><i class="bi bi-trash"></i
            ></span>
            <div class="col-4"><img :src="i.imageUrl" :alt="i.engtitle" /></div>
            <span class="col-4">{{ i.title }}</span>
            <span class="col-2 fs-3 btn" @click="updateCart(i)" @keyup="updateCart(i)"
              ><i class="bi bi-cart-plus"></i>
            </span>
            <hr />
          </div>
        </div>
        <div class="" v-else>
          <div class="text-center">
            <i class="bi bi-cart4 display-1 fw-bold text-dark" />
            <h6 class="p-3">目前沒有商品唷</h6>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/UserCarts"
      ><i class="bi bi-cart-fill position-relative d-block fs-3 text-titleblue"
        ><span class="badge rounded-pill cartnum"
          >{{ cartNum }}<span class="visually-hidden">unread messages</span></span
        ></i
      ></router-link
    >
    <i
      class="bi bi-arrow-up-square d-block fs-3 text-titleblue"
      type="button"
      @click="toTop"
      @keyup.enter="toTop"
    ></i>
  </div>
</template>

<script>
import UserProductsStore from '@/stores/userProductsStore';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    // 資料
    const userProductsStore = UserProductsStore();
    const { likedData, likedStore, cartNum } = storeToRefs(userProductsStore);
    const { updateCart, getLikeData, deleLike } = userProductsStore;
    // 函式
    userProductsStore.getproducts();
    userProductsStore.getusercarts();
    userProductsStore.getLikes();
    const toTop = () => {
      window.scrollTo({ top: 0 });
    };

    return {
      likedData,
      likedStore,
      cartNum,
      toTop,
      updateCart,
      getLikeData,
      deleLike,
    };
  },
};
</script>

<style lang="scss" scoped>
.cartBlock {
  position: absolute;
  left: -350px;
  top: -200px;
  width: 350px;
  height: 200px;
  overflow-x: scroll;

  //   ::-webkit-scrollbar：捲軸本身，可以設定寬度

  // ::-webkit-scrollbar-track：捲軸空的地方，也可以說背景的顏色

  // ::-webkit-scrollbar-thumb：捲軸可以拉的部分
  img {
    width: 100%;
    height: 100%;
  }
  // overflow: scroll;
}
.cartBlock::-webkit-scrollbar {
  width: 5px;
  height: 2px;
}
.cartBlock::-webkit-scrollbar-thumb {
  background: #aaa;
}
.fixbtn {
  position: fixed;
  z-index: 99;
  bottom: 30vh;
  right: 5vw;
  background-color: rgba($color: white, $alpha: 0.6);

  .cartnum {
    position: absolute;
    background-color: red;
    transform: translate(-50%, -20%) scale(0.5);
    font-size: 1rem;
  }
}
</style>
