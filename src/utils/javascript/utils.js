export default {
  install (Vue, options) {
    Vue.getCurrentDate = function () {
      let date = new Date();
      return date;
    };

    Vue.$user = {
      name : '哈哈',
      age : 19
    };
  }
};