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
    let root = new Node(arr[mid]);
    console.log(root)
    
    //get the left half
    let leftArr = uniqueArr[0, mid -1]
    console.log(`this is left arr ${leftArr}`)
    // root.left = 

    // //get the middle half first

    // let leftHalf = 

    // root.left = [0, n-1];
    // console.log(root)

    
    

    // console.log(root)



    // let q = [{node : root, range: [0, n-1]}];
    // let frontIndex = 0;
}

const arrTree = buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
arrTree

//second code
//https://www.geeksforgeeks.org/dsa/sorted-array-to-balanced-bst/


//so does the array has to be sorted first? no, some arrays are sorted, most are not, and it doesnt affect the searching. 
//do i have to remove the duplicates first?  
//what does the inorder traversal means? it is mentioned many times in docs and forums
