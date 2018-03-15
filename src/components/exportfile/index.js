import exportfile from "./main.vue"

/* istanbul ignore next */
exportfile.install = function(Vue) {
  Vue.component(exportfile.name, exportfile)
}

export default exportfile
