import customerSelect from "./main.vue"

/* istanbul ignore next */
customerSelect.install = function(Vue) {
  Vue.component(customerSelect.name, customerSelect)
}

export default customerSelect
