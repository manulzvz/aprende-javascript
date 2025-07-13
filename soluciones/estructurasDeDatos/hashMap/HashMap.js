// HashMap.js

class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = Array.from({ length: capacity }, () => []);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      this._resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.buckets[index];
    for (const [k, v] of bucket) {
      if (k === key) return v;
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.buckets[index];
    for (const [k] of bucket) {
      if (k === key) return true;
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;
  }

  keys() {
    const keys = [];
    for (const bucket of this.buckets) {
      for (const [k] of bucket) {
        keys.push(k);
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (const bucket of this.buckets) {
      for (const [, v] of bucket) {
        values.push(v);
      }
    }
    return values;
  }

  entries() {
    const entries = [];
    for (const bucket of this.buckets) {
      for (const [k, v] of bucket) {
        entries.push([k, v]);
      }
    }
    return entries;
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;

    for (const bucket of oldBuckets) {
      for (const [k, v] of bucket) {
        this.set(k, v);
      }
    }
  }
}

export default HashMap;
