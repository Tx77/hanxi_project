import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import store from './vuex/store';
import Router from './router/router';
import App from './app.vue';

//自定义插件
import utils from './utils/javascript/utils';
//公用JS
import './utils/javascript/common.js';
//公用LESS
import './style/common.less';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(utils);

const router = new VueRouter({
	mode : 'history',
	routes : Router
});

const index = new Vue({
	router,
	store
}).$mount('#app');