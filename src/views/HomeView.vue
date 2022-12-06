<template>
  <div class="home">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      :effect="'fade'"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide>
        <div
          class="sliderBlock"
          style="
            background-image: url(https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
          "
        >
          <div class="txt" data-aos="zoom-in">
            <h1>韋恩潛旅</h1>

            <p>一起探索世界潛水景點，以及水下的神秘世界！</p>
            <router-link to="/userProducts" class="btn-animation pulse">來去看看</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="sliderBlock"
          style="
            background-image: url(https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg);
          "
        >
          <div class="txt" data-aos="zoom-in">
            <h3>潛入您的生活</h3>
            <p>向陸地請個假，下來吧！來海底！</p>
            <router-link to="/userProducts" class="btn-animation pulse">來去看看</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="sliderBlock"
          style="
            background-image: url(https://images.pexels.com/photos/762103/pexels-photo-762103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
          "
        >
          <div class="txt" data-aos="zoom-in">
            <h3>挑戰你的極限</h3>
            <p>馬上展開您的冒險，韋恩潛旅給您最大的折扣！</p>
            <router-link to="/userProducts" class="btn-animation pulse">來去看看</router-link>
          </div>
        </div>
      </swiper-slide>
      <div class="sliderDown"></div>
    </swiper>
    <div class="container mainTop">
      <div class="row align-items-center justify-content-center textItem">
        <div class="col-12 col-md-6 p-3" data-aos="fade-right">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dive.pic"
            title="自由潛水"
          />
        </div>
        <div class="col-12 col-md-6 p-3 text text1" data-aos="fade-left">
          <div>
            <h4>自由潛水</h4>
            <p>
              自由潛水是最古老、最原始的潛水形式。例如，早在石器時代，人們就透過自由潛水就收集貝殼、海綿和珍珠。
              日本的「あま」、
              韓國的「해녀」（皆為海女的一種）和馬來群島的巴瑤族（英語：Bajau）今天仍然以這種方式潛水。
              自由潛水是一種休閒活動同時也是一種潛水競技運動，甚至也是一種極限運動。
              休閒活動的重點是探索海底世界，並在與水肺潛水類似的環境條件下潛水。
              自由潛水也有一些瑜伽元素，例如深呼吸、有意識的呼吸和意識練習。
            </p>
          </div>
        </div>
        <div class="imgtop col-0 col-md-6 text text2" data-aos="fade-right"></div>

        <div class="col-12 col-md-6 p-3" data-aos="fade-left">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/37530/divers-scuba-divers-diving-underwater-37530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dive.pic"
            title="水肺潛水"
          />
        </div>

        <teleport to=".imgtop" v-if="isMounted" :disabled="isDisabled">
          <div class="p-3 txtrwd" :data-aos="[isDisabled ? 'fade-right' : 'none']">
            <!-- v-bind:class="{ active: isActive, error: hasError }" -->
            <!-- v-bind:class="[isActive ? activeClass : '', errorClass]" -->
            <div>
              <h4>水肺潛水</h4>
              <p>
                水肺是一種輔助潛水者在水中呼吸的器具。水肺是在1943年，由雅克-伊夫·庫斯托和埃米爾·加尼昂共同發明的。
                現代的水肺系統最少由四個部分組成，包括：浮力調節裝置、呼吸調節器、
                潛水氣瓶和配重系統。調節器以活栓操控，將壓縮氣體由高壓狀態，轉化成可供人體正常呼吸的壓力。
                潛水員所使用的氣瓶不稱為氧氣筒。氧氣筒(100%氧氣)是屬於醫療級的氣體。水肺使用的稱之為氣瓶(79%氮氣+21%氧氣)，氣瓶裡裝的是壓縮後的空氣，並非純氧氣。
              </p>
            </div>
          </div>
        </teleport>
      </div>
    </div>
    <div class="mainMid my-3 text-titleblue" data-aos="zoom-in">
      <div class="container text-center p-3">
        <h3 class="m-3">韋恩潛旅，超值服務</h3>

        <div class="row">
          <div class="col-12 col-md-3">
            <img
              src="../assets/icons/icons8-cargo-ship-64.svg"
              alt="ship.pic"
              style="width: 64px"
            />
            <h4>遊艇</h4>

            <p>
              引進墾丁52人座遊艇，讓您體驗富豪般的海上生活，不需遠赴國外即可與朋友們一同在船上享受墾丁美麗的碧海藍天，開派對、跳水、浮潛、水上活動、烤肉，把您的假期花在值得的事情上吧!
            </p>
          </div>
          <div class="col-12 col-md-3">
            <img src="../assets/icons/icons8-dive-64.svg" alt="dive.pic" style="width: 64px" />
            <h4>潛水</h4>
            <p>
              我們的教練以專業、認真與熱忱，提供給您最佳的潛水教學與服務。全世界有海洋面積約占地球表面積71%，沒有去過這71%你不算去過全世界！
            </p>
          </div>
          <div class="col-12 col-md-3">
            <img src="../assets/icons/icons8-palm-tree-50.svg" alt="tree.pic" style="width: 64px" />
            <h4>渡假</h4>
            <p>
              多樣客製化服務，絕對是您的休閒首選，遊艇烤肉BBQ、專人交通接送、多樣水上活動，您還在等什麼!
            </p>
          </div>
          <div class="col-12 col-md-3">
            <img
              src="../assets/icons/icons8-real-estate-50.svg"
              alt="house.pic"
              style="width: 64px"
            />
            <h4>住宿</h4>
            <p>
              清靜優雅的庭園獨棟渡假小屋，提供您舒適優雅的度假環境。寬敞的四人空間，限量超值豪華套房，
              室內為兩房一廳的大空間，將休憩區和睡眠區區分開， 提升睡眠品質，好好享受您的愉快渡假。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="attachBack p-5 m-2 text-white">
        <h4>每年3次，出團潛入世界</h4>
        <p>
          拿到海洋入場券後，想要到國外看不同的生物，但又不知道如何安排嗎？
          結業的學生們不用擔心，一年會舉行三次的國外潛旅等著你們！
        </p>
      </div>

      <div>
        <h4 class="text-center">F R E E D I V I N G C O U R S E S</h4>
        <h4 class="text-center">潛水課程</h4>
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="wrap">
              <img
                class="rounded-circle"
                src="https://images.pexels.com/photos/3046637/pexels-photo-3046637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div class="overlay rounded-circle">
                <router-link to="/userProducts">
                  <div class="text-center py-5 text-white">了解更多</div></router-link
                >
              </div>
            </div>
            <div class="text-center">
              <h4 class="my-3">水肺潛水</h4>
              <p>任何人都可以嘗試，以最簡單的方式下潛到水深12米以內，欣賞海底世界的奇幻與美妙。</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="wrap">
              <img
                class="rounded-circle"
                src="https://images.pexels.com/photos/8059795/pexels-photo-8059795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11"
                alt=""
              />
              <div class="overlay rounded-circle">
                <router-link to="/userProducts">
                  <div class="text-center py-5 text-white">了解更多</div></router-link
                >
              </div>
            </div>
            <div class="text-center">
              <h4 class="my-3">自由潛水</h4>
              <p>
                基礎課程可以讓你在短時間裡面進入自由潛水的世界，並憑著自己一口氣開始做有深度的自由潛水探索。
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="wrap">
              <img
                class="rounded-circle"
                src="https://images.pexels.com/photos/2403840/pexels-photo-2403840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div class="overlay rounded-circle">
                <router-link to="/userProducts">
                  <div class="text-center py-5 text-white">了解更多</div></router-link
                >
              </div>
            </div>
            <div class="text-center">
              <h4 class="my-3">水上活動</h4>
              <p>
                雖然在任何水域戴上潛水鏡和呼吸管都可以稱為是浮潛，但是一般浮潛是在礁石、沉船或者其它水下物體附近進行的。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';
// A11y,Navigation,
import { ref, reactive, onMounted } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const isMounted = ref(false);
    const isDisabled = ref(false);
    const modules = reactive([Pagination, Scrollbar, Autoplay, EffectFade]);

    onMounted(() => {
      // 解決Teleport掛載問題
      isMounted.value = true;
      if (window.innerWidth < 430) {
        isDisabled.value = true;
      }
      // 判斷當前螢幕關閉Teleport
      window.addEventListener('resize', () => {
        console.log(window.screen.width);
        if (window.innerWidth < 430) {
          isDisabled.value = true;
        } else {
          isDisabled.value = false;
        }
      });
    });

    return { isDisabled, isMounted, modules };
  },
  components: {
    Swiper,
    SwiperSlide,
  },

  // op api
  // data() {
  //   return {
  //     isMounted: false,
  //     isDisabled: false,
  //     modules: [Pagination, Scrollbar, Autoplay, EffectFade],
  //   };
  // },
};
</script>

<style lang="scss" scoped>
// 上方區塊
.swiper {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
.sliderBlock {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  .txt {
    padding: 1rem;
    color: white;
    top: 40%;
    left: 18%;
    width: 390px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;

    .btn-animation {
      background: none;
      text-decoration: none;
      border: 2px solid;
      line-height: 1;
      margin: 0.5rem;
      padding: 0.5rem 1em;
      color: white;
    }
    .pulse:hover {
      transform: scale(1);
      animation: pulse 1s;
      box-shadow: 0 0 0 0 rgba($color: white, $alpha: 0.25);
    }
    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba($color: white, $alpha: 0.25);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 20px rgba($color: white, $alpha: 0.15);
      }

      100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba($color: blue, $alpha: 0);
      }
    }
  }
}
.sliderDown {
  height: 80px;
  width: 100%;
  position: absolute;
  background-image: url(https://www.longjing.com.tw/Templates/TEZ_109061EZW/images/all/banner_bottom.png);
  background-position: center bottom;
  background-size: 150% 100%;
  bottom: -1px;
  z-index: 2;
  background-attachment: scroll;
}
.mainTop {
  // 避免aos跑版
  overflow-x: hidden;
  .text {
    background: rgba($color: #0cc6f0, $alpha: 0.3);
    z-index: 1;
  }
  .text1 {
    margin-left: -10%;
  }
  .text2 {
    margin-right: -10%;
  }
}

.mainMid {
  background: rgba($color: #0cc6f0, $alpha: 0.3);
  z-index: 1;
}
.attachBack {
  background-image: url('https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-attachment: fixed;
  background-size: cover;
}

// 下方區塊圓遮罩
.wrap {
  object-fit: cover;
  position: relative;
  display: flex;
  justify-content: center;
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
  img {
    width: 150px;
    height: 150px;
  }
  .overlay {
    transition: all 0.5s;
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    opacity: 0;
  }
}

@media screen and (max-width: 650px) {
  .sliderBlock {
    .txt {
      left: 0;
      right: 0;
      margin: auto;
    }
  }
}
@media screen and (max-width: 430px) {
  .txtrwd {
    background: rgba($color: #0cc6f0, $alpha: 0.3);
    z-index: 1;
  }
  .text1,
  .text2 {
    margin: 0%;
  }
  .sliderBlock {
    .txt {
      top: 25%;
    }
  }

  .swiper {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  .mainMid {
    background: white;
  }
}
</style>
