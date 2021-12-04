import axios from './base';

const convertToUsd = value => axios.get(`/convert/${value}`);

export default { convertToUsd };
