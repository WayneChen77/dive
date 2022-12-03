<template>
  <div class="nav">
    <div class="container pt-2">
      <nav class="navbar navbar-expand-lg">
        <router-link class="text-dark" to="/home"><i class="bi bi-tsunami fs-1"></i></router-link>
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
          <ul class="navbar-nav" ref="navbarUl">
            <li class="nav-item">
              <router-link class="nav-link" to="/about">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/userProducts">產品介紹</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/searchorder">訂單查詢</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/userCarts">購物車</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/Know">潛水知識</router-link>
            </li> -->
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/contact">連絡我們</router-link>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link phoneRwd" to="/login">管理員登入</router-link>
            </li>
            <router-link class="nav-link text-end position-absolute end-0 me-4 rwd" to="/login"
              ><i class="bi bi-gear fs-3"></i
            ></router-link>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    // const a = document.getElementsByTagName('ul');

    this.$refs.navbarUl.addEventListener('click', () => {
      if (document.body.offsetWidth < 992) {
        this.$refs.navbarBtn.click();
      }
    });
  },
  watch: {
    // $route() {
    //   if (document.body.offsetWidth < 992) {
    //     this.$refs.navbarBtn.click();
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  color: black;
  #navbarNav {
    justify-content: space-around;
    ul li {
      padding: 0rem 2rem;
    }
  }
}
@media (max-width: 430px) {
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
    .rwd {
      display: none;
    }
  }
}
@media (min-width: 431px) {
  .phoneRwd {
    display: none;
  }
}
</style>
