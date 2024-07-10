// check string has only capital letters
// var str = "hELLO";
// var Capital =true;

// for (var i = 0; i < str.length; i++) {
//     var character = str.charAt(i);
    
//   if(character < "A" || character > "Z"){
//     Capital = false;
//     break;
//     }  
// }
// if (Capital ==true) {
//     console.log("string has capital letters");
// } 
// else{
//     console.log("string does not have capital letters");
// }
 
const str1='Shreyash'
const str2='HELLO'
function hasAllCapital(str1,str2){
    for(let i=0;i<str.length;i++){
        let character=str[i]
        if(character <"A" || character> 'Z'){
            return false
        }
    }
    return true
}
if(hasAllCapital(str1,str2)){
    console.log('capital');
}else {
    console.log('no capital');
}