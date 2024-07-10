// program to find the sum of 9 series upto n term
var num = 5;
var sum=0;
var term = 9;
for (var i = 1; i <= num; i++) {
    sum =sum+term;
    term = term * 10 + 9;
}

console.log('sum of the 9 series up to',num,'is',sum)

// function Series(num){
// var sum=0;
// var term = 9;
//     for(var i=1;i<=num;i++){
//         sum =sum+term;
//         term = term * 10 + 9;
//     }
//     return sum;
// }
// var num = 2;
// var result=Series(num)
// console.log(result);
