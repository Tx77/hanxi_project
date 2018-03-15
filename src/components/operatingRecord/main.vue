<template>
  <el-table
    border
    style="width: 100%;margin-top: 10px;"
    :data="operatingRecord">

    <el-table-column
      label="操作名称"
      align="center"
      :prop="operationName">
    </el-table-column>

    <el-table-column
      label="操作人"
      align="center"
      :prop="operatorName">
    </el-table-column>

    <el-table-column
      label="时间"
      align="center"
      :prop="operationTime">
      <template slot-scope="scope">
        <span>{{ scope.row.operationTime ? scope.row.operationTime : '' | formatDate }}</span>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
  export default {
    name : 'operatingRecord',
    data () {
      return {

      };
    },
    props : {
      operatingRecord : {
        type : null,
        required : true
      },
      operationName : { // 操作名称
        type : String,
        required : false,
        default () {
          return 'operationName';
        }
      },
      operatorName : { // 操作人
        type : String,
        required : false,
        default () {
          return 'operatorName';
        }
      },
      operationTime : { // 操作时间
        type : [String, Number],
        required : false,
        default () {
          return 'operationTime';
        }
      }
    }
  };
</script>

<style lang="less">

</style>