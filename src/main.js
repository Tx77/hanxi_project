import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import store from './vuex/store';
import Router from './router/router';
import components from './components';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

// 自定义插件
import utils from './utils/javascript/utils';
// 公用JS
import './utils/javascript/common.js';
// 公用LESS
import './style/common.less';
// 全局注册组件/插件
Vue.use(Vue => {
	const plugin = {VueRouter, Vuex, ElementUI, components, utils };
	Object.keys(plugin).forEach(key => {
		Vue.use(plugin[key]);
	});
});
// 关闭控制台生产环境警告
Vue.config.productionTip = false;

// 注册路由
const router = new VueRouter({
	mode : 'history',
	routes : Router
});

router.beforeEach((to, from, next) => {
	nprogress.start();
	next();
});

router.afterEach(route => {
	nprogress.done();
});

//实例化Vue
const index = new Vue({
	router,
	store
}).$mount('#app');