//alternate letter capital
// var str = "mynameisshreyash";                              
// var capital= "";
// for (let i = 0; i < str.length; i++) {
// if(i % 2 === 0){ 
//  capital =capital+str.charAt(i).toUpperCase();
// } 
// else{
// capital= capital+str.charAt(i);
// }
// }
// console.log(capital);
//...............................................

var str='india is my country';
var capital='';
for(var i=0;i<str.length;i++){
    if(i%2===0){
        capital=capital+str[i].toUpperCase();
    }
    else{
    capital=capital+str[i]  

    }
}
console.log(capital);