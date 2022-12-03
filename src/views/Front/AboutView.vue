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
          <div class="col-12 col-xl-3 mt-3">
            <h4 class="text-titleblue">Wayne's Dive</h4>
            <p class="lh-lg">
              座落在美麗的南灣附近，是擁有國際潛水機構五星認證的專業潛水渡假中心。
              多年來我們的教練以專業、認真與熱忱，提供給您最佳的潛水教學與服務。透過多年累積的經驗，我們也經常為各大專院校的科系社團、消防單位、救難團體等單位提供專業的代訓服務。
            </p>
          </div>
          <div class="col-12 col-xl-9 imgwrap" data-aos="zoom-in">
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
    <div class="contact">
      <div class="text-center border p-3">
        <h3>聯絡我們</h3>
        <div>
          <p>服務專線:0800-888-666</p>
          <p>營業時間:AM09:00~PM20:00</p>
          <p>LIND ID:Wayne-Dive</p>
          <p>Email:Wayne-Dive@divelife.com.tw</p>
        </div>
      </div>

      <div class="row">
        <h3>店面地址</h3>
        <div class="col-12 col-md-7 p-3">
          <iframe
            title="店家地址"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29602.827564249696!2d120.72637006209982!3d21.959393957336626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471b1abbb7d8d55%3A0x45724d191a9be279!2z5qiC5rS75Y2X54Gj6YGK5oap5Y2A!5e0!3m2!1szh-TW!2stw!4v1669995908699!5m2!1szh-TW!2stw"
          ></iframe>
        </div>

        <div class="col-12 col-md-5 p-3">
          <h4 class="mb-3">946屏東縣恆春鎮南灣路223號</h4>
          <span class="mb-3">透過以下方式前往 ——</span>

          <ol>
            <li class="mb-3">
              火車：於枋寮車站轉搭公車8239至潮州恆春轉運站轉公車101B、101墾丁街車橘線至鵝鑾鼻
              恆南南光路口再步行約17分。
            </li>
            <li class="mb-3">
              汽車，可走國道3號，朝屏東前進並於424-南州出口下交流道沿屏鵝公路前往目的地恆春。
            </li>
            <li class="mb-3">
              跨縣市前往可搭乘高鐵至左營並搭乘接"9189台灣好行墾丁快線駁車"前往並步行6分鐘至實體店。
            </li>
          </ol>
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
}
.pathscale {
  transform: scale(0.9, 0.9);
}

@media screen and (max-width: 993px) {
  .pathscale {
    transform: scale(0.7, 0.7);
  }
}
@media screen and (max-width: 600px) {
  .pathscale {
    transform: scale(0.5, 0.5);
  }
}
</style>
