//check string only contains digits

// var str = "8489";
// var Digit = true;

// for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i)<"0" || str.charAt(i)>"9") {
//         Digit = false;
//         break;
//     }
// }
// if (Digit===true) {
//     console.log("string contains only digits");
// } 
// else {
//     console.log(" contain digits and characters");
// }
function onlydigit(){
    var str="i678"
    for(var i=0;i<str.length;i++){
        if (str.charAt(i)<"0" || str.charAt(i)>"9") {
                return'contain digits and character'
              }
    }
    return'contain only digits'
}
var result=onlydigit()
console.log(result);