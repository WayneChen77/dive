<template>
  <div class="nav">
    <div class="container pt-2">
      <nav class="navbar navbar-expand-lg">
        <router-link class="text-titleblue" to="/home"
          ><i class="bi bi-tsunami fs-1"></i
        ></router-link>
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
import { ref, onMounted } from 'vue';

export default {
  setup() {
    // 監聽畫面點擊關閉nav
    const navbarBtn = ref(null);
    const navbarUl = ref(null);
    onMounted(() => {
      navbarUl.value.addEventListener('click', () => {
        if (document.body.offsetWidth < 992) {
          navbarBtn.value.click();
        }
      });
    });
    return { navbarUl, navbarBtn };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  #navbarNav {
    justify-content: space-around;
    ul li {
      padding: 0rem 2rem;
    }
  }
}
@media (max-width: 992px) {
  #navbarNav {
    font-size: 1.5rem;
    ul li {
      padding: 0rem 2rem;
    }
    .rwd {
      display: none;
    }
  }
}
@media (min-width: 990px) {
  .phoneRwd {
    display: none;
  }
}
</style>
