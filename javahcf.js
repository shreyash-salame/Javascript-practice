// var num1=56;
// var num2=24;
// var hcf;
// for (var i = 1;i<=num1 && i <= num2; i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//        hcf=i;
//     }
// }
// console.log('HCF of',num1,'and',num2,'is',hcf)

function hcf0fnumber(x,y){
var hcf=1
for (var i = 1;i<=x && i <= y; i++) {
    if (x % i === 0 && y % i === 0) {
       hcf=i;
    }
}
return hcf;
}
console.log(hcf0fnumber(24,56))