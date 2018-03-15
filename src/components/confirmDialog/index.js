import confirmDialog from "./main.vue"

/* istanbul ignore next */
confirmDialog.install = function(Vue) {
  Vue.component(confirmDialog.name, confirmDialog)
}

export default confirmDialog