// var num = 16;
// var Power= true;
// while(num>1){
//     if (num % 2 !== 0) {
//         Power = false;
//         break;
//     }
//     num =num/2;
// }

// if (Power===true) {
//     console.log("The number is a power of 2.");
// } 
// else {
//     console.log("The number is not a power of 2.");
// }
function isPowerOfTwo(num) {
    if (num = 0) return false;

    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }
        num = num / 2;
    }

    return true;
}

console.log(isPowerOfTwo(2));

console.log(isPowerOfTwo(14));
console.log(isPowerOfTwo(0));