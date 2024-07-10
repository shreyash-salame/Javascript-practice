//program to reverse a number


// var number = 123;
// var reverse= 0;
// while(number!== 0) {
//     var rem = number%10;
//     reverse=reverse*10+rem;
//     number= Math.floor(number/10);
// }
// console.log(reverse);

function reverseNumber(number) {
    var reverse = 0;
    while (number !== 0) {
        var rem = number % 10;
        reverse = reverse * 10 + rem;
        number = Math.floor(number / 10);
    }
    return reverse;
}
console.log(reverseNumber(123));