import Vue from 'vue';
import Vuex from 'vuex';

import ErrorService from '@/libs/error-service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errors: [],
  },
  getters: {},
  mutations: {
    SET_ERRORS(state, errors) {
      state.errors = errors;
    },
  },
  actions: {
    STORE_ERRORS: ({
      state,
      commit,
    }, error) => {
      ErrorService.onError(error); // Calling Error Service

      // Store error to state
      if (error.response) {
        commit('SET_ERRORS', [...state.errors, error.response]);
      }
    },
  },
  modules: {},
});
