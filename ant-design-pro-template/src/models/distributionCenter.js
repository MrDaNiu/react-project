import {
  getSchedulerManageList,
  confirm,
  modifyDeposit,
  modifyReceiptFee,
  payDeposit,
  paymentApply,
  getChangedDriverList,
  driverExceptFee,
} from '../services/dispatchCenter';

export default {
  namespace: 'distributionCenter',

  state: {
    distributionCenter: [],
    data: {},
  },

  effects: {
    * fetchManageList({ payload }, { call, put }) {
      const response = yield call(getSchedulerManageList, payload);
      yield put({
        type: 'getList',
        payload: response,
      });
    },
    * fetchConfirm({ call, put }) {
      const response = yield call(confirm);
      yield put({
        type: 'show',
        payload: response,
      });
    },
    * fetchModifyDeposit({ call, put }) {
      const response = yield call(modifyDeposit);
      yield put({
        type: 'show',
        payload: response,
      });
    },
    * fetchModifyReceiptFee({ call, put }) {
      const response = yield call(modifyReceiptFee);
      yield put({
        type: 'show',
        payload: response,
      });
    },
    * fetchPayDeposit({ call, put }) {
      const response = yield call(payDeposit);
      yield put({
        type: 'show',
        payload: response,
      });
    },
    * fetchPaymentApply({ call, put }) {
      const response = yield call(paymentApply);
      yield put({
        type: 'show',
        payload: response,
      });
    },
    * fetchGetChangedDriverList({ call, put }) {
      const response = yield call(getChangedDriverList);
      yield put({
        type: 'getList',
        payload: response,
      });
    },
    * fetchDriverExceptFee({ call, put }) {
      const response = yield call(driverExceptFee);
      yield put({
        type: 'show',
        payload: response,
      });
    },
    * fetchLogList({ call, put }) {
      const response = yield call(getSchedulerManageList);
      yield put({
        type: 'getList',
        payload: response,
      });
    },
  },

  reducers: {
    getList(state, action) {
      return {
        ...state,
        dispatchCenter: Array.isArray(action.payload) ? action.payload : [],
      };
    },
    show(state, action) {
      return {
        ...state,
        data: Array.isArray(action.payload) ? action.payload : [],
      };
    },
  },
};
