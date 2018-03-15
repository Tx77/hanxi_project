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
    name: 'staffSelect',
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
      isAll:{
        type: Boolean,
        default: false
      },
      disabled: Boolean
    },
    data: function() {
      return {
        state: {
          associateData: [],
          loading:false
        },
        model: this.value
      }
    },
    methods: {
      debounce,
      //关联业务员下拉
      filterMethod(query){
         if (query !== '') {
          var userStatus = this.isAll ? '' : '01'
            this.state.loading = true;
            this.$http.post('/ic_uc/V1/user/list',{userNameOrCode:query,userStatus:userStatus,pageIndex:1,pageSize:50}).then(({data,ok,statusText}) => {
              this.state.loading = false;
              if (ok && !data.status) {
                var resData = data.data_list
                this.state.associateData = resData.map(val => ({
                  label: `${val.userName}(编号：${val.userCode};部门：${val.departmentEntity?val.departmentEntity.departmentName:''})`,
                  value: val.id,
                  match: val.userCode,
                  departmentEntity: val.departmentEntity
                }))
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
        this.$emit('input', val)
        this.$emit('changed', val)
      }
    },
    watch: {
      'value': function (val) {
        this.model = val
      }
    }
  }
</script>