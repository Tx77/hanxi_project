<template>
  <div class="sync-scroll-outside" @scroll="sync">
    <div style="height:1000px;width:1000px"></div>
  </div>
</template>

<script>
export default {
  name: 'SyncScroll',
  props: {
    content: {
      type: ,
      required: true,
      default: null
    }
  }
  data () {
    return {

    }
  },
  methods: {
    sync () {

    },
    getScrollbarWidth () {
      let oP = document.createElement('p')
      const styles = {width: '100px',height: '100px',overflowY: 'scroll'}
      for (let i in styles) oP.style[i] = styles[i];
      document.body.appendChild(oP)
      const scrollbarWidth = oP.offsetWidth - oP.clientWidth
      oP.remove()
      return scrollbarWidth
    }
  }
};
</script>

<style lang="less" scoped>
  .sync-scroll-outside {

  }
</style>