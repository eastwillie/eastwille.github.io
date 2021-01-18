import Vue from 'vue';
import Vuex from 'vuex';

import ErrorService from '@/libs/error-service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
    STORE_ERRORS: (state, error) => {
      ErrorService.onError(error); // Calling Error Service

      // Store error to state
      if (error.response) {
        state.errors = error.response;
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
