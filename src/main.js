// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vue2TouchEvents from 'vue2-touch-events'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// スマホでのタッチイベントを取得するためのライブラリ定義 # 1
var VueTouch = require('vue-touch');
Vue.use(VueTouch, { name: 'v-touch' });
console.log(VueTouch.component);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})