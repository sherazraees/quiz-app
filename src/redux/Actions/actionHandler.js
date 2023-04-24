let type = {
  //  Error Type
  GET_ERROR: 'Check your network or try sometime later',

  // Product Types
  ON_START_REQUEST: 'ON_START_REQUEST',
  ON_SUCCESS_REQUEST: 'ON_SUCCESS_REQUEST',
  ON_FAIL_REQUEST: 'ON_FAIL_REQUEST',

  //User Types
  USER_START_REQUEST: 'USER_START_REQUEST',
  USER_SUCCESS_REQUEST: 'USER_SUCCESS_REQUEST',
  USER_FAIL_REQUEST: 'USER_FAIL_REQUEST',
};

const api = {
  requestStart: type => ({type}),
  requestSuccess: (type, payload) => ({type, payload}),
  requestFail: (type, payload) => ({type, payload}),
};

const createActionsAndTypes = action => {
  const obj = {};
  const values = ['REQUEST', 'SUCCESS', 'FAILURE'];
  values.forEach(value => {
    let type = `${action}_${value}`;
    obj[value] = type;
    obj[value.toLowerCase()] = payload => ({type, payload});
  });
  return obj;
};

export {type, api, createActionsAndTypes};
