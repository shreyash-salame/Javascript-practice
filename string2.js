// remove nth term from the string
// var str = "my name is shreyash";
// var n = 4;  
// var string = "";
// for (let i = 0; i < str.length; i++) {
//     if (i !== n - 1) {
//         string = string+str[i];
//     }
// }
// console.log(string);


// var str='india is my country'
// var n=4;
// var string='';
// for(var i=0;i<str.length;i++){
//     if(i !==n){
//         string +=str[i];
//     }
// }
// console.log(string);


const str='shreyash'
function removeNelement(n){
    let string='';
    for(let i=0;i<str.length;i++){
        if(i!==n){
            string+=str[i]
        }
    }
    return string

}
console.log(removeNelement(3));