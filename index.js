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

    // console.log(mid)
    let root = new Node(arr[mid]);
    // console.log(root)

    root.left = this.buildTree(arr.slice (0, mid)); //0, 2
    root.right = this.buildTree(arr.slice (mid + 1)); 

    // console.log(root)

    return root
  }

  insert(root, value){
    if (root === null){
      return new Node(value)
    } 

    if (root.data === value)
      return root;

    if (value < root.data)
      root.left = this.insert(root.left, value);
    else if (value > root.data)
      root.right = this.insert(root.right, value);

    return root
  }

  getSucc (root){
    let curr = root.right;
    if (curr.left !== null && curr.right !== null){
      curr = curr.left;
    }
    return curr
  }

  delete (root, value){
    if (root === null){
      return root;
    }
    if (value > root.data){
      root.right = this.delete(root.right, value);
    } else if (value < root.data){
      root.left = this.delete(root.left, value)
    } else {
    
    if (root.left === null){
      return root.right;
    } else if (root.right === null){
      return root.left;
    }

    let succ = this.getSucc(root);
    root.data = succ.data; //change the number of the root
    root.right = this.delete(root.right, succ.key)
    }
  }

  find (root, value){
    if (root === null || value === root.data){
      return root;
    } else if (value > root.data){
      return this.find(root.right, value)
    } else if (value < root.data){
      return this.find(root.left, value)
    } 
  }

  
  // callback (){

  // }
  // levelOrderForEach(callback){
  //   console.log(this)
  //   console.log(`this is the root: ${this}`)
    
  //   const q = [this];
  //   while (q.length > 0){
  //     console.log(q)
  //   }
  
  //   console.log(callback)
  //   const q = [callback];
  //   console.log(q)
  //   while (q.length > 0){
  //     const curr = q.shift();
  //     console.log(curr.data);

  //     if (curr.left !== null){
  //       q.push (curr.left)
  //     }
      
  //     if (curr.right !== null){
  //       q.push (curr.right)
  //     }
  //   }
  // }
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



let array = [1, 20, 2, 3, 75];
let bst = new Tree(array);
// bst.levelOrderForEach(bst.root);
console.log(bst.find(bst.root, 1))


// prettyPrint(bst.root)
// console.log(bst.root)
// bst.insert(bst.root, 7)
// bst.delete(bst.root, 20)
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
