<template>
	<div>
		<el-container class="hx-template-container">
			<el-header class="hx-template-header">
				<div class="hx-logo"></div>
				<div style="float: right; width: calc(100% - 200px);position: relative;">
					<el-menu
						mode="horizontal"
						background-color="#545c64"
						text-color="#fff"
						active-text-color="#ffd04b">
						<el-menu-item index="1">处理中心</el-menu-item>
						<el-submenu index="2">
							<template slot="title">我的工作台</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
							<el-menu-item index="2-3">选项3</el-menu-item>
							<el-submenu index="2-4">
								<template slot="title">选项4</template>
								<el-menu-item index="2-4-1">选项1</el-menu-item>
								<el-menu-item index="2-4-2">选项2</el-menu-item>
								<el-menu-item index="2-4-3">选项3</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="3" disabled>消息中心</el-menu-item>
						<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
					</el-menu>
					<div class="login-out-style">
						<i class="el-icon-back"></i>
						<span>退出登录</span>
					</div>
				</div>
			</el-header>
			<el-container style="height: 100%;">
				<el-aside class="hx-template-aside">
					<el-menu
						class="hx-aside-menu"
						background-color="#545c64"
						text-color="#fff"
						active-text-color="#ffd04b">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>导航一</span>
							</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="1-1">选项1</el-menu-item>
								<el-menu-item index="1-2">选项2</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="1-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-4">
								<template slot="title">选项4</template>
								<el-menu-item index="1-4-1">选项1</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="2">
							<i class="el-icon-menu"></i>
							<span slot="title">导航二</span>
						</el-menu-item>
						<el-menu-item index="3" disabled>
							<i class="el-icon-document"></i>
							<span slot="title">导航三</span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">导航四</span>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<el-main class="hx-template-main">
					<transition name="fade" mode="out-in" appear>
						<router-view></router-view>
					</transition>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			};
		}
	};
</script>

<style lang="less">
	.hx-template-container{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		.hx-template-header{
			padding: 0;
			.hx-logo {
				width: 200px;
				height: 100%;
				float: left;
			}
			.login-out-style{
				position: absolute;
				right: 20px;
				top: 0;
				line-height: 60px;
				cursor: pointer;
				color: #ffffff;
				font-size: 14px;
			}
			.login-out-style:hover{
				color: rgb(255, 208, 75);
			}
		}
		.hx-template-aside{
			height: 100%;
			width:200px !important;
			.hx-aside-menu{
				height: 100%;
			}
		}
		.hx-template-main{

		}
	}
</style>