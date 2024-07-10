//check the string length even or odd
// var str = "shreyash"
// if(str.length % 2 === 0){
//  console.log("even numbers of characters")
// } 
// else{
//     console.log("odd numbers of characters")
// }
const str='shreyash'
function checkEvenorOdd(str){
if(str.length%2===0){
    return 'even'
}else{
    return 'odd'
}

}
const res=checkEvenorOdd(str)
 console.log(res);
 