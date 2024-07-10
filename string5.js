//remove the space between the string
// var str = "my name is shreyash";
// var Space = "";
// for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) !== " ") {
//         Space =Space+str.charAt(i);
//     }
// }
// console.log(Space);

// var str='india   is my country';
// var string='';
// for(var i=0; i<str.length; i++){
//     if(str[i] !==" "){
//         string +=str[i];
//     }
// }
// console.log(string);

// const str='hello  everry one'
// function removeSpace(){
//     let string='';
//     for(let i=0;i<str.length;i++){
//         if(str[i] !==' '){
//             string+=str[i]
//         }
//     }
//     return string
// }
// console.log(removeSpace());


const str ='my name is shreyash'
function removespace(str){
    let string=''
    for(let i=0;i<str.length;i++){
        if(str[i] !==" "){
            string+=str[i]
        }
    }
    return string
}
console.log(removespace(str));