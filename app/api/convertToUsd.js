import axios from './base';

const convertToUsd = value => axios.get(`/convert?value=${value}`);

export default convertToUsd;
