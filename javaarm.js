// armstrong number
// var number=153;    //1*1*1+5*5*5+3*3*3=153
// var temp=number;
// var sum=0;
// for(;temp>0;){ 
//     var digit=temp%10;
//     sum=sum+digit*digit*digit;
//     temp=Math.floor(temp/10);
// }

// if(number===sum){
// console.log("no is armstrong no");
// }
// else{
// console.log("no is not armstrong no");
// }


function armstrong(num) {
    var temp = num;
    var sum = 0;
    
    for (; temp > 0;) {
        var digit = temp % 10;
        sum = sum + digit * digit * digit;
        temp = Math.floor(temp / 10);
    }
    if (num === sum) {
        return 'number is armstrong';
    } else {
        return 'number is not armstrong';
    }
}
var num = 153;  
console.log(armstrong(num))