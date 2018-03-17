<template>
	<div class="hx-login-container">
		<div class="hx-login-bg-top"></div>
		<div class="hx-login-bg-footer"></div>
		<div class="hx-login-template">
			<el-form
				class="hx-login-template-form"
				label-width="100px"
				ref="loginForm"
				:model="listParams"
				:rules="checkListParams">
				<el-form-item
					prop="userAccount"
					label="用户名：">
					<el-input
						placeholder="请输入用户名："
						v-model="listParams.userAccount">
					</el-input>
				</el-form-item>
				<el-form-item
					prop="userPwd"
					label="密码：">
					<el-input
						placeholder="请输入密码："
						v-model="listParams.userPwd"
						type="password">
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button
						style="width: 300px;margin-top: 10px;"
						type="primary"
						@click="login('loginForm')">
						登录
					</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				listParams : {
					userAccount : '',
					userPwd : ''
				},
				checkListParams : {
					userAccount : [
						{ required : true, message : '请输入用户名', trigger : 'blur' }
					],
					userPwd : [
						{ required : true, message : '请输入密码', trigger : 'blur' }
					]
				}
			};
		},
		methods : {
			login (name) {
				this.$refs[name].validate((valid) => {
					if (valid) {
						this.$router.push({
							name : 'home'
						});
					}
				});
			}
		}
	};
</script>

<style lang="less">
	.hx-login-container{
		width: 100%;
		height: 100%;
		overflow: hidden;
		.hx-login-bg-top{
			width: 100%;
			height: 300px;
			background: linear-gradient(-100deg, #1cc7f2, #1265a6);
		}
		.hx-login-bg-footer{
			width: 100%;
			height: 100px;
			position: absolute;
			bottom: 0;
			left: 0;
		}
		.hx-login-template{
			width: 500px;
			height: 300px;
			box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.05);
			border-radius: 5px;
			margin:-50px auto;
			z-index: 9999;
			background: #ffffff;
			position: relative;
			.hx-login-template-form{
				width: 400px;
				height: 200px;
				position: absolute;
				top: 70px;
				left: 30px;
			}
		}
	}
</style>