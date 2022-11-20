<template>
  <footer class="footer bg-titleblue py-3">
    <div class="copyright">
      <p class="text-center text-white">Copyright © 2022 Wayne Dives. All Rights Reserved.</p>
      <ul class="addressLink">
        <li><a href="">關於我們</a></li>
        <li><a href="">連絡我們</a></li>
        <li><a href="">電子發票</a></li>
        <li>本網站照片來源</li>
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
