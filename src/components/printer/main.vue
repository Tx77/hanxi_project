<template>
  <div class="components-printer">
    <div id="printerContent">
      <slot>
        <p>no point content!</p>
      </slot>
    </div>
    <iframe
			:src="printSrc"
      :srcdoc="printerContent"
      class="printer-iframe"
      id="printerIframe"
      frameborder="0">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'Printer',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    copyInnerStyle: {
      type: Boolean,
      default: false
    },
    cover: {
      type: Boolean,
      default: false
    },
		printSrc : {
    	type : String,
			default : false
		}
  },
  data () {
    return {
      printerContent: ''
    }
  },
  methods: {
    _copyInnerStyle () {
      const styleList = document.getElementsByTagName('style')
      let styleListStr = ''
      for (var i = 0; i < styleList.length; i++) {
        styleListStr += `<style>${styleList[i].innerHTML}</style>`
      }
      return styleListStr
    },

    _setprinterContent (callback) {
      let printerContent = document.getElementById('printerContent').innerHTML
      this.printerContent = (this.copyInnerStyle ? this._copyInnerStyle() : '') + printerContent
      if (typeof callback === 'function') setTimeout(callback, 100);
    },

    _print () {
      this._setprinterContent(() => {
        document.getElementById('printerIframe').contentWindow.print()
        this.$emit('input', false)
      })
    }
  },

  watch: {
    'printSrc': function (val) {
      if (val) this._print();
    }
  },

  mounted () {
    this._setprinterContent()
  }
}
</script>

<style lang="less" scoped>
.components-printer {
  .printer-iframe {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
  }
}
</style>
