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
            v-if="sideBar"
						class="hx-aside-menu"
						background-color="#545c64"
						text-color="#fff"
						active-text-color="#ffd04b"
            router>
						<el-submenu
              v-for="(item, index) in sideBar"
              :index="item.path"
              :key="item.index">
              <template slot="title">{{item.name}}</template>
              <el-menu-item
                v-for="(val, sort) in item.sub"
                :index="val.path"
                :key="val.index">
                {{val.name}}
              </el-menu-item>
						</el-submenu>
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
                      "resourcesUrl": "/supplySystem/commodityManagement/dishesManagement",
                      "childResourcesEntityList": null
                    },
                    {
                      "id": "067b0edbdb2911e796bb1e1c9256fbfd",
                      "resourcesName": "上菜管理",
                      "resourcesUrl": "/supplySystem/commodityManagement/servingManagement",
                      "childResourcesEntityList": null
                    }
                  ]
                }
              ]
            }
          ],
          menuActive : ''
        },
        sideBarActive : '',
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
      },
      sideBar () {
        let sideBarList = [];
        if (this.state.menu) {
          const menuObj = this.state.menu.find(val => {
            return val.resourcesUrl === this.menuActive;
          });
          if (menuObj !== undefined) {
            sideBarList = menuObj.childResourcesEntityList.map(val => ({
              name : val.resourcesName,
              path : String(val.id),
              sub : val.childResourcesEntityList.map(val => ({
                name : val.resourcesName,
                path : String(val.resourcesUrl)
              }))
            }));
          }
        }
        return sideBarList;
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