/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(element) {
    // add new element to the rare
    for (let i = 0; i < this.s1.size(); i++) {
      this.s2.push(this.s1.pop());
    }

    this.s1.push(element);

    for (let i = 0; i < this.s2.size(); i++) {
      this.s1.push(this.s2.pop());
    }
  }
  peek() { 
    return this.s1.peek();
  }
  size() { 
    return this.s1.size();
  }
  dequeue() {
    return this.s1.pop();
  }
}