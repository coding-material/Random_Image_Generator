import apiCreate from './apiCreate';

const accessKay = 'wckb_8AmygyIQdtJPyCP_NJXAL2eLKrcipE9dOchOfg';
const endpoint = `/photos/random/?client_id=${accessKay}`;

const getMethod = () => apiCreate.get(endpoint);

export default {
  getMethod,
};
