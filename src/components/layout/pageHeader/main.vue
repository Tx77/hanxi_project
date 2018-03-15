<template>
  <div class="dl-page-header">
    <dl-breadcrumb :item="breadcrumbList"></dl-breadcrumb>
    <h1 v-if="title">{{ title }}</h1>
  </div>
</template>

<script>
import DlBreadcrumb from '../breadcrumb'
export default {
  name: 'DlPageHeader',
  components: { DlBreadcrumb },
  props: {
    title: {
      type: String,
      default: ''
    },
    breadcrumbList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .dl-page-header {
    // .breadcrumb-box {
    //   padding-left: 40px
    // }
  }
</style>
