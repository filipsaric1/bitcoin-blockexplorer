import axios from './base';

const getBlock = index => axios.get(`/block/${index}`);
const getLastBlock = () => axios.get('/lastBlock');

export default { getBlock, getLastBlock };
