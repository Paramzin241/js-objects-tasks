// BEGIN
const make = (name, data = null) => {
    const result = {
        name: name,
        state: 'moderating',
        createdAt: Date.now()
    };
    
    if (data !== null) {
        return { ...result, ...data };
    }
    
    return result;
}

export default make;
// END