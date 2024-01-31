class LinkedList{
    constructor(value){
        this.head ={value, next:null};
        this.tail= this.head;
    }
    insert(value){
      const node = {value, next:null};
      this.tail.next = node;
      this.tail = node;
    }
    remove(){

    }
    removeTail(){
      let currentNode = this.head;
      while(currentNode.next !== this.tail){
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
    contains(){
        let currentNode = this.head;
        while(currentNode.value !== value){
          currentNode = currentNode.next;
        }
      return currentNode.value === value;
    }
    isHead(){
      return node === this.head;
    }
    isTail(){
      return node  === this.tail;
    }
}
const myList = new LinkedList(1);
console.log(myList)