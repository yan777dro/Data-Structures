// implementing Hash Table using array
/**
 * operations: hash, set, get, delete, print  
 * time complexity O(1).
 */


class Hashtable {
    constructor (size = 53) {
      this.keyMap = new Array(size);
    }
  
    hash(key) {
      let hash = 0;
      const WEIRD_PRIME = 31;
  
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        const char = key[i];
        const value = char.charCodeAt(0) - 96;
        hash = (hash * WEIRD_PRIME + value) % this.keyMap.length;
      }
  
      return hash;
    }
  
    set(key, value) {
      const index = this.hash(key);
  
      if (!this.keyMap[index]) this.keyMap[index] = [];
  
      else {
        for (const item of this.keyMap[index]) {
          if (item[0] === key) {
            item[1] = value;
            return;
          }
        }
      }
  
      this.keyMap[index].push([key, value]);
    }
  
    get(key) {
      const index = this.hash(key);
  
      if (this.keyMap[index]) {
        for (const item of this.keyMap[index]) {
          if (item[0] === key) {
            return item[1];
          }
        }
      }
  
      return undefined;
    }
  
    delete(key) {
      const index = this.hash(key);
  
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i][0] === key) {
            return [].concat(...this.keyMap[index].splice(i, 1));
          }
        }
      }
  
      return null;
    }
  
    getKeys() {
      const keys = [];
  
      for (const bucket of this.keyMap) {
        if (bucket) {
          for (const item of bucket) {
            keys.push(item[0]);
          }
        }
      }
  
      return keys;
    }
  
    getValues() {
      const values = new Set();
  
      for (const bucket of this.keyMap) {
        if (bucket) {
          for (const item of bucket) {
            values.add(item[1]);
          }
        }
      }
  
      return Array.from(values);
    }
  
    print() {
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (const item of this.keyMap[i]) {
            console.log(`bucket ${i}: ${item}`);
          }
        }
      }
    }
  }
  
  const hashtable = new Hashtable(17);
  
  hashtable.set('maroon', '#800000');
  hashtable.set('yellow', '#FFFF00');
  hashtable.set('olive', '#808000');
  hashtable.set('salmon', '#FA8072');
  hashtable.set('lightcoral', '#F08080');
  hashtable.set('mediumvioletred', '#C71585');
  hashtable.set('plum', '#DDA0DD');
  hashtable.set('lightcoral', '#EE7F74');
  hashtable.set('coral', '#EE7F74');
  hashtable.print();
 
  console.log(hashtable.get('olive')); 
  console.log(hashtable.get('oliv')); 
  console.log(hashtable.getKeys()); 
  console.log(hashtable.getValues()); 
  console.log(hashtable.delete('maroon')); 
  console.log(hashtable.delete('maro')); 
  hashtable.print();
