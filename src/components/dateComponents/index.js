/**
 * Created by 田鑫 on 2017/9/5.
 */

import dateComponents from "./main.vue";

/* istanbul ignore next */
dateComponents.install = function(Vue) {
  Vue.component(dateComponents.name, dateComponents);
}

export default dateComponents;

