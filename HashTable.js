class HashTable{
    constructor(){
      this.storage ={};
      this.tableSize = val;
    }
    insert(key,value){
      const index = this.hash(key, this.tableSize);
      if(!this.hash[index]){
        this.storage[index] = [];
      }
      this.storage[index].push([key,value]);
      
    }
    remove(){
      
    }
    retrive(key){
      const index = this.hash(key, this.tableSize);
      const arrayAtIndex = this.storage[index];
      if(arrayAtIndex){
        for(let i=0;i<arrayAtIndex;i++){
          const keyValueArray = arratAtIndex[i];
          if(keyValueArray[0] === key){
            return keyValueArray[1]
          }
        }
      }
    }
    hash(str, n){
      let sum = 0;
      for(let i=0;i<str.length;i++){
        sum += str.charCodeAt(i)*3
        return sum %n;
      }
    }
  }
  const myHT = new HashTable(25);
  myHT.insert('a',1);
  myHT.insert('b',2)
  
  console.log(myHT)