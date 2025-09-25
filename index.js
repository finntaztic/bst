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
    console.log(arr)
    
    let mid = (arr.length -1)/2
    console.log(mid)
    let root = new Node(arr[mid]);
    console.log(root)


    root.left = arr.slice (0, mid); //0, 1
    console.log(root.left)


    // root.left ()

    // let arr = new Set (array);
    // let removeDup = [...arr];
    // let sortedDup = removeDup.sort((a, b) => a-b));
  }
}


let array = [1, 45, 20, 10, 20, 4, 4];
let bst = new Tree(array);
// bst.buildTree(array);


//questions
//1. why do i have to use the bst new Tree to access the buildtree
//--the class Tree is a template, a blueprint. defined what the Tree object should look like
//so when we call it like bst = new Tree(array), we make an object based off the blueprint that has data in it
//and we can use the Tree to used on actual data