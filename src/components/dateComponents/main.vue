<template>
	<div class="is-inline" v-show="isDatePicker">
		<el-form-item
			:prop="startProp"
			:label="labelName"
			class="form-item-style"
			:style="{marginRight: '0'}">
			<el-date-picker
				:type="dateType"
				:placeholder="hintMessage"
				:picker-options="startTimeOptions"
				:editable="false"
				@input="changeStartDate"
				v-model="newStartDate"
				:size="newDateSize"
				:style="{width:newDateWidth}">
			</el-date-picker>
		</el-form-item>

		<span class="is-division-line" v-show="isDivision"> - </span>

		<el-form-item :prop="endProp" label-width="0" v-show="isEndDate" class="form-item-style">
			<el-date-picker
				:type="dateType"
				placeholder="结束日期"
				:picker-options="endTimeOptions"
				:editable="false"
				@input="changeEndDate"
				v-model="newEndDate"
				:size="newDateSize"
				:style="{width:newDateWidth}">
			</el-date-picker>
		</el-form-item>
	</div>
</template>

<script>
	export default {
		name : 'dateComponents',
		data () {
			return {
				startTimeOptions : {
					disabledDate (time) {
//            return time && time.valueOf() > Date.now();
						return false;
					}

				},
				endTimeOptions : {
					disabledDate (time) {
//            return time && time.valueOf() > Date.now();
						return false;
					}
				},
				newStartDate : this.startDate, // 子组件设置一个开始时间的副本
				newEndDate : this.endDate, // 子组件设置一个结束时间的副本
				isDatePicker : true, // 是否显示整个时间选择器
				hintMessage : '', // placeholder提示文字
				isDivision : false, // 是否显示分割线
				isEndDate : false, // 是否显示结束时间的选择器
				newDateSize : this.dateSize, // 子组件设置一个时间选择器尺寸的副本
				newDateWidth : this.dateWidth // 子组件设置一个时间选择器组件宽度的副本
			};
		},
		props : {
			startProp : { // 开始时间的prop
				type : String,
				required : false
			},
			endProp : { // 结束时间的prop
				type : String,
				required : false
			},
			startDate : { // 接收父组件传递的开始时间model
				type : [String, Number],
				required : false
			},
			endDate : { // 接收父组件传递的结束时间model
				type : [String, Number],
				required : false
			},
			dateType : { // 时间选择器的类型
				type : String,
				required : false
			},
			showType : { // 时间选择器的显示状态
				type : String,
				required : false
			},
			labelName : { // el-form-item的label名称
				type : String,
				required : false
			},
			dateSize : { // 时间选择器组件尺寸
				type : String ,
				required : false
			},
			dateWidth : { // 时间选择器组件宽度
				type : String,
				required : false
			}
		},
		mounted () {
			this.initShowType();
			this.initDateSize();
			this.initDateWidth();
		},
		methods : {
			// 初始化时间选择器的显示状态
			initShowType () {
				let showType = this.showType;
				switch (showType) {
					case '' :
						this.hintMessage = '开始日期';
						this.isDivision = true;
						this.isEndDate = true;
						break;
					case 'both' :
						this.hintMessage = '开始日期';
						this.isDivision = true;
						this.isEndDate = true;
						break;
					case 'left' :
						this.hintMessage = '开始日期';
						break;
					case 'right' :
						this.hintMessage = '结束日期';
						break;
					default :
						this.isDatePicker = false;
				}
			},
			// 初始化时间选择器尺寸
			initDateSize () {
				let size = this.dateSize;
				if (size === undefined) {
					this.newDateSize = 'small';
				} else {
					this.newDateSize = size;
				}
			},
			// 初始化时间选择器组件宽度
			initDateWidth () {
				let dateWidth = this.dateWidth;
				if (dateWidth === undefined) {
					this.newDateWidth = '200px';
				} else {
					if (dateWidth.indexOf('px') > -1) {
						this.newDateWidth = dateWidth;
					} else {
						this.newDateWidth = dateWidth + 'px';
					}
				}
			},
			// 开始时间的change事件
			changeStartDate (value) {
				if (value) {
					let startDate = new Date(value);
					this.endTimeOptions = {
						disabledDate (time) {
							return time.getTime() < startDate;
						}
					};
					this.newStartDate = value;
				} else {
					this.newStartDate = '';
					this.endTimeOptions = {
						disabledDate () {
							return false;
						}
					};
					if (this.endDate) {
						this.endTimeOptions = {
							disabledDate () {
								return false;
							}
						};
					} else {
						this.startTimeOptions = {
							disabledDate () {
								return false;
							}
						};
					}
				}

			},
			// 结束时间的change事件
			changeEndDate (value) {
				let endDate = new Date(value);
				if (value) {
					this.startTimeOptions = {
						disabledDate (time) {
							return time.getTime() > endDate;
						}
					};
					this.newEndDate = value;
				} else {
					this.newEndDate = '';
					this.startTimeOptions = {
						disabledDate () {
							return false;
						}
					};
					if (this.startDate) {
						let startDate = this.startDate;
						this.endTimeOptions = {
							disabledDate (time) {
								return time.getTime() < startDate;
							}
						};
					} else {
						this.startTimeOptions = {
							disabledDate () {
								return false;
							}
						};
					}
				}
			}
		},
		watch : {
			// 监听开始时间的值
			startDate (val, oldVal) {
				this.newStartDate = val;
			},
			// 监听开始时间副本的值
			newStartDate (val, oldVal) {
				// 修改props后传递值给父组件
				this.$emit('set-start-date', this.startProp, val);
			},
			// 监听结束时间的值
			endDate (val, oldVal) {
				this.newEndDate = val;
			},
			// 监听结束时间副本的值
			newEndDate (val, oldVal) {
				// 修改props后传递值给父组件
				this.$emit('set-end-date', this.endProp, val);
			}
		}
	};
</script>

<style lang="less">
	.is-inline{
		display: inline-block;
		.form-item-style{
			display: inline-block;
		}
	}
	.is-division-line{
		line-height: 33px;
		vertical-align: top;
	}
</style>