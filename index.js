//build a node class, should have attribute for data, left and right children
//build a tree class, have root attribute to return value of buildTree


class Node{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class Tree{
  constructor(array){
    // this.array = array;
    this.root = this.buildTree(array);
  }

  //this will build the tree
  buildTree(array){
    //sort and remove arr
    let arr = [...new Set (array.sort((a, b) => a-b))];
    // console.log(`this is arr: ${arr}`)
    
    let mid = Math.floor((arr.length)/2)

    // if (mid < 0){return null}
    if (arr.length === 0) return null;

    console.log(mid)
    let root = new Node(arr[mid]);
    // console.log(root)

    root.left = this.buildTree(arr.slice (0, mid)); //0, 2
    root.right = this.buildTree(arr.slice (mid + 1)); 

    // console.log(root)

    return root
  }

  insert(root, value){
    // console.log('helllo')
    // let root = this.root;
    // // console.log(root);
    // console.log(root.data);
    // console.log(root.left)


    if (root === null){
      return new Node(value)
    } 

    if (root.data === value)
      return root;

    if (value < root.data)
      root.left = insert(root.left, value);
    else if (value > root.data)
      root.right = insert(root.right, value);

    return root
  // }
}
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};



let array = [1, 45, 20, 10, 20, 4, 4];
let bst = new Tree(array);

prettyPrint(bst.root)
console.log(bst.root)
bst.insert(bst.root, 7)
// prettyPrint(bst.root)
// bst.buildTree(array);


//questions
//1. why do i have to use the bst new Tree to access the buildtree
//--the class Tree is a template, a blueprint. defined what the Tree object should look like
//so when we call it like bst = new Tree(array), we make an object based off the blueprint that has data in it
//and we can use the Tree to used on actual data

//2. What is a function called inside a class -- a method

//3. is it a bad practice to have another function inside a method?

//close to what im looking for but not really: https://medium.com/@python-javascript-php-html-css/building-a-binary-search-tree-from-a-javascript-array-374678de88ab
