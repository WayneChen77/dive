<template>
  <footer class="footer bg-titleblue py-3">
    <div class="text-white d-flex justify-content-center g-3">
      <FormView v-slot="{ errors }" @submit="createSub">
        <div class="mb-3">
          <FieldView
            id="email"
            name="email"
            type="email"
            class="rounded"
            :class="{
              'is-invalid': errors['email'],
              'is-valid': !errors[0] && form.user.email != '',
            }"
            placeholder="Email訂閱取得優惠碼"
            rules="email|required"
            v-model="form.user.email"
          >
          </FieldView>

          <button class="btn btn-sm btn-danger ms-3" :disabled="form.user.email === ''">
            訂閱
          </button>
          <ErrorMessage name="email" class="invalid-feedback d-block"></ErrorMessage>
        </div>
      </FormView>
    </div>
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
import swal from 'sweetalert';

export default {
  data() {
    return {
      form: {
        user: {
          email: '',
        },
      },
    };
  },
  methods: {
    createSub() {
      // swal('恭喜獲得優惠碼!', 'happy_10!', 'success');

      swal({
        title: '恭喜獲得優惠碼!',
        text: 'godive!',
        icon: 'success',
        buttons: ['取消!', '馬上去買!'],
        // dangerMode: true,
      }).then((res) => {
        if (res) {
          this.$router.push('userProducts');
        }
        this.form.user.email = '';
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
}
// .text-white {
//   position: absolute;

//   left: 50%;
//   transform: translateX(-50%);
// }
.copyright {
  min-height: 10vh;
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
