<template>
	<el-dialog
		:close-on-press-escape="false"
		:close-on-click-modal="false"
		:show-close="false"
		title="提示"
		:visible.sync="dialogVisible"
		class="tiny">
		<div class="align-center">
			<transition name="el-fade-in-linear">
				<div class="inline-block" v-show="loading">
					<span class="title-style">正在检索数据</span>
					<div
						class="inline-block loading-style"
						v-loading="loading">
					</div>
				</div>
			</transition>
			<h2 v-show="!loading">{{message}}</h2>
		</div>
		<span slot="footer" class="dialog-footer align-center">
        <el-button size="small" type="primary" @click="hideDialog">确 认</el-button>
      </span>
	</el-dialog>
</template>

<script>
	export default {
		name : 'failMsgDialog',
		props : {
			dialogVisible : {
				type : Boolean,
				default : false
			},
			loading : {
				type : Boolean,
				default : false
			},
			message : {
				type : String,
				default : ""
			}
		},
		data () {
			return {};
		},
		computed : {

		},
		methods : {
			hideDialog () {
				this.$emit("visible-changed", false);
			}
		}
	};
</script>

<style lang="less">
	.inline-block{
		display: inline-block;
	}
	.title-style{
		line-height: 50px;
	}
	.loading-style{
		width:50px;
		height: 20px;
	}
	.align-center{
		text-align: center;
	}

</style>