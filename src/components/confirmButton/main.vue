<template>
  <div class="confirm-button">
    <el-popover
      ref="confirmbutton"
      :placement="placement"
      v-model="show"
      :disabled="_popoverDisabled"
      popper-class="confirm-popover">
      <p style="font-size: 14px" v-if="!!title">
        <i
          class="el-icon-info"
          style="color: #ffbf00">
        </i>
        <span v-text="title"></span>
      </p>
      <div class="confirm-button-context">
        <slot name="context"></slot>
      </div>
      <div class="confirm-button-btn-group">
        <el-button
          size="mini"
          type="text"
          @click="_cancel"
          v-text="cancelText">
        </el-button>
        <el-button
          size="mini"
          type="primary"
          @click="_confirm"
          v-text="okText"
          style="margin-left: 20px">
        </el-button>
      </div>
    </el-popover>

    <el-button
      :type="type"
      :size="size"
      :disabled="disabled"
      @click="_click"
      v-popover:confirmbutton>
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
  export default {
    name: 'confirmButton',
    props: {
      title: {
        type: String,
        default: ''
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      placement: {
        type: String,
        default: 'top'
      },
      type: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      confirmable: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        show: false
      }
    },
    computed: {
      _confirm () {
        return () => {
          this.show = false
          this.$emit('confirmed')
        }
      },
      _cancel () {
        return () => {
          this.$emit('canceled')
          this.show = false
        }
      },
      _popoverDisabled () {
        return this.disabled || !this.confirmable
      }
    },
    methods: {
      _click () {
        if (this.confirmable) {
          return false
        } else {
          this.$emit('confirmed')
        }
      }
    }
  }
</script>

<style lang="less">
  .confirm-button {
    display: inline-block;
    &-context {
      margin: 10px;
    }
    &-btn-group {
      text-align: right;
      margin: 10px 0;
    }
  }
  .confirm-popover {
    padding: 0 10px 10px 10px!important
  }
  .el-button-group .confirm-button {
    float: left;
  }
</style>