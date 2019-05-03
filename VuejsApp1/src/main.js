import Vue from 'vue';
import App from './App.vue';
import 'bootstrap'
import 'jquery'

Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#app');
