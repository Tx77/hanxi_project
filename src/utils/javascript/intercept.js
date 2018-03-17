import Vue from 'vue';

Vue.http.interceptors.push(function (req,next) {
	let isToken = this.$store.state.isToken;
	//根据token的状态进行拦截或通过操作
	switch (isToken) {
		case 0 :
			let cacheToken = localStorage.getItem('TOKEN');
			if (cacheToken) {
				Vue.http.headers.common.token = cacheToken; //在request headers里面加入token
				//通过拦截执行下一步操作
				next((res)=>{
					let token = res.body.status;
					//重新赋值isToken
					this.$store.state.isToken = token;
					switch (token) {
						case 0 :
							break;
						case -1 :
							this.backToLogin(this, '系统异常，请联系管理员！！！');
							break;
						case -2 :
							this.backToLogin(this, '登录已过期，请重新登录！！！');
							break;
						case -3 :
							this.backToLogin(this, '账号未登录，请先登录！！！');
							break;
					}
				});
			} else {
				delete Vue.http.headers.common.token; //删除token
				next();
			}
			break;
		case -2 :
			this.backToLogin(this, '登录已过期，请重新登录！！！');
			break;
		case -3 :
			this.backToLogin(this, '账号未登录，请先登录！！！');
			break;
	}
});