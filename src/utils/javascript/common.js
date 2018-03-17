import Vue from 'vue';

/**
 * 格式化时间戳
 * @param timestamp
 * @returns {string}
 */
Vue.prototype.formatDate = (timestamp) => {
  let year = timestamp.getFullYear();

  let month = timestamp.getMonth()+1;

  let date = timestamp.getDate();

  let hour = timestamp.getHours();

  let minute = timestamp.getMinutes();

  let second = timestamp.getSeconds();

  return year + "-" + month + "-" + date + "   " + hour + ":" + minute + ":" + second;
};

