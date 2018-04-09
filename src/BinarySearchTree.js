import _ from 'lodash'
class Node
{
  constructor(name){
    this.name = name;
    this.children = [{}, {}]
  }
}

export  class BinarySearchTree{
  constructor(){
    this.root = null;
    this.currentTraversal = [];
  }

  insert(name){
    const newNode = new Node(name);
    if(this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode){
    if(newNode.name <= node.name) {
      if(_.isEmpty(node.children[0])){
        node.children[0] = newNode;
      }
      else{
        this.insertNode(node.children[0], newNode);
      }
    }
    if(newNode.name > node.name) {
      if(_.isEmpty(node.children[1])){
        node.children[1] = newNode;
      }
      else{
        this.insertNode(node.children[1], newNode);
      }
    }
  }

  newTraverse(type){
    this.currentTraversal = [];
    this.traverseNode(this.root, type);
    return this.currentTraversal;
  }

  traverseNode(node, type){
    if (type === 'pre-order') {
      this.currentTraversal.push(node.name);
    }
    if (!_.isEmpty(node.children[0])) {
      this.traverseNode(node.children[0], type);
    }
    if (type === 'in-order') {
      this.currentTraversal.push(node.name);
    }
    if (!_.isEmpty(node.children[1])) {
      this.traverseNode(node.children[1], type);
    }
    if (type === 'post-order') {
      this.currentTraversal.push(node.name);
    }
  }

  getTree(){
    return this.root;
  }
}
