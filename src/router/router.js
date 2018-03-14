import home from '../views/business/home.vue';
import notfound from '../views/common/notfound.vue';

export default [{
	path : '/',
	name : 'app',
	redirect : '/home',
	children : [
		{
			path : '/home',
			name : 'home',
			component : home
		}
	]
}, {
	path : '*',
	redirect : '/404'
}, {
	path : '/404',
	name : '404',
	component : notfound
}];