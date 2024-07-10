var num=9;

if(num>1){
    var prime=true;
    for(var i=2;i<num;i++){//6    2,3,4,5,6
        if(num%i===0){
            prime=false;
            break;
        }
    }
    if(prime===true){
        console.log(" number is prime number")
    }
    else{
        console.log("number is not a prime number")
    }
}
else{
    console.log('invalid number')
}

