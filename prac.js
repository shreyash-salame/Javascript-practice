var num=5;
var isprime=true;
for(var i=2;i<num;i++){
 if(num%i===0){
    console.log("this no is not prime")
    isprime=false;
    break;
 }
}

if(isprime===true){
    console.log("this is prime number")
}
