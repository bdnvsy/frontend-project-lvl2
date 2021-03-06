import getPlainOutput from './plain.js';
import getStylishOutput from './stylish.js';

export default (data, type) => {
  switch (type) {
    case 'json':
      return JSON.stringify(data);
    case 'stylish':
      return getStylishOutput(data);
    case 'plain':
      return getPlainOutput(data);
    default:
      throw new Error(`Unknown format ${type}`);
  }
};
