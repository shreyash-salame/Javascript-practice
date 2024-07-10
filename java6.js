//find the perfect square
// var num=25;
// var flag=false;

// for (var i = 1; i <=Math.sqrt(num); i++) {
//         if (i * i === num) {
//             console.log("perfect square")
//             flag= true;
//             break;
//         }
       
// }
 
// if (flag===false) {
//     console.log("not a perfect square");
// }

function perfectsquare(num){
    for(var i=1;i<=Math.sqrt(num);i++){
        if(i * i===num){
            return'perfect square';
        }
        }
        return'not a perfect square';
    }
var num=25;
console.log(perfectsquare(num));