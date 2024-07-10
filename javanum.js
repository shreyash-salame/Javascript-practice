//program to count the length of number


// var number =7645;

// var num = number;
// var digits = 0;
// while (num !== 0) {
//     num = Math.floor(num / 10);
//     digits++;
// }
// console.log(digits);

function countdigit(number){
    var digit=0;
    var num=number;
    while (num !== 0) {
       num = Math.floor(num / 10);
       digit++;
}
return digit;
}
console.log(countdigit(456));