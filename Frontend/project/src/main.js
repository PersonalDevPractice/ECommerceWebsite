import Vue from 'vue';
import App from './App.vue';
import { routes } from './routes/routes';
import VueRouter from 'vue-router';
Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
