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
}

function buildTree(arr){
    let n = arr.length;
    console.log(n)//14
    if (n === 0)
        return null;

    //find the middle element

    let mid = Math.floor((n-1)/2);
    console.log(mid)//6

    //creating the root node, its the middle of a sorted array

    let root = new Node(arr[mid]);
    console.log(root)
    
    //get the middle of the left half

    //get the middle half first

    let leftHalf = 

    root.left = [0, n-1];
    console.log(root)

    
    

    // console.log(root)



    // let q = [{node : root, range: [0, n-1]}];
    // let frontIndex = 0;
}

const arrTree = buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
arrTree

//second code
//https://www.geeksforgeeks.org/dsa/sorted-array-to-balanced-bst/