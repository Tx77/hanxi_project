import remoteSelect from "./main.vue"

/* istanbul ignore next */
remoteSelect.install = function(Vue) {
  Vue.component(remoteSelect.name, remoteSelect)
}

export default remoteSelect
