<template>
  <div class="home-container">
		<div class="hx-breadcrumb">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>活动管理</el-breadcrumb-item>
				<el-breadcrumb-item>活动列表</el-breadcrumb-item>
				<el-breadcrumb-item>活动详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
    <div class="hx-form-container">
			<el-form
				:model="listParams"
				ref="homeForm"
				label-width="100px">
				<el-row :gutter="24">
					<el-col :span="8">
						<el-form-item label="用户名：">
							<el-input size="small"></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="8">
						<el-form-item label="用户名：">
							<el-input size="small"></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="8">
						<el-form-item label="用户名：">
							<el-input size="small"></el-input>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="24">
					<el-col :span="8">
						<el-form-item label="用户名：">
							<el-input size="small"></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="8">
						<el-form-item label="用户名：">
							<el-input size="small"></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="8">
						<el-form-item label="用户名：">
							<el-input size="small"></el-input>
						</el-form-item>
					</el-col>
				</el-row>

				<el-form-item class="align-center" style="margin-bottom: 0;">
					<el-button size="small" type="primary">搜 索</el-button>
					<el-button size="small">重 置</el-button>
				</el-form-item>
			</el-form>
		</div>
		<hx-table-result
			:page-info="pager"
			:loading="tableLoading"
			@page-current-change="handleCurrentChange"
			@page-size-change="handleSizeChange">

			<div slot="action"></div>

			<hx-table-result-col>
				<p class="align-right mgb10">
					<span>总条数：</span>
					<span class="alert-text ft16">{{ pager.total }}</span>
				</p>
			</hx-table-result-col>

			<el-table
				slot="content"
				:data="tableData"
				max-height="800"
				border>
				<el-table-column
					align="center"
					label="序号"
					width="80">
					<template slot-scope="scope">
	          <span>
	            {{ scope.$index +1 + (pager.pageIndex -1)*pager.pageSize}}
	          </span>
					</template>
				</el-table-column>

				<el-table-column
					align="center"
					label="哈哈哈">
				</el-table-column>

				<el-table-column
					align="center"
					label="哈哈哈">
				</el-table-column>

				<el-table-column
					align="center"
					label="哈哈哈">
				</el-table-column>
			</el-table>
		</hx-table-result>
  </div>
</template>

<script>
	export default {
		data () {
			return {
				listParams : {},
				tableLoading : false,
				tableData : [],
				pager : {
					pageIndex : 1,
					pageSize : 15,
					total : 0
				}
			};
		},
		methods : {
			/**
			 * pageIndex的change事件
			 * @param val
			 */
			handleCurrentChange (val) {
				this.pager.pageIndex = val;
			},
			/**
			 * pageSize的change事件
			 * @param val
			 */
			handleSizeChange (val) {
				this.pager.pageSize = val;
			},
		}
	};
</script>

<style lang="less">
  .home-container{
		.alert-text{
			color: #E9A021;
			cursor: default;
		}
	}
</style>