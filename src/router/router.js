import _ from 'lodash';
import login from '../login.vue';
import home from '../views/business/home.vue';
import about from '../views/business/about.vue';
import components from '../views/business/components.vue';
import app from '../app.vue';
import notfound from '../views/common/notfound.vue';
import supplySystem from './supplySystem';

// 合并导入的所有子路由
const childrenRouter = _.union(supplySystem);

export default [{
	path : '/login',
	name : 'login',
	component : login
}, {
	path : '/',
	name : 'app',
	component : app,
	redirect : '/login',
	children : childrenRouter
}, {
	path : '*',
	redirect : '/login'
}, {
	path : '/404',
	name : '404',
	component : notfound
}];

// [
//   {
//     path : '/home',
//     name : 'home',
//     component : home
//   },
//   {
//     path : '/about',
//     name : 'about',
//     component : about
//   },
//   {
//     path : '/components',
//     name : 'components',
//     component : components
//   }
// ]