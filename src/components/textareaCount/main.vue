<template>
  <div>
    <el-input
      v-model="model"
      type="textarea"
      :maxlength="state.maxlength"
      :placeholder="placeholder"
      :autosize="{ minRows: 2}"
      @change="changed">
    </el-input>
    <div class="text-r">
      <span
        v-text="state.maxlength - model.length"
        :style="'color:' + (state.maxlength - model.length <= state.warnlength ? 'red' : '#666')">
      </span>
      <span> / {{state.maxlength}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textareaCount',
    props: {
      value: {
        type: String,
        default: ''
      },
      maxlength: {
        type: Number,
        default: 100,
        validator: function (value) {
          return /^\+?[1-9][0-9]*$/.test(value)
        }
      },
      warnlength: {
        type: Number,
        default: 5,
        validator: function (value) {
          return /^\+?[1-9][0-9]*$/.test(value)
        }
      },
      placeholder:{
        type: String,
        default: ''
      },
      size:{
        type: String,
        default: 'small'
      },
    },
    data () {
      return {
        model:this.value,
        state:{
          maxlength:this.maxlength,
          warnlength:5
        }
      }
    },
    methods: {
      changed(val) {
        this.$emit('input', val)
        this.$emit('changed', val)
      }
    },
    watch: {
      'value': function (val) {
        this.model = val
      }
    },
    created () {
      this.state.warnlength = this.warnlength > this.maxlength ? this.maxlength:this.warnlength
    }
  }
</script>