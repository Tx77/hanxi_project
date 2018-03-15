import SyncScrollA from "./syncScrollA.vue"
import SyncScrollB from "./syncScrollB.vue"

/* istanbul ignore next */
SyncScroll.install = function(Vue) {
  Vue.component(SyncScrollA.name, SyncScrollA)
  Vue.component(SyncScrollB.name, SyncScrollB)
}

export default SyncScroll
