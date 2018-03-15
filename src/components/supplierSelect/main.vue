<template>
  <remote-select
    v-model="model"
    :associate-data="state.associateData"
    :remote-method="debounce(searchMerchandise, 1000)"
    :loading="state.isAssociateing"
    :placeholder="placeholder"
    :disabled="disabled"
    :scope="scope"
    @changed="merchandiseSelectChange">
  </remote-select>
</template>

<script>
  import remoteSelect from 'components/remoteSelect'
  import { debounce } from 'lodash'
  export default {
    name: 'supplierSelect',
    components: { remoteSelect },
    extends: remoteSelect,
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data: function() {
      return {
        state: {
          isAssociateing: false,
          associateData: [],
          associateDataCache: []
        }
      }
    },
    methods: {
      debounce,
      searchMerchandise (query) {
        if (query) {
          this.state.isAssociateing = true
          this.$http.post('/ic_crm/V1/provider/associativeList', {
            providerNameOrCode: query,
            pageSize: 50,
            pageIndex: 1
          }).then(({data,ok,statusText}) => {
            if (ok && !data.status) {
              // successful
              this.state.isAssociateing = false
              if (data.data) {
                this.state.associateData = data.data.map(val => ({
                  value: val.id,
                  label: `${val.providerCode} - ${val.providerName}`,
                  match: val.providerCode
                }))
                this.state.associateDataCache = data.data
              } else {
                this.state.associateData = []
              }
            }else{
              // warning
              this.$message({
                message: data.msg,
                type: 'warning'
              })
            }
          }).catch(err => {
            // error
            this.$message.error('哦，出现了一个错误，请联系管理员');
            console.error(err)
          });
        } else {
          this.state.associateData = []
        }
      },
      merchandiseSelectChange (val, scope) {
        const original = this.state.associateDataCache.find(item => item.goodsId == val)
        this.$emit('input', val)
        this.$emit('changed', val, original, scope)
      }
    }
  }
</script>
