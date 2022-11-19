<template>
  <div class="wrap d-flex position-relative justify-content-center align-items-center">
    <div class="img"></div>
    <div class="titledown"></div>
    <div
      class="position-absolute text-center text text-light shadow"
      style="width: 30%; min-height: 10vh"
    >
      <slot>
        <h2 class="">連絡我們</h2>
        <p>CONTACT</p></slot
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 40vh;
  overflow: hidden;
  .img {
    width: 100%;
    height: 800px;
    position: absolute;
    background-image: url(https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg);
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center top;
    opacity: 0.9;
    z-index: 0;
    -webkit-transform: translate(0, -5%);
    animation: topimg 10s 1 linear;
  }
  @media screen and (max-width: 430px) {
    .img {
      background-position: 71% top;
    }
  }
  @keyframes topimg {
    0% {
      -webkit-transform: translate(0, -200px);
    }
    100% {
      -webkit-transform: translate(0, -5%);
    }
  }
}
.titledown {
  height: 60px;
  width: 100%;
  position: absolute;
  background-image: url(https://www.divevillage.com.tw/images/indextop/titledown.png);
  background-position: center bottom;
  bottom: -2px;
  z-index: 2;
  background-attachment: scroll;
}
</style>
