import textareaCount from "./main.vue"

/* istanbul ignore next */
textareaCount.install = function(Vue) {
  Vue.component(textareaCount.name, textareaCount)
}

export default textareaCount