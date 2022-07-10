class Cachier {
    constructor(url) {
        this.url = url;
    }

    get(key) {
        if (!key) return null;
    }

    set(key, value, expiry) {
        if (!key) return false;
    }
}
