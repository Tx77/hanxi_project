<template>
  <div>
    <slot>
      <p>main scroll client is not find</p>
    </slot>
  </div>
</template>

<script>
/*
 * 同步滚动 A (单一实例)
 * 主滚动视窗，用于定位容器宽高
 * 以及双向绑定滚动状态
*/
export default {
  name: 'SyncScroll',
  props: {
    value: {
      type: Object,
      default: function () {
        return {
          scrollTop: 0,
          scrollLeft: 0
        }
      }
    }
  },
  data () {
    return {
      scrollHeight: 0,
      scrollWidth: 0
    }
  },
  methods: {
    onScroll (event) {
      const target = event.target
      this.$emit('input', {
        scrollTop = target.scrollTop,
        scrollLeft = target.scrollLeft
      })
    }
  },
  mounted () {
    this.scrollHeight = this.$el.scrollHeight
    this.scrollWidth = this.$el.scrollWidth
    this.$el.childNodes[0].onscroll = this.onScroll
  }
}
</script>
