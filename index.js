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

    //sort array
    let sortedArr = arr.sort(function(a, b){
        return a-b;
    });

    console.log(sortedArr)

    //remove duplicates
    let uniqueArr = sortedArr.filter((item, index) => sortedArr.indexOf(item) === index);
    console.log(uniqueArr)

    //find the middle element
    let n = uniqueArr.length;
    console.log(n)//14
    if (n === 0)
        return null;


    let mid = Math.floor((n-1)/2);
    console.log(mid)//6

    //creating the root node, its the middle of a sorted array
    let root = new Node(uniqueArr[mid]);
    console.log(root)
    
    // //get the left half
    root.left = buildTree(uniqueArr.slice(0, mid));
    root.right = buildTree(uniqueArr.slice(mid + 1));

    return root

    
}

const num = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const bst = new buildTree(num);


function printTree(root, level = 0) {
    if (root !== null) {
        printTree(root.right, level + 1);
        console.log(" ".repeat(4 * level) + "-> " + root.value);
        printTree(root.left, level + 1);
    }
}

printTree(bst);


//second code
//https://www.geeksforgeeks.org/dsa/sorted-array-to-balanced-bst/


//so does the array has to be sorted first? no, some arrays are sorted, most are not, and it doesnt affect the searching. 
//do i have to remove the duplicates first?  
//what does the inorder traversal means? it is mentioned many times in docs and forums
