// var str =12121;
// // var str = '' + num;
// var Palindrome = true;
// var first = 0;
// var last = str.length - 1;

// while (first < last) {
//     if (str.charAt(first) !== str.charAt(last)) {
//         Palindrome = false;
//         break;
//     }
//     first++;
//     last--;
// }

// if (Palindrome===true) {
//     console.log("string is a palindrome");
// } else {
//     console.log("string is not a palindrome");
// }
// var str='mom';
//  var reverse='';
// for(var i=str.length-1;i>=0;i--){
//      reverse +=str[i];
// }
// if(str===reverse){
//     console.log('palindrome');
// }
// else{
//     console.log('not a palindrome');
// }
const str='mom'
const str2='dad'
function checkPalindrome(str,str2){
    let reverse='';
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i]
    }
   
    if(str===reverse){
        return'palindrome'
    }else{
        return 'not a palindrome'
    }
    

}

console.log(checkPalindrome(str));
console.log(checkPalindrome(str2));