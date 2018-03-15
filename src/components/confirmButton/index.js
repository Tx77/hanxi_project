import confirmButton from './main.vue'

/* istanbul ignore next */
confirmButton.install = function(Vue) {
  Vue.component(confirmButton.name, confirmButton)
}

export default confirmButton
