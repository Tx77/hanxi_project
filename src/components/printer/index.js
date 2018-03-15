import Printer from "./main.vue"

/* istanbul ignore next */
Printer.install = function(Vue) {
  Vue.component(Printer.name, Printer)
}

export default Printer
