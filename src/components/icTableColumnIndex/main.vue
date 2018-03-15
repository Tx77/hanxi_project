<template>
  <el-table-column
    label="序号"
    width="65"
    align="center">
    <template slot-scope="scope">
      <span v-text="(pageIndex > 1 ? (pageIndex-1) * pageSize : 0) + scope.$index + 1"></span>
    </template>
  </el-table-column>
</template>

<script>
  export default {
    name: 'icTableColumnIndex',
    props: {
      pageIndex: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 15
      }
    }
  }
</script>
