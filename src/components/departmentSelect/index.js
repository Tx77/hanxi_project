/**
 * Created by 田鑫 on 2017/11/21.
 */

import departmentSelect from "./main.vue"

/* istanbul ignore next */
departmentSelect.install = function(Vue) {
	Vue.component(departmentSelect.name, departmentSelect)
};

export default departmentSelect;
