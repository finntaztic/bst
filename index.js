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

    buildTree(arr){
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

    insert(value){
      let newNode = new Node(value);
      console.log(this.root);
      if (this.root ===null){
        this.root = newNode;
        return this;
      }

      let current = this.root;
      console.log(current)

      while (current){
        if(value === current.value) return undefined;
        if(value < current.data){
          if(current.left === null){
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if(current.right === null){
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }

    delete(value){
      let current = this.root;

      while (current){
        if (value == current.data){
          if (!current.left && !current.right){
            return null;
          }
        } 
      }
    }

    // insert(root, key){

    //   console.log(root)
    //   if (root === null)
    //     return new Node(key);
    //   // console.log(root.data)
    //   if (root.data === key){
    //     return;
    //   }

    //   if (key < root.data){
    //     root.left = this.insert(root.left, key)
    //   }

    //   if (key > root.data){
    //     root.right = this.insert(root.right, key)
    //   }
    //   return root;
    // }

}

const num = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const bst = new Tree(num);

// console.log(buildTree(num))
// console.log(bst)
// console.log(bst.root)
// bst.prettyPrint(bst.root);

// console.log(bst.root)
// bst.insert(20);
// bst.insert(10);
bst.delete(5);
bst.prettyPrint(bst.root);

// bst.delete(bst.root, 9);



//https://dev.to/jenshaw/deleting-nodes-in-binary-search-trees-4nhm
//second code
//https://www.geeksforgeeks.org/dsa/sorted-array-to-balanced-bst/


//so does the array has to be sorted first? no, some arrays are sorted, most are not, and it doesnt affect the searching. 
//do i have to remove the duplicates first?  yes
//what does the inorder traversal means? it is mentioned many times in docs and forums
