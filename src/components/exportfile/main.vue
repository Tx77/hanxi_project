<template>
  <div class="export-btn">
    <el-button :type="type" @click="requestfile" :size="size" :disabled="disabled">{{text}}</el-button>
    <el-dialog
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :show-close="false"
      class="tiny clearfix">
      <i class="el-icon-loading"></i>
      <span>正在导出中...</span>
      <el-button :type="type" @click="stopCheck" style="padding: 0;margin-left: 3em;">取 消</el-button>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'exportfile',
  props: {
    conditions: {
        type: Object
    },
    method: {
        type: Function
    },
    params: {
        type: Object
    },
    isformatdate: { //是否需要添加当前日期
        type: Boolean,
        default: false
    },
    iscompany: { //是否需要添加当前企业
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        default: "导出"
    },
    type: {
        type: String
    },
    size: {
        type: String,
        default: "medium"
    },
    disabled: {
        type: Boolean,
        default: false
    }
  },
  data() {
    var data = {
        exportId: undefined, //后台生成的导出id
        waitIndex: 0,
        stop: false,
        myconditions: this.conditions,
        dialogVisible:false
    }
    return data;
  },
  methods: {
    //请求导出文件
    requestfile() {
      var that = this;
      // var type = this.exporttype;
      // 使用 exportTypes 数组下标来定位导出类型
      if (!this.params.fileName || !this.params.generateFile) {
        // if(!this.exportTypes[type]){
        // layer.msg('导出类型不存在!', function() {});
        that.$message.error('导出类型不存在!')
        return;
      }
      var url = '/ic_data/downLoad/generateFile.html';
      // var taskType = this.exportTypes[type];
      var param = {
        userId: '45679835156',
        userName:'zqy',
        fileName: that.params.fileName,
        generateFile: that.params.generateFile
      }

      //需要添加当前时间的导出文件名处理名
      if (that.isformatdate) {
        param.fileName = this.formatDate() +'-'+ param.fileName ;
      }
       //需要添加当前时间的导出文件名处理名
      if (that.iscompany) {
        param.fileName = param.fileName +'-'+ this.$user.info.companyName;
      }
      this.myconditions = this.conditions;
      this.myconditions = Object.assign({}, this.myconditions, param)
      this.dialogVisible = true
      var reqData = JSON.parse(JSON.stringify(this.myconditions));
      this.$http.post(url, reqData).then(({data,ok,statusText}) => {
        if (ok && !data.status) {
          that.exportId = data.data.id;
          that.startCheck();
        }else{
          that.stopCheck()
          that.$message.error('哦，出现了一个错误，请联系管理员')
        }
      })
    },
      //取消
      cancel() {
        var that = this;
        var url = "/ic_data/downLoad/cancelDownLoadFile.html";
        var reqData = {
          id: this.exportId
        }
        this.stopCheck()

        this.$http.get(url, reqData).then(({ data, ok, statusText }) => {
          if (ok && !data.status) {
            that.stopCheck();
            // layer.close(that.waitIndex);
            that.$message({
              message: '取消成功!',
              type: 'success'
            })
            that.exportId = undefined;
          }else{
            that.stopCheck()
            that.$message.error('哦，出现了一个错误，请联系管理员')
          }
        })
      },
      stopCheck() {
        this.dialogVisible = false
        this.stop = true;
      },
      // 轮询查看服务器是否完成导出
      startCheck() {
        var that = this;
        var done = false;
        var error = false;
        var exportId = this.exportId;
        that.stop = false;
        _check();

        function _check() {
          if (!that.stop && !done && !error && exportId) {
            var url = '/ic_data/downLoad/checkFile.html';
            var reqData = {
                id: exportId
            };
            that.$http.get(url, reqData).then(({data, ok, statusText}) => {
              if (data.status == 0) {
                that.stopCheck();
                // 导出成功
                that.$message({
                  message: data.msg,
                  type: 'success'
                })
                done = true;
                that.download();
              }else if(data.status === 1 && !that.stop){
                setTimeout(_check, 2e3);
              }else if(data.status && data.status !== 1){
                that.stopCheck()
                that.$message.error(data.msg)
              }
              // if (data.status === 1 && !that.stop) {
              //     setTimeout(_check, 2e3);
              //     return;
              // }
              // //-1表示文件生成异常
              // if (data.status === -1) {
              //     that.$message.error('生成文件异常！')
              //     return;
              // }

              // //2表示文件生成异常
              // if (data.status === 2) {
              //     that.$message.error('文件已清除请重新导出!')
              //     return;
              // }
              // 不是 0  又不是1 则程序异常
              // error = true;
              // that.$message.error('哦，出现了一个错误，请联系管理员')
            })
          }
        }
      },
      // 下载文件
      download() {
        window.open("/api/ic_data/downLoad/down.html?id=" + this.exportId);
        this.exportId = undefined;
      },
      //格式化当前时间
      formatDate() {
        var time = new Date();
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();

        function add0(m) {
          return m < 10 ? '0' + m : m
        }
        return y +'/'+ add0(m) +'/'+ add0(d);
    }
  }
}
</script>

<style lang="less">
  .export-btn {
    display: inline-block;

    .el-dialog__header {
      padding: 0
    }

    .el-dialog__body {
      padding: 15px 20px
    }
    .el-dialog{
      width: 250px;
      min-width: 250px !important;
    }


  }
</style>