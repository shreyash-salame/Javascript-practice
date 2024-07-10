// var x = 2; 
// var y = 4;  
// var num = 1;
// for (var i = 1; i <= y; i++) {
//     num = num*x;
// }

// console.log(x,'raised to',y,'is',num);


function expo(x,y){
    var num=1;
    for(var i=1;i<=y;i++){
        num=num*x;
    }
    return num;
}
var result=expo(2,4)
console.log(result);