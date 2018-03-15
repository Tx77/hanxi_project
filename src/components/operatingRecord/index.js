/**
 * Created by 田鑫 on 2017/9/12.
 */

import operatingRecord from "./main.vue";

/* istanbul ignore next */
operatingRecord.install = function(Vue) {
  Vue.component(operatingRecord.name, operatingRecord);
}

export default operatingRecord;