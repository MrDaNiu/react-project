import request from '../utils/request';

// 调度管理列表
export async function getSchedulerManageList(params) {
  return request('/api/dispatch/getSchedulerManageList.do', {
    method: 'POST',
    body: params,
  });
}

// 运单确认／取消确认
export async function confirm(params) {
  return request('/api/dispatch/confirm.do', {
    method: 'POST',
    body: params,
  });
}

// 修改押金
export async function modifyDeposit(params) {
  return request('/api/dispatch/modifyDeposit.do', {
    method: 'POST',
    body: params,
  });
}

// 修改回单押款
export async function modifyReceiptFee(params) {
  return request('/api/dispatch/modifyReceiptFee.do', {
    method: 'POST',
    body: params,
  });
}

// 付款押金
export async function payDeposit(params) {
  return request('/api/dispatch/payDeposit.do', {
    method: 'POST',
    body: params,
  });
}

// 异常申请
export async function paymentApply(params) {
  return request('/api/dispatch/paymentApply.do', {
    method: 'POST',
    body: params,
  });
}

// 被更换司机列表
export async function getChangedDriverList(params) {
  return request('/api/dispatch/getChangedDriverList.do', {
    method: 'POST',
    body: params,
  });
}

// 被更换司机收付款
export async function driverExceptFee(params) {
  return request('/api/dispatch/driverExceptFee.do', {
    method: 'POST',
    body: params,
  });
}
