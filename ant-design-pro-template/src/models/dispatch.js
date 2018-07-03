import { getSchedulerManageList } from '../services/dispatch';

export default {
  namespace: 'activities',

  state: {
    list: [],
  },

  effects: {
    *fetchList(_, { call, put }) {
      const response = yield call(getSchedulerManageList);
      yield put({
        type: 'getSchedulerManageList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },

  reducers: {
    getSchedulerManageList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
