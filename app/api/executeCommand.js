import axios from './base';

const executeCommand = (command, params) => {
  const paramsStr = params ? `&parameters=${params}` : '';
  return axios.get(`/?method=${command}${paramsStr}`);
};

export default executeCommand;
