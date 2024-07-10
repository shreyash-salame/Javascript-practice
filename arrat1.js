//remove the duplicate 
// var arr = [1, 1, 2,2,3,3,4,4, "rome", "italy", "rome"];
// for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             for (var k = j; k < arr.length - 1; k++) {
//                 arr[k] = arr[k + 1];
//             }
//             arr.length--;
//             j--;
//         }
//     }
// }

// console.log(arr);

var arr = [1, 3, 5, 3, "rome", "italy", "rome"];

for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--;
        }
    }
}

console.log(arr);