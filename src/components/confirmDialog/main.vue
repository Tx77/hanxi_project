<template>
  <el-button
    type="text"
    size="small"
    :disabled="disabled"
    @click="openDialog">
    {{confirmOperate}}
  </el-button>
</template>

<script>
  export default {
    name: 'confirmDialog',
    props: {
      confirmOperate: {
        type: String,
        default: ''
      },
      disabled:{
        type:Boolean,
        default:false
      }
    },
     methods:{
      openDialog(){
        this.$confirm('确认'+this.confirmOperate+'？',{
          title:' ',
          type: 'warning'
        })
          .then(_ => {
            this.$emit('confirmed', true)
          })
          .catch(_ => {})
      }
    },
  }
</script>