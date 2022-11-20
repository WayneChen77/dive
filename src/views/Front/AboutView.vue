<template>
  <TopImg
    ><h2 class="">關於我們</h2>
    <p>ABOUT</p>
  </TopImg>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 my-3">
        <h3>公司介紹</h3>
        <hr />
        <div class="row justify-content-center" data-aos="zoom-in">
          <div class="col-12 col-md-4 mt-3">
            <h4 class="text-titleblue">[Wayne's Dive]</h4>
            <p class="text-center lh-lg">
              座落在美麗的南灣附近，是擁有國際潛水機構五星認證的專業潛水渡假中心。
              多年來我們的教練以專業、認真與熱忱，提供給您最佳的潛水教學與服務。透過多年累積的經驗，我們也經常為各大專院校的科系社團、消防單位、救難團體等單位提供專業的代訓服務。
            </p>
          </div>
          <div class="col-12 col-md-8 imgwrap" data-aos="zoom-in">
            <img
              class="col"
              src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg"
              alt=""
            />
            <svg height="0" width="0">
              <defs>
                <clipPath id="svgPath">
                  <path
                    class="pathscale"
                    fill="#FFFFFF"
                    stroke="#000000"
                    stroke-width="1.5794"
                    stroke-miterlimit="10"
                    d="M215,100.3c97.8-32.6,90.5-71.9,336-77.6c92.4-2.1,98.1,81.6,121.8,116.4c101.7,149.9,53.5,155.9,14.7,178c-96.4,54.9,5.4,269-257,115.1c-57-33.5-203,46.3-263.7,20.1 c-33.5-14.5-132.5-45.5-95-111.1C125.9,246.6,98.6,139.1,215,100.3z"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopImg from '@/components/Front/TopImg.vue';

export default {
  components: { TopImg },
};
</script>

<style lang="scss" scoped>
.imgwrap {
  min-height: 30vh;
}
img {
  width: 100%;
  background-size: 100% 100%;
  clip-path: url('#svgPath');
  //   -webkit-clip-path: inset(10% 20% 30% 10% round 20% 5% 50% 30%);
}
.pathscale {
  transform: scale(0.9, 0.9);
}
@media screen and (max-width: 430px) {
  .pathscale {
    transform: scale(0.5, 0.5);
  }
}
</style>
