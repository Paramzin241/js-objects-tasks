// BEGIN
const getDomainInfo = (url) => {
    if (url.startsWith('https://')) {
        return {
            scheme: 'https',
            name: url.slice(8)
        };
    }
    
    if (url.startsWith('http://')) {
        return {
            scheme: 'http',
            name: url.slice(7)
        };
    }
    
    return {
        scheme: 'http',
        name: url
    };
}

export default getDomainInfo;
// END