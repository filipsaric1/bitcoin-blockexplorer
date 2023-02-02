import axios from './base';

const getBlock = hash => axios.get(`/block/${hash}`);
const getLastBlock = () => axios.get('/lastBlock');

export default { getBlock, getLastBlock };
