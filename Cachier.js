import axios from 'axios';

class Cachier {
    constructor(url) {
        this.url = url;
    }

    async get(key) {
        if (!key) return null;

        try {
            const response = await axios.get(`${this.url}?cache_key=${key}`);
            return response.data.value;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async set(key, value, expiry) {
        if (!key) return false;

        const data = {
            cache_key: key,
            cache_value: value,
            cache_expiry: expiry,
        };

        try {
            const response = axios.post(this.url, data);
            return response.data.is_saved_successfully;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
