function checkprimeno(num){
    for(var i=2;i<num;i++){
    if(num%i===0){
        return 'not a prime no'
    }
    return 'it is prime no'
}
}
console.log(checkprimeno(20))