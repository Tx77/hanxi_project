<template>
  <el-breadcrumb class="dl-breadcrumb" separator="/">
    <el-breadcrumb-item
      v-for="(i, index) in item"
      :to="i[1] ? {name: i[1]} : ''"
      :key="i[1] + index">{{ i[0] }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'dlBreadcrumb',
  props: {
    item: {
      type: Array,
      required: true,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
  .dl-breadcrumb {
    height: 40px;
    line-height: 40px;
  }
</style>