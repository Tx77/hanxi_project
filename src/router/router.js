import login from '../login.vue';
import home from '../views/business/home.vue';
import about from '../views/business/about.vue';
import app from '../app.vue';
import notfound from '../views/common/notfound.vue';

export default [{
	path : '/login',
	name : 'login',
	component : login
}, {
	path : '/',
	name : 'app',
	component : app,
	redirect : '/login',
	children : [
		{
			path : '/home',
			name : 'home',
			component : home
		},
		{
			path : '/about',
			name : 'about',
			component : about
		}
	]
}, {
	path : '*',
	redirect : '/login'
}, {
	path : '/404',
	name : '404',
	component : notfound
}];