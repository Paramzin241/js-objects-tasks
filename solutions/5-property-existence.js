import _ from 'lodash';

// BEGIN
const countWords = (stroka) => {
  const result = {};
  if (!stroka.trim()) {
    return result;
  }
  const words = _.words(stroka.toLowerCase());
  for (const word of words) {
    result[word] = (result[word] || 0) + 1;
  }
  
  return result;
}

export default countWords;
// END