import failMsgDialog from "./main.vue";

/* istanbul ignore next */
failMsgDialog.install = function(Vue) {
	Vue.component(failMsgDialog.name, failMsgDialog)
};

export default failMsgDialog;
