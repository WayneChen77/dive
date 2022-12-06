<template>
  <footer class="footer bg-titleblue py-3">
    <div class="text-white d-flex justify-content-center g-3">
      <FormView v-slot="{ errors }" @submit="createSub">
        <div class="mb-3">
          <FieldView
            id="userEmail"
            name="userEmail"
            type="userEmail"
            class="rounded"
            :class="{
              'is-invalid': errors['userEmail'],
              'is-valid': !errors[0] && userEmail != '',
            }"
            placeholder="Email訂閱取得優惠碼"
            rules="email|required"
            v-model="userEmail"
          >
          </FieldView>

          <button class="btn btn-sm btn-danger ms-3" :disabled="userEmail === ''">訂閱</button>
          <ErrorMessage name="userEmail" class="invalid-feedback d-block"></ErrorMessage>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const userEmail = ref('');
    const createSub = () => {
      swal({
        title: '恭喜獲得優惠碼!',
        text: 'godive!',
        icon: 'success',
        buttons: ['取消!', '馬上去買!'],
      }).then((res) => {
        if (res) {
          router.push('userProducts');
        }
        userEmail.value = '';
      });
    };

    return { userEmail, createSub };
  },

  // op api
  // data() {
  //   return {
  //     form: {
  //       user: {
  //         userEmail: '',
  //       },
  //     },
  //   };
  // },
  // methods: {
  //   createSub() {

  //     swal({
  //       title: '恭喜獲得優惠碼!',
  //       text: 'godive!',
  //       icon: 'success',
  //       buttons: ['取消!', '馬上去買!'],
  //     }).then((res) => {
  //       if (res) {
  //         this.$router.push('userProducts');
  //       }
  //       this.form.user.userEmail = '';
  //     });
  //   },
  // },
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
