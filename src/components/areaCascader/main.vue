<template>
  <el-cascader
    class="area-cascader"
    :options="province"
    :value="state.value"
    :props="props"
    :size="size"
    :disabled="disabled"
    :clearable="clearable"
    :placeholder="placeholder"
    @active-item-change="handleItemChange"
    @change="change">
  </el-cascader>
</template>

<script>
  export default {
    name: 'areaCascader',
    props: {
      size: {
        type: String,
        default: 'small'
      },
      value: Array,
      disabled: Boolean,
      clearable: Boolean,
      placeholder: String
    },
    data () {
      return {
        state: {
          value: []
        },
        province: [],
        props: {
          label: 'areaName',
          value: 'areaCode',
          children: 'children'
        }
      }
    },
    methods: {
      /**
       * 父级选项发生变化
       * @param  {String}   valI     选项的值
       * @param  {Function} callback 程序底部执行回调
       */
      handleItemChange (valI, callback) {

        this.getArea(valI[valI.length-1], val => {
          const areaLevel = val[0].areaLevel
          switch (areaLevel) {
            case 2 :
              const index = this.province.findIndex(val => val.areaCode == valI[0])
              console.log(index)
              this.province[index].children = val
              break
            case 3 :
              const province = this.province.findIndex(val => val.areaCode == valI[0])
              const city = this.province[province].children.findIndex(val => val.areaCode == valI[1])
              this.province[province].children[city].children = val
              break
            default :
              break
          }
          if (typeof callback === 'function') {
            callback.call(this)
          }
        })
      },
      /**
       * 获取对应区域码的子区域列表
       * @param  {String}   areaCode 地域码
       * @param  {Function} callback 请求成功后的回调
       */
      getArea (areaCode, callback) {
        this.$http.get('/ic_public/area/', {
          area_parent_code: areaCode
        }).then(({data,ok,statusText}) => {
          if (ok && !data.status) {
            callback.call(this, (data.data.map(val => {
              // 不是区县则注入 children
              if (val.areaLevel !== 3) {
                val = Object.assign({
                  children: []
                }, val)
              }
              return val
            })))
          }else{
            this.$message({
              message: data.msg,
              type: 'warning'
            });
          }
        }).catch(err => {
          // error
          this.$message.error('哦，出现了一个错误，请联系管理员');
          console.error(err)
        });
      },
      change (val) {
        this.$emit('changed', val)
      }
    },
    created () {
      this.getArea('CHN', val => {
        this.province = val
        if (this.value !== undefined) {
          const value = Object.assign([], this.value)
          value.pop()
          this.handleItemChange([value[0]], () => {
            this.handleItemChange(value, () => {
              this.state.value = this.value
            })
          })
        }
      })
    }
  }
</script>