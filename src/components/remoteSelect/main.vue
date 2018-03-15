<template>
  <el-select
    v-model="model"
    :placeholder="placeholder"
    :filter-method="remoteMethod"
    @visible-change="visibleChange"
    @change="change"
    @clear="clear"
    :size="size"
    :loading="loading"
    :disabled="disabled"
    filterable
    clearable>
    <el-option
      v-for="item in associateData"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    name: 'remoteSelect',
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: String,
      associateData: {
        type: Array,
        default: function() {
          return []
        }
      },
      remoteMethod: {
        type: Function,
        default: function (query, success) {
          if (query) {
            this.associateData = []
          }
        }
      },
      size: {
        type: String,
        default: 'small'
      },
      loading: Boolean,
      disabled: Boolean,
      scope : {
        type : null,
        default : undefined
      }
    },
    data: function() {
      return {
        state: {
          isAssociateing: false,
          matchList: []
        },
        model: this.value
      }
    },
    methods: {
      visibleChange (val) {
        if (val) {
          const selectedValue = this.state.matchList.find(val => {
            return val.value == this.model
          })
          if (selectedValue !== undefined) {
            this.remoteMethod(selectedValue.match)
          }
        }
      },
      change (val) {
        this.state.matchList = this.associateData
        this.$emit('input', val)
        this.$emit('changed', val, this.scope)
      },
			clear () {
      	this.$emit('clear');
      }
    },
    watch: {
      'value': function (val) {
        this.model = val
      }
    }
  }
</script>