import Vue from 'vue';
import Vuex from 'vuex';
import searchModules from './modules/search-modules';
import dateModules from './modules/date-modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules : {
    search : searchModules,
    date : dateModules
  }
});

export default store;