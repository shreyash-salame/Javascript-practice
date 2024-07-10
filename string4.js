// count the total number of word s in the string
// var str = "my name is shreyash";
// var spaces = 0;
// for (let i = 0; i < str.length; i++) {
//  var word= str.charAt(i);
//     if (str.charAt(i)==" ") {
//             spaces++;  
//         }
// }
// if(spaces>=1){
//     word=spaces + 1;
// }
// console.log(word);

// var str='india is my country';
// str=str.trim();
// var count=1;
// for(var i=0;i<str.length;i++){
//     if(str[i]===" "){
//         count++
//     }
// }
// console.log(count);
// const str='shreyash you can do it'
// function countTheString(){
//      str.trim();
//     let count=1
//     for(let i=0;i<str.length;i++){
//         if(str[i]===" "){
//             count++
//         }
//     }
//     return count
// }
// console.log(countTheString());

const str='shreyash you have to do it'
function counttheword(str){
    str.trim()
    let count=1
    for(let i=0;i<str.length;i++){
        if(str[i]===' '){
            count++
        }
    }
    return count
}
console.log(counttheword(str));