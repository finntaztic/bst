class Node{
    constructor(data, right= null, left = null){
        this.data = data;
        this.right = right;
        this.left = left;
    }
}

class Tree{
    constructor(arr){
        this.root = this.buildTree(arr);
    } 


    buildTree(arr) {

            //sort array
    let sortedArr = arr.sort(function(a, b){
        return a-b;
    });


    //remove duplicates
    let uniqueArr = sortedArr.filter((item, index) => sortedArr.indexOf(item) === index);

        if (uniqueArr.length === 0) return null;

        let mid = Math.floor(uniqueArr.length / 2);
        let root = new Node(uniqueArr[mid]);

        root.left = this.buildTree(uniqueArr.slice(0, mid));
        root.right = this.buildTree(uniqueArr.slice(mid + 1));

        return root;
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) return;

  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }

  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

const num = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const bst = new Tree(num);
prettyPrint(bst.root);





//second code
//https://www.geeksforgeeks.org/dsa/sorted-array-to-balanced-bst/


//so does the array has to be sorted first? no, some arrays are sorted, most are not, and it doesnt affect the searching. 
//do i have to remove the duplicates first?  yes
//what does the inorder traversal means? it is mentioned many times in docs and forums
