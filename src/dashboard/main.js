import Vue from 'vue';
import App from './App.vue';
import i18n from '../i18n';
import router from './router';
import store from '../state/store';
import '../components/_globals';

Vue.config.productionTip = false;

new Vue({
    router,
    i18n,
    store,
    render: (h) => h(App),
}).$mount('#app');
