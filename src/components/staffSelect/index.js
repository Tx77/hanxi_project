import staffSelect from "./main.vue"

/* istanbul ignore next */
staffSelect.install = function(Vue) {
  Vue.component(staffSelect.name, staffSelect)
}

export default staffSelect
