// var num = 8;
// var factorial = 1;
// for (var i = 1; i <= num; i++) {
//     factorial =factorial * i;
// }

// console.log('The factorial of ',num ,'is',factorial)

function fact(num){
    var facto=1;
    for (var i = 1; i <= num; i++) {
        facto =facto * i;
    }
    return facto;
}
var result=fact(8);
console.log(result);