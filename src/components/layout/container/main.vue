<template>
  <div
  :class="'dl-container clearfix' + (moreSpace ? ' more-space' : '')"
  :style="anchor ? 'padding-right: 130px' : ''">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'dlContainer',
    props: {
      anchor: {
        type: Boolean,
        default: false
      },
      moreSpace: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="less">
  .clearfix() {
    zoom: 1;
    &:before,
    &:after {
      content: " ";
      display: table;
    }
    &:after {
      clear: both;
      visibility: hidden;
      font-size: 0;
      height: 0;
    }
  }
  .dl-container{
    padding: 0 130px 30px 15px;
    &.more-space {
      padding-right: 14px;
      padding-left: 18px;
    }
    @media (max-width: 1366px) {
      padding: 0 20px 20px 20px;
    }
    position: relative;
    // 检索布局类
    .retrieval {
      &.criteria {
        .clearfix();
        padding: 10px;
        border: 1px solid #d1dbe5;
        border-radius: 4px;
        background-color: #fff;
        -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
        transition: all .3s cubic-bezier(.645,.045,.355,1);
        &:hover {
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2) !important;
          border-color: transparent;
        }
        .el-form-item{
          margin-bottom: 5px !important;
        }
      }
      &.result {
        margin: 8px 0;
        padding: 20px 10px;
        border-radius: 6px;
        border: 1px solid #dfe6ec;
      }
    }
    .dl-breadcrumb {
      height: 40px;
      line-height: 40px;
    }
  }
</style>