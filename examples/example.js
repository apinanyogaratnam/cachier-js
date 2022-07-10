import Cachier from '../Cachier.js';

const client = new Cachier({ url: 'http://localhost:8000' });

const setCache = async (key, value) => {
  const response = await client.set(key, value);
  console.log(response);
}

const getCache = async (key) => {
  const response = await client.get(key);
    console.log(response);
}

setCache();
getCache();
