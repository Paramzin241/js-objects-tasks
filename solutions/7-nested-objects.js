// BEGIN
const get = (data, keys) => {
    let result = data;
    for (const key of keys) {
        if (result === null || result === undefined || !Object.hasOwn(result, key)) {
            return null;
        }
        result = result[key];
    }
    return result;
}

export default get;
// END