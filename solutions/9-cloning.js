// BEGIN
const cloneShallow = (data) => {
    const result = Array.isArray(data) ? [] : {};
    const keys = Object.keys(data);
    
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = data[keys[i]];
    }
    return result;
}

export default cloneShallow;
// END
