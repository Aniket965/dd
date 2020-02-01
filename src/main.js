import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import 'vue-navigation-bar/dist/vue-navigation-bar.css';
import VueNavigationBar from 'vue-navigation-bar';


import App from './App.vue';
import 'swiper/css/swiper.css';
import './registerServiceWorker';


library.add(faFacebook);
library.add(faInstagram);
library.add(faGoogle);


Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('vue-navigation-bar', VueNavigationBar);

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
