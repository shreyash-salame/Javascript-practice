var str = "my name is shreyash";
var vowelcount= 0;
for (let i = 0; i < str.length; i++) {
    var letter = str.charAt(i);
if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' ||
    letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
        vowelcount++;
 }
}

console.log(vowelcount);



var str = "my name is shreyash";
var vowels = 'aeiouAEIOU';
var count = 0;
for(var i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])) {
        count++;
    }
}

console.log(count);