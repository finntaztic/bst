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

        //find the mid root
        let mid = Math.floor(uniqueArr.length / 2);
        let root = new Node(uniqueArr[mid]);

        root.left = this.buildTree(uniqueArr.slice(0, mid));
        root.right = this.buildTree(uniqueArr.slice(mid + 1));

        return root;
    }

    prettyPrint(node, prefix = '', isLeft = true){
      if (node === null) return;

      if (node.right !== null) {
        this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
      }

      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

      if (node.left !== null) {
        this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
      }
    }

    insert(root, key){
      if (root === null)
        return new Node(key);
          
      // Duplicates not allowed    
      if (root.data === key)
          return root;
          
      if (key < root.data){
        console.log(root.left)
        root.left = insert(root.left, key);
      }
      else if (key > root.data){
        // console.log(`this is ${root.right}`)
        root.right = insert(root.right, key);
      }


      return root;
    }
}

const num = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const bst = new Tree(num);
// console.log(bst)
// console.log(bst.root)
// bst.prettyPrint(bst.root);
console.log(bst.insert(bst.root, 20));






// function insert (root, data){
//   if (root === null){
//     return new Node(data)
//   }

//   //no dupes
//   if (root.data === data)
//     return root;

//   if(data < root.data)
//     root.left = insert(root.left, key)
//   else if (key>root.key)
//     root.right = insert (root.right, key)

//   return root
// }


// function inorder(root) {
//     if (root !== null) {
//         inorder(root.left);
//         console.log(root.key + " ");
//         inorder(root.right);
//     }
// }

// root = insert(root, 30)
// inorder(root)

//second code
//https://www.geeksforgeeks.org/dsa/sorted-array-to-balanced-bst/


//so does the array has to be sorted first? no, some arrays are sorted, most are not, and it doesnt affect the searching. 
//do i have to remove the duplicates first?  yes
//what does the inorder traversal means? it is mentioned many times in docs and forums
