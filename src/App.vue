<template>
  <NavBar class="nav"></NavBar>
  <div class="main"><router-view /></div>

  <Footer></Footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/FooterView.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style lang="scss">
.nav{min-height: 10vh;}
.main {
  min-height: 80vh; /*減去footer高度*/
}
@import './assets/all.scss';
</style>
