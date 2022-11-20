import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import Loading from 'vue3-loading-overlay';

import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import mitt from 'mitt';
// 表單驗證
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 套用動畫
import AOS from 'aos';
import 'aos/dist/aos.css';
// 套用千分號Y
import { currency, date } from './methods/filter';

import App from './App.vue';
import router from './router';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');
const emitter = mitt();
// 還有課程法在參考看用哪個好
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

const app = createApp(App);
app.config.globalProperties.$emitter = emitter;
// 套用全域千分號
app.config.globalProperties.$filters = {
  currency,
  date,
};
// 套用動畫
// app.use(AOS);

AOS.init({
  offset: 120, // 移動距離 (單位為像素)
  delay: 0, // 延遲時間，範圍從 0-3000
  duration: 800, // 完成動畫所需的時間，範圍從 0-3000
  easing: 'ease-inout-sine', // 動畫曲線
  once: false, // 動畫是否只跑一次
  mirror: false,
  anchorPlacement: 'top-bottom', // 動畫觸發的位置
});

// 全域原件
app.component('FormView', Form);
app.component('FieldView', Field);
app.component('ErrorMessage', ErrorMessage);

app.component('LoadingView', Loading);
app.use(VueAxios, axios);

app.use(router);
app.mount('#app');
