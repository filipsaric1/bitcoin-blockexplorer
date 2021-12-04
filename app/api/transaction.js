import axios from './base';

const getTransaction = txid => axios.get(`/transaction/${txid}`);

export default { getTransaction };
