import _ from 'lodash';

// BEGIN
const fill = (company, keys, data) => {
    const keysToCopy = keys.length === 0 ? Object.keys(data) : keys;
    
    for (const key of keysToCopy) {
        if (Object.hasOwn(data, key)) {
            company[key] = data[key];
        }
    }
}

export default fill;
// END