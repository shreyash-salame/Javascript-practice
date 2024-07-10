// program to print all prime number upto 100
// for(var i=1;i<=100;i++){
//     if(i>1){
//         var prime=true;
//         for(var j=2;j<i;j++){
//             if(i%j===0){
//                 prime=false;
//                 break;
//             }
//         }
//         if(prime===true){
//             console.log(i)
//         }
//     }
// }
function primebetno(num){
    if (num <= 1) {
        return false;
    }
for(var i=2;i<num;i++){
  if(num%i===0){
    return false;
  }
}
return true;
}
for (var i = 2; i <= 100; i++) {
    if (primebetno(i)) {
        console.log(i);
    }
}