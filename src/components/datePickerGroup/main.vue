<template>
  <div class="date-picker-group">
    <div class="start-date-picker">
      <el-date-picker
        style="width: 100%"
        v-model="startDate"
        :type="type"
        :size="size"
        :editable="false"
        :placeholder="placeholder[0]"
        :picker-options="startDateOptions"
        @change="startDateChange"
        :disabled="disabled">
      </el-date-picker>
    </div>

    <span> - </span>

    <div class="end-date-picker">
      <el-date-picker
        style="width: 100%"
        v-model="endDate"
        :type="type"
        :size="size"
        :editable="false"
        :placeholder="placeholder[1]"
        :picker-options="endDateOptions"
        @change="endDateChange"
        :disabled="disabled">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
  const _compare = function (val, start, end) {
    if (start && end) {
      return val > start && val < end
    } else if (start){
      return val > start
    } else if (end){
      return val < end
    } else {
      return false
    }
  }

  const _big = function (val1, val2) {
    if (val1 - val2 >= 0) {
      return val1
    } else {
      return val2
    }
  }

  const _small = function (val1, val2) {
    if (val1 - val2 <= 0) {
      return val1
    } else {
      return val2
    }
  }

  export default {
    name: 'DatePickerGroup',
    props: {
      value: {
        type: Array,
        default () {return [null, null]}
      },
      placeholder: {
        type: Array,
        default () {return ['开始日期', '结束日期']}
      },
      type: {
        type: String,
        default: 'date'
      },
      limit: {
        type: Array,
        default () {return [null, null]}
      },
      size: {
        type: String,
        default: 'small'
      },
      format: {
        type: Function,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data: function() {
      let vm = this
      return {
        startDate: this.value[0],
        endDate: this.value[1],
        startDateOptions: {
          disabledDate (date) {
            if (vm.limit[0] && vm.limit[1]) {
              return !_compare(date.getTime(), vm._limit[0], vm._limit[1])
            } else if (vm.limit[0]) {
              return date.getTime() < vm._limit[0]
            } else if (vm.limit[1]) {
              return date.getTime() > vm._limit[1]
            } else {
              return false
            }
          }
        },
        endDateOptions: {
          disabledDate (date) {
            if (vm.limit[0] && vm.limit[1]) {
              return !_compare(date.getTime(), vm._limit[0], vm._limit[1])
            } else if (vm.limit[0]) {
              return date.getTime() < vm._limit[0]
            } else if (vm.limit[1]) {
              return date.getTime() > vm._limit[1]
            } else {
              return false
            }
          }
        }
      }
    },
    computed: {
      _limit () {
        return this.limit.map(val => new Date(val).getTime())
      }
    },
    methods: {
      startDateChange (startDate) {
        let vm = this
        if (startDate) {
          const _startDate = new Date(startDate).getTime()
          vm.endDateOptions = {
            disabledDate (endDate) {
              const _endDate = new Date(endDate).getTime()
              if (vm.limit[0] && vm.limit[1]) {
                return !_compare(
                  _endDate,
                  _big(vm._limit[0], _startDate),
                  vm._limit[1]
                )
              } else if (vm.limit[0]) {
                return _endDate < _big(vm._limit[0], _startDate)
              } else if (vm.limit[1]) {
                return !_compare(_endDate, _startDate, vm._limit[1])
              } else {
                return _endDate < _startDate
              }
            }
          }
        }else{
          vm.endDateOptions = {
            disabledDate (date) {
              if (vm.limit[0] && vm.limit[1]) {
                return !_compare(date.getTime(), vm._limit[0], vm._limit[1])
              } else if (vm.limit[0]) {
                return date.getTime() < vm._limit[0]
              } else if (vm.limit[1]) {
                return date.getTime() > vm._limit[1]
              } else {
                return false
              }
            }
          }
        }
        this._input()
      },

      endDateChange (endDate) {
        let vm = this
        if (endDate) {
          const _endDate = new Date(endDate).getTime()
          vm.startDateOptions = {
            disabledDate (startDate) {
              const _startDate = new Date(startDate).getTime()
              if (vm.limit[0] && vm.limit[1]) {
                return !_compare(
                  _startDate,
                  vm._limit[0],
                  _small(vm._limit[1], _endDate)
                )
              } else if (vm.limit[0]) {
                return !_compare(_startDate, vm._limit[0], _endDate)
              } else if (vm.limit[1]) {
                return _startDate > _small(vm._limit[1], _endDate)
              } else {
                return _startDate > _endDate
              }
            }
          }
        }else {
          vm.startDateOptions = {
            disabledDate (date) {
              if (vm.limit[0] && vm.limit[1]) {
                return !_compare(date.getTime(), vm._limit[0], vm._limit[1])
              } else if (vm.limit[0]) {
                return date.getTime() < vm._limit[0]
              } else if (vm.limit[1]) {
                return date.getTime() > vm._limit[1]
              } else {
                return false
              }
            }
          }
        }
        this._input()
      },
      _input () {
        if (this.format instanceof Function) {
          const startDate = this.format.call(this, this.startDate)
          const endDate = this.format.call(this, this.endDate)
          this.$emit('input', [startDate || '', endDate || ''])
        } else {
          this.$emit(
            'input',
            [
              new Date(this.startDate).getTime() || '',
              new Date(this.endDate).getTime() || ''
            ]
          )
        }
      }
    },
    watch: {
      'value':function (val) {
        let vm = this
        this.startDate = val[0]
        this.endDate = val[1]
        if (!val[1]) {
          this.startDateOptions = {
            disabledDate (date) {
              if (vm.limit[0] && vm.limit[1]) {
                return !_compare(date.getTime(), vm._limit[0], vm._limit[1])
              } else if (vm.limit[0]) {
                return date.getTime() < vm._limit[0]
              } else if (vm.limit[1]) {
                return date.getTime() > vm._limit[1]
              } else {
                return false
              }
            }
          }
        }
        if (!val[0]) {
          this.endDateOptions = {
            disabledDate (date) {
              if (vm.limit[0] && vm.limit[1]) {
                return !_compare(date.getTime(), vm._limit[0], vm._limit[1])
              } else if (vm.limit[0]) {
                return date.getTime() < vm._limit[0]
              } else if (vm.limit[1]) {
                return date.getTime() > vm._limit[1]
              } else {
                return false
              }
            }
          }
        }
      }
    }
  }
</script>

<style lang="less">
  .date-picker-group {
    display: inline-block;
    width: 100%;
    text-align: center;
    .start-date-picker {
      display: inline-block;
      width: 50% - 2px;
      float: left;
    }
    .end-date-picker {
      display: inline-block;
      width: 50% - 2px;
      float: right;
    }
    .el-input--suffix .el-input__inner {
      padding-right: 0;
    }
  }
</style>