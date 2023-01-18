// function merge(arr) {

//     let arrLn = arr.length;
//     console.log(arr);

//     if(arrLn<2) return;

//     let leftArrSize = Math.floor(arrLn / 2);
//     let rightArrSize = arrLn - leftArrSize;

//     let leftSide = [];
//     let rightSide = [];

//     for (let i = 0; i < leftArrSize; i++) {
//         leftSide.push(arr[i]);
//     }

//     for (let t = 0; t < rightArrSize; t++) {
//         rightSide.push(arr[leftArrSize++]);
//     }

//     merge(leftSide);
//     merge(rightSide);

// }

// let arr = [38, 27, 43, 3, 9, 82, 10];


// merge(arr);

let arr = [38, 27, 43, 3, 9, 82, 10];

let leftSide = [];
let rightSide = [];

for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    leftSide.push(arr[i]);
}

for (let t = 0; t < arr.length - leftSide.length; t++) {
    rightSide.push(arr[Math.floor(arr.length / 2)++]);
}