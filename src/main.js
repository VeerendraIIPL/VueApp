import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import VeeValidate from 'vee-validate';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VeeValidate);

createApp(App).use(router).mount('#app')

