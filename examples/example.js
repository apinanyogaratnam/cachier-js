import Cachier from 'cachier-js';

const client = new Cachier({ url: 'http://localhost:8000' });

const setCache = async (key, value, expiry) => {
    const response = await client.set(key, value, expiry);
    console.log(response);
}

const getCache = async (key) => {
    const response = await client.get(key);
    console.log(response);
}

setCache('key', 'value', 1000);
getCache('key');
