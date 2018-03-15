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
import remoteSelect from 'components/remoteSelect'
import { debounce } from 'lodash'
  export default {
    name: 'customerSelect',
    components: {remoteSelect },
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder:  {
        type: String,
        default: ''
      },
			customerStatus : {
      	type : String,
				default: '' // 01 -- 启用；02 -- 禁用
			},
			disabled: Boolean
    },
    data: function() {
      return {
        state: {
          associateData: [],
          associateDataCache:[],
          loading:false
        },
        model: this.value
      }
    },
    methods: {
      debounce,
      //关联客户下拉
      filterMethod(query){
         if (query !== '') {
            this.state.loading = true;
            this.$http.post('/ic_crm/V1/customer/list',{customerName:query,orderStatus:'01',customerStatus: this.customerStatus,pageIndex:1,pageSize:50}).then(({data,ok,statusText}) => {
              this.state.loading = false;
              if (ok && !data.status) {
                var resData = data.data_list
                this.state.associateData = resData.map(val => ({
                  label: `${val.customerName}(编号：${val.customerCode}；${!val.customerBriefName? '':'简称：'+val.customerBriefName + '；'}业务员：${val.salesmanName})`,
                  value: val.customerId,
                  match: val.customerCode,
                }))
                this.state.associateDataCache = resData
              }else{
                this.state.associateData = [];
                this.$message({
                  message: data.msg,
                  type: 'warning'
                });
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
        const original = this.state.associateDataCache.find(item => item.customerId == val)
        this.$emit('input', val)
        this.$emit('changed', val, original)
      }
    },
    watch: {
      'value': function (val) {
        this.model = val
      }
    }
  }
</script>