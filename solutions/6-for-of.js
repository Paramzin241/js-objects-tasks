// BEGIN
const pick = (data, keys) => {
  const result = {};
  for (const key of keys) {
    if (data.hasOwnProperty(key)) {
      result[key] = data[key];
    }
  }
  return result;
}

export default pick;
// END