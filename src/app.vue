<template>
	<div>
		<!--Container-->
		<el-container class="hx-template-container">
			<!--Header-->
			<el-header class="hx-template-header">
				<div class="hx-logo"></div>
				<div style="float: right; width: calc(100% - 200px);position: relative;">
					<!--Header Menu-->
					<el-menu
            :default-active="state.menuActive"
            @select="select"
						mode="horizontal"
						background-color="#545c64"
						text-color="#fff"
						active-text-color="#ffd04b"
            router>
            <el-menu-item
              v-for="item in menu"
              :index="item.path"
              :key="item.path"
              v-text="item.name">
            </el-menu-item>
						<!--<el-menu-item index="1" @click="linkToSupplyCenterPage">供应中心</el-menu-item>-->
						<!--<el-menu-item index="2" @click="linkToBarracksSysPage">营房系统</el-menu-item>-->
						<!--<el-menu-item index="3" @click="linkToStadiumSysPage">场馆系统</el-menu-item>-->
						<!--<el-menu-item index="4" @click="linkToPlatformAccountSysPage">平台账户系统</el-menu-item>-->
						<!--<el-menu-item index="5">平台广告</el-menu-item>-->
						<!--<el-menu-item index="6">消息系统</el-menu-item>-->
					</el-menu>
					<div class="hx-template-header-right">
						<p class="hx-account align-center">田鑫鑫</p>
						<div class="login-out-style" @click="dialogVisible = true;">
							<i class="el-icon-back"></i>
							<span>退出登录</span>
						</div>
					</div>
				</div>
			</el-header>

			<!--Container children-->
			<el-container style="height: 100%;">
				<!--Aside-->
				<el-aside class="hx-template-aside">
					<!--Aside Menu-->
					<el-menu
						class="hx-aside-menu"
						background-color="#545c64"
						text-color="#fff"
						active-text-color="#ffd04b">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>商品管理</span>
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

				<!--Main-->
				<el-main class="hx-template-main">
					<transition name="fade" mode="out-in" appear>
						<!--Router View-->
						<router-view></router-view>
					</transition>
				</el-main>

			</el-container>
			<!--<el-footer class="hx-template-footer">-->
			<!--</el-footer>-->
		</el-container>

		<el-dialog
			class="hx-login-out-template"
			title="提示"
			:visible.sync="dialogVisible"
			width="30%"
			:close-on-click-modal="false"
			:close-on-press-escape="false">
			<h3 class="align-center">确认退出服务加？</h3>
			<span slot="footer" class="dialog-footer">
				<el-button
					size="small"
					type="primary"
					@click="linkToLoginPage">
					确 定
				</el-button>
				<el-button
					size="small"
					@click="dialogVisible = false;">
					取 消
				</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			  state : {
			    menu : [
            {
              "id": "fad2a5ba847e11e79b871e1c9256fbfd",
              "resourcesName": "供应系统",
              "resourcesUrl": "/supplySystem",
              "childResourcesEntityList": [
                {
                  "id": "69fea665847f11e79b871e1c9256fbfd",
                  "resourcesName": "商品管理",
                  "resourcesUrl": null,
                  "childResourcesEntityList": [
                    {
                      "id": "c0ae58f1847f11e79b871e1c9256fbfd",
                      "resourcesName": "分类管理",
                      "resourcesUrl": "/supplySystem/commodityManagement/classifyManagement",
                      "childResourcesEntityList": null
                    },
                    {
                      "id": "c0ae5b02847f11e79b871e1c9256fbfd",
                      "resourcesName": "领货日期",
                      "resourcesUrl": "/supplySystem/commodityManagement/deliveryTakenDate",
                      "childResourcesEntityList": null
                    },
                    {
                      "id": "c0ae5b74847f11e79b871e1c9256fbfd",
                      "resourcesName": "菜品管理",
                      "resourcesUrl": "/supplySystem/commodityManagement/classifyManagement",
                      "childResourcesEntityList": null
                    },
                    {
                      "id": "067b0edbdb2911e796bb1e1c9256fbfd",
                      "resourcesName": "上菜管理",
                      "resourcesUrl": "/supplySystem/commodityManagement/classifyManagement",
                      "childResourcesEntityList": null
                    }
                  ]
                }
              ]
            },
            {
              "id":"a912a442a28b11e796bb1e1c9256fbfd",
              "resourcesName":"库存",
              "resourcesUrl":"/about",
              "childResourcesEntityList":[
                {
                  "id":"84e7c71aa28c11e796bb1e1c9256fbfd",
                  "resourcesName":"库存管理",
                  "resourcesUrl":"/stock/management",
                  "childResourcesEntityList":[
                    {
                      "id":"bfdfecdba28d11e796bb1e1c9256fbfd",
                      "resourcesName":"入库管理",
                      "resourcesUrl":"/stock/management/warehouse-warrant",
                      "childResourcesEntityList":null
                    },
                    {
                      "id":"bfdfeef7a28d11e796bb1e1c9256fbfd",
                      "resourcesName":"出库管理",
                      "resourcesUrl":"/stock/management/outbound-warrant",
                      "childResourcesEntityList":null
                    },
                    {
                      "id":"bfdfef54a28d11e796bb1e1c9256fbfd",
                      "resourcesName":"销售单发货",
                      "resourcesUrl":"/stock/management/sales-order-delivery",
                      "childResourcesEntityList":null
                    },
                    {
                      "id":"bfdfef95a28d11e796bb1e1c9256fbfd",
                      "resourcesName":"结算联签收",
                      "resourcesUrl":"/stock/management/billing-sign-up",
                      "childResourcesEntityList":null
                    },
                    {
                      "id":"bfdfeffda28d11e796bb1e1c9256fbfd",
                      "resourcesName":"货品调整",
                      "resourcesUrl":"/stock/management/adjust-goods",
                      "childResourcesEntityList":null
                    }
                  ]
                },
                {
                  "id":"84e7ca4fa28c11e796bb1e1c9256fbfd",
                  "resourcesName":"借支单管理",
                  "resourcesUrl":"/stock/borrow-order",
                  "childResourcesEntityList":[
                    {
                      "id":"bfdff03ca28d11e796bb1e1c9256fbfd",
                      "resourcesName":"借支单管理",
                      "resourcesUrl":"/stock/borrow-order/list",
                      "childResourcesEntityList":null
                    },
                    {
                      "id":"bfdff077a28d11e796bb1e1c9256fbfd",
                      "resourcesName":"新增借支单",
                      "resourcesUrl":"/stock/borrow-order/add",
                      "childResourcesEntityList":null
                    },
                    {
                      "id":"95ec477dca9b11e796bb1e1c9256fbfd",
                      "resourcesName":"借支统计",
                      "resourcesUrl":"/stock/borrow-order/statistical",
                      "childResourcesEntityList":null
                    }
                  ]
                },
                {
                  "id":"84e7ca90a28c11e796bb1e1c9256fbfd",
                  "resourcesName":"期末关账",
                  "resourcesUrl":"/stock/close-the-bill",
                  "childResourcesEntityList":[
                    {
                      "id":"bfdff0e8a28d11e796bb1e1c9256fbfd",
                      "resourcesName":"期末关账",
                      "resourcesUrl":"/stock/close-the-bill/list",
                      "childResourcesEntityList":null
                    }
                  ]
                }
              ]
            }
          ],
          menuActive : ''
        },
				dialogVisible : false
			};
		},
    computed : {
		  menu () {
        return this.state.menu.map(val => ({
          name : val.resourcesName,
          path : val.resourcesUrl
        }));
      },
      menuActive () {
		    return '/' + this.$route.fullPath.split('/')[1];
      }
    },
		methods : {
      /**
       * 菜单激活回调
       * @param val
       */
      select (val) {

      },
			linkToLoginPage () {
				this.$router.push({
					name : 'login'
				});
			},
      // 进入供应中心路由
      linkToSupplyCenterPage () {
				this.$router.push({
					name : 'about'
				});
			},
      // 进入营房系统路由
      linkToBarracksSysPage () {

      },
      // 进入场馆系统路由
      linkToStadiumSysPage () {

      },
      // 进入平台账户路由
      linkToPlatformAccountSysPage () {

      },
		},
    created () {
		  this.state.menuActive = '/' + this.$route.fullPath.split('/')[1];
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
			.hx-template-header-right{
				position: absolute;
				right: 20px;
				top: 0;
				line-height: 60px;
				cursor: pointer;
				color: #ffffff;
				font-size: 14px;
				display: flex;
				.hx-account{
					margin-right: 10px;
					color: rgb(255, 208, 75);
					width: 100px;
					overflow: hidden;
					-ms-text-overflow: ellipsis;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.login-out-style:hover{
					color: rgb(255, 208, 75);
				}
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
		.hx-template-footer{

		}
	}
	.hx-login-out-template{
		.el-dialog__footer{
			text-align: center;
		}
	}
</style>