function binarySearchTree(value){
  this.value = value;
  this.right = null;
  this.left = null;
}

const valueCollector = collectionArray => value => {
  collectionArray.push(value);
}

binarySearchTree.prototype.insert = function(value){
  if (this.value === null){
    this.value = value;
  }
  else if (value <= this.value) {
    if (!this.left) {
      this.left = new binarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  else if (value > this.value) {
    if (!this.right) {
      this.right = new binarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
}

binarySearchTree.prototype.depthFirstTraversal = function(itteratorFunction, order){
  if (this.order === 'pre-order') {
    itteratorFunction(this.value);
  }
  if (this.left) {
    this.left.depthFirstTraversal(itteratorFunction, order);
  }
  if (this.order === 'in-order') {
    itteratorFunction(this.value);
  }
  if (this.right) {
    this.right.depthFirstTraversal(itteratorFunction, order);
  }
  if (this.order === 'post-order') {
    itteratorFunction(this.value);
  }
}

export {binarySearchTree, valueCollector};
