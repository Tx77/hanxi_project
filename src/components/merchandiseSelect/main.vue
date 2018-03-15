<template>
  <el-tooltip effect="dark" :content="state.tooltipContent" placement="top-start" :disabled="model == '' || !tooltip">
    <remote-select
      v-model="model"
      :associate-data="state.associateData"
      :remote-method="debounce(searchMerchandise, 1000)"
      :loading="state.isAssociateing"
      :placeholder="placeholder"
      :disabled="disabled"
      :scope="scope"
      @clear="clear"
      @changed="merchandiseSelectChange">
    </remote-select>
  </el-tooltip>
</template>

<script>
  import remoteSelect from 'components/remoteSelect'
  import { debounce } from 'lodash'
  export default {
    name: 'merchandiseSelect',
    components: { remoteSelect },
    extends: remoteSelect,
    props: {
      value: {
        type: String,
        default: ''
      },
      filterForbidden: {
        type: Boolean,
        default: false
      },
      filterSpecialGoods: {
        type: Boolean,
        default: false
      },
      tooltip: {
        type: Boolean,
        default: false
      }
    },
    data: function() {
      return {
        state: {
          isAssociateing: false,
          associateData: [],
          associateDataCache: [],
          tooltipContent: ''
        }
      }
    },
    methods: {
      debounce,
      searchMerchandise (query) {
        if (query) {
          this.state.isAssociateing = true
          this.$http.post('/ic_mc/V1/goods/search', {
            goods: query,
            filterForbidden: this.filterForbidden,
            filterSpecialGoods: this.filterSpecialGoods,
            pageSize: 50,
            pageIndex: 1
          }).then(({data,ok,statusText}) => {
            if (ok && !data.status) {
              // successful
              this.state.isAssociateing = false
              if (data.data) {
                this.state.associateData = data.data.map(val => ({
                  value: val.goodsId,
                  label: `${val.goodsName}（编号：${val.goodsCode}；规格：${val.goodsSpec}）`,
                  match: val.goodsCode
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
        this.state.tooltipContent = !!val ? `${original.goodsName}（编号：${original.goodsCode}；商品大类：${original.categoryName}）` : ''
      },
			clear () {
      	this.$emit('clear');
			}
    }
  }
</script>
