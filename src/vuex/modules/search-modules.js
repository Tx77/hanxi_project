export default {
  state : {
    bodyParams : {},
    statusList : []
  },
  mutations : {
    setSearchParams (state, query) {
      state.bodyParams = {};
      Object.assign(state.bodyParams, query);
    }
  },
  actions : {

  }
};