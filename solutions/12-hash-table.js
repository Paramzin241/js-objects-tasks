import crc32 from 'crc-32';

// BEGIN
const make = () => {
    return new Array(1000);
}

const set = (map, key, value) => {
    const hash = Math.abs(crc32.str(String(key))) % map.length;

    if (map[hash] === undefined) {
        map[hash] = [key, value];
        return true;
    }
 
    if (map[hash][0] === key) {
        map[hash][1] = value;
        return true;
    }

    return false;
}

const get = (map, key, defaultValue = null) => {
    const hash = Math.abs(crc32.str(String(key))) % map.length;

    if (map[hash] === undefined || map[hash][0] !== key) {
        return defaultValue;
    }

    return map[hash][1];
}

export { make, set, get };
// END