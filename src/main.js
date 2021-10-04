import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


// import { createApp } from 'vue'
// import App from './modules/App/index.vue'
// import router from './router'
// import store from './store'
// import VueNotificationList from '@dafcoe/vue-notification'

// createApp(App).use(router).use(store).use(VueNotificationList).mount('#app')
