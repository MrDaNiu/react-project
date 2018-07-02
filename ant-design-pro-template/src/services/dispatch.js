import request from '../utils/request';

export async function ManageList(params) {
  return request('/dispatch/manageList', {
    method: 'POST',
    body: params,
  });
}

export async function TaskAllList(params) {
  return request('/dispatchCenter/taskAllList', {
    method: 'POST',
    body: params,
  });
}

export async function DriverList(params) {
  return request('/dispatchChangeDriver/list', {
    method: 'POST',
    body: params,
  });
}

export async function BindAdminList(params) {
  return request('/ownAgent/bindAdminList', {
    method: 'POST',
    body: params,
  });
}
