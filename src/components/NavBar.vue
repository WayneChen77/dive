<template>
  <div class="nav">
    <div class="container pt-2">
      <nav class="navbar navbar-expand-lg">
        <router-link class="text-dark" to="/">1</router-link>
        <button
          ref="navbarBtn"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/userProducts">產品介紹</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Candy">潛水知識</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">管理登入</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <CartIcons></CartIcons>
  </div>
</template>
<script>
import CartIcons from '@/components/CartIcons.vue';

export default {
  components: { CartIcons },

  watch: {
    $route() {
      if (document.body.offsetWidth < 992) {
        this.$refs.navbarBtn.click();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  color: black;
  #navbarNav {
    justify-content: center;
  }
}
@media (min-width: 992px) {
  #navbarNav {
    font-size: 1.5rem;
    ul li {
      padding: 0rem 2rem;
      a {
        color: black;
      }

      .active {
        color: rgb(244, 228, 142);
      }
    }
  }
}
</style>
