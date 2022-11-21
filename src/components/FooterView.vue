<template>
  <footer class="footer bg-titleblue py-3">
    <div class="copyright">
      <p class="text-center text-white">Copyright © 2022 Wayne Dives. All Rights Reserved.</p>
      <ul class="addressLink">
        <li><router-link class="nav-link" to="/about">關於我們</router-link></li>
        <li><router-link class="nav-link" to="/contact">連絡我們</router-link></li>
        <li><router-link class="nav-link" to="/userProducts">產品介紹</router-link></li>
        <li><a href="https://www.pexels.com/zh-tw/" target="_blank"> 本網站照片來源</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
}
.copyright {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;

  ul {
    left: 0;
    right: 0;

    list-style: none;

    display: flex;
    li {
      color: white;

      margin: 0.5rem;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
