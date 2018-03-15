<template>
	<remote-select
		v-model="model"
		:associate-data="state.associateData"
		:remote-method="debounce(filterMethod, 1000)"
		:loading="state.loading"
		@changed="change"
		:placeholder="placeholder"
		:disabled = "disabled">
	</remote-select>
</template>

<script>
	import remoteSelect from 'components/remoteSelect';
	import { debounce } from 'lodash';
	export default {
		name : 'departmentSelect',
		components: { remoteSelect },
		props : {
			value: {
				type: String,
				default: ''
			},
			placeholder:  {
				type: String,
				default: ''
			},
			disabled: Boolean
		},
		data () {
			return {
				state: {
					associateData: [],
					loading:false
				},
				model: this.value
			}
		},
		methods : {
			debounce,
			filterMethod (query) {
				if (query) {
					this.state.loading = true;
					let url = '/ic_uc/V1/department/name';
					let bodyParams = {
						departmentName : query,
						pageIndex : 1,
						pageSize : 50
					};
					this.$http({
						method : 'POST',
						url : url,
						data : bodyParams
					}).then((res)=>{
						if (res.data.status === 0) {
							this.state.loading = false;
							if (res.data.data_list) {
								this.state.associateData = res.data.data_list.map(val => ({
									label : `${val.departmentName}`,
									value : val.id
								}));
							} else {
								this.state.associateData = [];
							}
						} else {
							this.state.loading = false
							this.$message.error(res.data.msg);
						}
					}).catch(err => {
						this.state.associateData = [];
						this.state.loading = false;
						this.$message.error('哦，出现了一个错误，请联系管理员');
					});
				} else {
					this.state.associateData = [];
				}
			},
			change (val) {
				this.$emit('input', val);
				this.$emit('changed', val);
			}
		},
		watch: {
			'value': function (val) {
				this.model = val;
			}
		}
	};
</script>

<style lang="less">

</style>