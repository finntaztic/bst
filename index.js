//build a node class, should have attribute for data, left and right children
//build a tree class, have root attribute to return value of buildTree


class Node{
  constructor(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree{
  constructor(array){
    this.array = array;
    this.root = this.buildTree(array);
  }

  buildTree(array){

  }
}


const bst 