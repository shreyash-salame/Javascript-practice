//flattening the array
var arr = [1, 2, [2, 5, 6], 7, [8]];
let res=arr.flat(1)
console.log(res);
// var flatten = [];
// for (var i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//         for (var j = 0; j < arr[i].length; j++) {
//             flatten.push(arr[i][j]);
//         }
//     } else {
//         flatten.push(arr[i]);
//     }
// }
// console.log(flatten);
// var arr = [1, 2, [2, [4, 5], 6], 7, [8]];
// var flatten = [];
// for (var i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//         for (var j = 0; j < arr[i].length; j++) {
//             if (Array.isArray(arr[i][j])) {
//                 for (var k = 0; k < arr[i][j].length; k++) {
//                     flatten.push(arr[i][j][k]);
//                 }
//             } 
//             else {
//                 flatten.push(arr[i][j]);
//             }
//         }
//     }
//     else {
//         flatten.push(arr[i]);
//     }
// }

// console.log(flatten); 
