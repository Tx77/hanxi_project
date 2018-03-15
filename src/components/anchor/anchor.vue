<template>
  <div
    class="dl-anchor degress"
    :style="style">
    <div class="dl-anchor-ink">
      <span
        class="dl-anchor-ink-ball"
        v-show="showInkIn">
      </span>
    </div>
    <slot></slot>
  </div>
</template>










<script>
  export default {
    name: 'anchor',
    props: {
      // 距离窗口顶部达到指定偏移量后触发
      offsetTop: {
        type: Number,
        default: 0,
        validator: function(val) {
          return val >= 0
        }
      },
      // 距离窗口底部达到指定偏移量后触发
      offsetBottom: {
        type: Number,
        default: 0
      },
      // 锚点区域边界
      bounds: {
        type: Number,
        default: 5
      },
      // 是否显示小点
      showInkIn: {
        type: Boolean,
        default: false
      }
    },
    /**********
    
    
    
    
    
    
    
    
    
    
    **********/
    data: function() {
      return {
        position: 'fixed',
        oldTop: 0,
        oldLeft: 0,

        top: 0,
        left: 0,

        screenTop: 0,
        pinTop: 0,

        style: ''
      }
    },
    /**********
    
    
    
    
    
    
    
    
    
    
    **********/
    methods: {
      /*
       * positioning
      */
      positioning() {
        let screenY = this.$el.getBoundingClientRect().top;
        let scrollY = window.pageYOffset;

        if (screenY+scrollY > screenY && scrollY >= this.pinTop) {
          this.oldLeft = this.$el.getBoundingClientRect().left;
          this.left = this.oldLeft;
          this.top = this.screenTop;
          this.setStyle();
        }else{
          this.oldLeft = this.$el.getBoundingClientRect().left;
          this.resetStyle();
        }
      },
      /*
       * setStyle
      */
      setStyle() {
        let {position, top, left} = this;
        this.style = `position:${position};top:${top}px;left:${left}px`;
      },
      /*
       * resetStyle
      */
      resetStyle() {
        this.style = ''
      }
    },
    /**********
    
    
    
    
    
    
    
    
    
    # section
    **********/
    updated() {
      
      // 0.5s 后获取横坐标避免由于组件未渲染完全导致的偏差
      
      setTimeout(() => {
        this.oldTop = this.$el.getBoundingClientRect().top;
        this.oldLeft = this.$el.getBoundingClientRect().left;
      },500);
      
      if (this.offsetTop) {
        this.screenTop = this.oldTop - this.offsetTop;
        if (this.screenTop < 0) {
          console.error("props 'offsetTop' should always be less than the 'top' of anchor");
          this.pinTop = this.oldTop;
        }else{
          this.pinTop = this.offsetTop;
        }
      }else{
        this.pinTop = this.oldTop;
      }
      window.addEventListener('scroll', this.positioning);
    }
  }
</script>











<style lang="less">
  .dl-anchor {
    position: relative;
    width: 100%;
    // -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    // transition: all .3s cubic-bezier(.645,.045,.355,1);
    .dl-anchor-ink {
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      &:before {
        content: " ";
        position: relative;
        width: 2px;
        height: 100%;
        display: block;
        background-color: #e9e9e9;
        margin: 0 auto;
      }
      .dl-anchor-ink-ball {
        top: 10.5px;
        display: block;
        position: absolute;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        border: 3px solid #108ee9;
        background-color: #fff;
        left: 50%;
        -webkit-transition: top .3s ease-in-out;
        transition: top .3s ease-in-out;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }
  }
</style>