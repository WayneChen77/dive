<template>
  <div class="row justify-content-center p-md-0 p-3">
    <h3 class="text-center fs-3">顧客聯絡資料</h3>
    <FormView
      class="col-md-10 bg-titleblue rounded my-3 text-warning"
      v-slot="{ errors }"
      @submit="createOrder"
    >
      <div class="my-3">
        <label for="name" class="form-label">聯絡人姓名</label>
        <FieldView
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'], 'is-valid': !errors[0] && form.user.name != '' }"
          placeholder="請輸入聯絡人姓名"
          :rules="isName"
          v-model="form.user.name"
        ></FieldView>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">聯絡人Email</label>
        <FieldView
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{
            'is-invalid': errors['email'],
            'is-valid': !errors[0] && form.user.email != '',
          }"
          placeholder="請輸入聯絡人Email"
          rules="email|required"
          v-model="form.user.email"
        ></FieldView>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">聯絡人電話</label>
        <FieldView
          id="tel"
          name="電話"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'], 'is-valid': !errors[0] && form.user.tel != '' }"
          placeholder="請輸入聯絡人電話"
          :rules="isPhone"
          v-model="form.user.tel"
        ></FieldView>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">聯絡人地址</label>
        <FieldView
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{
            'is-invalid': errors['地址'],
            'is-valid': !errors[0] && form.user.address != '',
          }"
          placeholder="請輸入聯絡人地址"
          rules="required"
          v-model="form.user.address"
        ></FieldView>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea
          name=""
          id="message"
          class="form-control"
          cols="30"
          rows="10"
          v-model="form.message"
        ></textarea>
      </div>
      <div class="text-end mb-3">
        <button class="btn btn-danger">送出資料</button>
      </div>
    </FormView>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    isName(value) {
      const name = /^[\u4e00-\u9fa5A-Za-z]{0,}$/;
      if (this.form.user.name === '') {
        return '姓名為必填';
      }
      return name.test(value) ? true : '需要中文或英文姓名';
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      if (this.form.user.tel === '') {
        return '電話為必填';
      }
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    createOrder() {
      const Api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(Api, { data: order }).then((res) => {
        //   console.log(res);
        this.$router.push(`/Order/PayView/${res.data.orderId}`);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
