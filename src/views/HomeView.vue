<template>
  <div class="home">
    <swiper
      class=""
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <div class="txt">
          <h3>韋恩潛旅</h3>
          一起來探索龜之島小琉球，以及水下70%的神秘世界
        </div>
        <img
          src="https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="d-block w-100"
          alt="'圖片+i'"
        />
        ></swiper-slide
      >
      <swiper-slide>
        <div class="txt">
          <h3>潛水旅遊</h3>

          「向陸地請個假，下來吧！來海底！」
        </div>
        <img
          src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg"
          class="d-block w-100"
          alt="'圖片+i'"
      /></swiper-slide>
      <swiper-slide>
        <div class="txt">
          <h3>放鬆、閉氣、下潛</h3>
          你也想要嘗試憑藉一口氣潛入水裡的感覺嗎？
          自由潛水基礎課程可以在短時間內滿足你對自由潛水的好奇心
          這是一堂完全沒有壓力的體驗課程，非常適合水性不佳的同學來嘗試看看
        </div>
        <img
          src="https://images.pexels.com/photos/762103/pexels-photo-762103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="d-block w-100"
          alt="'圖片+i'"
      /></swiper-slide>
    </swiper>
    <div class="container dive">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 p-3">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div class="col-12 col-md-6 p-3 text">
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
        <div class="col-12 col-md-6 p-3 text">
          <div>
            <h4>水肺潛水</h4>
            <p>
              水肺是一種輔助潛水者在水中呼吸的器具。水肺是在1943年，由雅克-伊夫·庫斯托和埃米爾·加尼昂共同發明的。
              現代的水肺系統最少由四個部分組成，包括：浮力調節裝置、呼吸調節器、
              潛水氣瓶和配重系統。調節器以活栓操控，將壓縮氣體由高壓狀態，轉化成可供人體正常呼吸的壓力。
              潛水員所使用的氣瓶不稱為氧氣筒。氧氣筒(100%氧氣)是屬於醫療級的氣體。水肺使用的稱之為氣瓶(79%氮氣+21%氧氣)，氣瓶裡裝的是壓縮後的空氣，並非純氧氣
            </p>
          </div>
        </div>
        <div class="col-12 col-md-6 p-3">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/37530/divers-scuba-divers-diving-underwater-37530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="a123 p-5 m-2 text-white">
        <h4>每年3次，出團潛入世界</h4>
        <p>
          拿到海洋入場券後，想要到國外看不同的生物，但又不知道如何安排嗎？
          業的學生們不用擔心，一年會舉行三次的國外潛旅等著你們！
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
                <a href=""> <div class="text-center p-5 text-white">了解更多</div></a>
              </div>
            </div>
            <div class="text-center">
              水肺潛水
              <p>任何人都可以嘗試，以最簡單的方式下潛到水深12米以內，欣賞海底世界的奇幻與美妙</p>
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
                <a href=""> <div class="text-center p-5 text-white">了解更多</div></a>
              </div>
            </div>
            <div class="text-center">
              自由潛水
              <p>
                基礎課程可以讓你在短時間裡面進入自由潛水的世界，並憑著自己一口氣開始做有深度的自由潛水探索
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
                <a href=""> <div class="text-center p-5 text-white">了解更多</div></a>
              </div>
            </div>
            <div class="text-center">
              水上活動
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
// @ is an alias to /src

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'HomeView',
  data() {
    return { modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay] };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
  },
};
</script>
<style lang="scss">
// 圓形遮罩
.home {
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
}

.a123 {
  background-image: url('https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-attachment: fixed;
}
.text div {
  background: rgba($color: #0cc6f0, $alpha: 0.3);
}
img {
  width: 100%;
  height: 100%;
}
.swiper {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
.botswiper {
  width: 100%;
  height: 20vh;
  object-fit: cover;
}

.txt {
  padding: 1rem;
  color: white;
  top: 30%;

  left: 18%;
  width: 390px;

  min-height: 30vh;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
}
@media screen and (max-width: 430px) {
  .txt {
    left: 0;
    right: 0;
  }
}
</style>
