import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import {createRandomArray} from './HelperFunctions'
import CenteredTree from './CenteredTree';
import './App.css';
import {BinarySearchTree} from './BinarySearchTree'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: [],
      binarySearchTree: {},
      binaryTree: {},
      currentTraversal: 'pre-order: null',
      traversalType: "pre-order",
      currentTree:[
        {
          name: 'Empty Tree',
          children: [{}, {}]
        },
      ],
      nodeInput: '',
    }
  }

  componentDidMount = () =>{
    const newTreeObject = new BinarySearchTree();
    const newInputArray = ["Empty Tree"];
    newInputArray.forEach(element => newTreeObject.insert(element));
    const newTree = newTreeObject.getTree();
    this.setState({
      binarySearchTree: newTreeObject,
      currentTree: [newTree],
      nodeInput: '',
      input: newInputArray,
    });
  }

  handleGenerateTreeClick = () =>{
    const newTreeObject = new BinarySearchTree();
    const newInputArray = createRandomArray(this.state.nodeInput);
    newInputArray.forEach(element => newTreeObject.insert(element));
    const newTree = newTreeObject.getTree();
    this.setState({
      binarySearchTree: newTreeObject,
      currentTree: [newTree],
      nodeInput: '',
      input: newInputArray,
    });
  }

  handleNodesInput = event => {
    this.setState({
      nodeInput: event.target.value,
    })
  }

  handleOrderChange = event => {
    this.setState({
      traversalType: event.target.value,
    })
  }

  handleTraversalClick = event => {
    const newTraversal = this.state.binarySearchTree.newTraverse(this.state.traversalType);
    this.setState({
      currentTraversal: this.state.traversalType + ": " + newTraversal,
    });
  }

  render() {
    return (
      <div style={{height:"100vh"}} className="App">
        <input value={this.state.nodeInput} placeholder="Number of Nodes" type="text" onInput={this.handleNodesInput}/>
        <button onClick ={this.handleGenerateTreeClick}>Generate Binary Search Tree</button>
        <br />
        <label> pre-order:</label>
        <input type="radio" name="traversalType" value="pre-order" onChange={this.handleOrderChange} />
        <label> in-order:</label>
        <input type="radio" name="traversalType" value="in-order" onChange={this.handleOrderChange} />
        <label> post-order:</label>
        <input type="radio" name="traversalType" value="post-order" onChange={this.handleOrderChange} />
        <button onClick={this.handleTraversalClick}>Generate Traversal</button>
        <br />
        <span>{this.state.currentTraversal}</span>
        <br />
        <CenteredTree data={this.state.currentTree} />
      </div>
    );
  }
}

export default App;
