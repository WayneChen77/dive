import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import Loading from 'vue3-loading-overlay';

import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import mitt from 'mitt';
// 套用千分號
import { currency, date } from './methods/filter';

import App from './App.vue';
import router from './router';

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

app.component('LoadingView', Loading);
app.use(VueAxios, axios);

app.use(router);
app.mount('#app');
