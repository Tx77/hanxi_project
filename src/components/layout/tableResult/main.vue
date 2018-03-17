<template>
  <div class="hx-table-result" v-loading.body="loading">
    <div class="action clearfix spacing-md">
      <slot name="action"></slot>
    </div>

    <slot></slot>

    <div class="content clearfix spacing-md">
      <slot name="content"></slot>
    </div>

    <div class="footer clearfix spacing-md">
      <el-row type="flex" justify="end">
        <el-col :span="16">
          <slot name="extraAction"></slot>
        </el-col>
        <el-col :span="8">
          <el-pagination
            v-if="showPagerOnOnePage || Number(pageInfo.total)"
            @size-change="pageSizeChange"
            @current-change="pageCurrentChange"
            :current-Page="pageInfo.pageIndex"
            :page-size="pageInfo.pageSize"
            :total="pageInfo.total"
            :layout="(pageTotal ? 'total,' : '') + 'sizes,prev,pager,next,jumper'"
            :page-sizes="pageSizes"
            class="fr mgt10">
          </el-pagination>
        </el-col>
      </el-row>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HxTableResult',
    props: {
      loading: {
        type: Boolean,
        default: false,
        required: true
      },
      pageInfo: {
        type: Object,
        default () {
          return {
            pageIndex: 1,
            pageSize: 15,
            total: 0
          }
        }
      },
      pageSizes: {
        type: Array,
        default () {
          return [15, 30, 50]
        }
      },
      pageTotal: {
        type: Boolean,
        default: false
      },
      showPagerOnOnePage: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      pageCurrentChange (...arg) {
        this.$emit('page-current-change', ...arg)
      },
      pageSizeChange (...arg) {
        this.$emit('page-size-change', ...arg)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
