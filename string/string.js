// function reverseNUmber(num){
// let reverse=num.toString().split('').reverse().join('')
// return reverse
// }
// let result=reverseNUmber(1234)
// console.log(result);
// function reverseNumber(num){
//      let reverse=num.toString().split('').reverse().join('')
//      return reverse
// }
// console.log(reverseNumber(1234));


// function reverseNumber(num){
//     let reverse=0
//     while (num>0) {
//         reverse=reverse*10+num%10
//         num=Math.floor(num/10)
//     }
//     return reverse
// }
// let res=reverseNumber(1234)
// console.log(res);

// function reverseNumber(num){
//     let reverse=0
//     while(num>0){
//         reverse=reverse*10+num%10
//         num=Math.floor(num/10)
//     }
//     return reverse
// }
// console.log(reverseNumber(12345));
// console.log(reverseNumber(6789));


// function checkpalindrome(str){
// let reverse=''
// for (let i =str.length-1; i>=0; i--) {
//     reverse+=str[i]   
// }
// if(reverse===str){
//     return 'palindrome'
// }else{
//     return'not palindrome'
// }
// }
// console.log(checkpalindrome('mom'));

// function generateCombinations(str) {
//     for(let i=0;i<str.length;i++){
//         for(let j=i+1;j<=str.length;j++){
//              console.log(str.slice(i,j));
             
             
//         }
//     }
 
// }

// generateCombinations("dog")

// let str='webmaster'
// function alphoOrder(str){
//     return str.split('').sort().join('')
// }
// console.log(alphoOrder(str));


// const str='the quick brown fox'
// function firstletCap(str){
//     let word=str.split(' ')
//     for(let i=0;i<word.length;i++){
//         word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1)
//     }
//     return word.join(' ')
// }
// console.log(firstletCap(str));


// const str='my name is shreyash'
// function firstWordCapital(str){
//     let word=str.split(' ')
//     for(let i=0;i<word.length;i++){
//         word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1)
    
//     }
//     return word.join(' ')
// }
// console.log(firstWordCapital(str));










// function FirstletterCapital(str){
//     let string=''
//     let word=str.split(' ')
//     for(let i=0;i<word.length;i++){
//         word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1)
//     }
//     return word.join(' ')
// }
// console.log(FirstletterCapital(str));



// const str='web development tutorial'
// function Findlargest(str){
//     let largestword=''

//     let word=str.split(' ')
//     for(let i=0;i<word.length;i++){
//         if(word[i].length>largestword.length){
//             largestword=word[i]
            
//         }
//     }
//     return largestword

// }
// console.log(Findlargest(str));

// const str='i will do it anyhow'
// function findlargest(str){
//     let largestword=''
//     let word=str.split(' ')
//     for(let i=0;i<word.length;i++){
//         if(word[i].length>largestword.length){
//             largestword=word[i]
//         }
//     }
//     return largestword
// }
// console.log(findlargest(str));

// const str='celebration'
// const str2='shreyash'
// function countVowel(str){
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if('aeiouAEIOU'.includes(str[i])){
//             count++
//         }
        
//     }
//     return count
// }
// console.log(countVowel(str));

// function checkPrime(num) {
//     if(num <=0){
//         return false
//     }
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkPrime(7));

// function getType(value){
//     return typeof value
// }
// console.log(getType(42));
// console.log(getType('shreyash'));
// console.log(getType(true));
// console.log(getType({}));
// console.log(getType(function(){}));
// console.log(getType(undefined));


// function indentitymatrix(n){
// const matrix=[]
// for (let i = 0; i < n; i++) {
//     matrix[i]=[]
//     for(let j=0;j<n;j++){
//         matrix[i][j]=i===j?1:0
//     }
    
// }
// return matrix
// }
// console.log(indentitymatrix(3));

// function findSecondLowestAndGreatest(numbers) {
//     // Sort the array in ascending order
//     const sortedAscending = numbers.sort((a, b) => a - b);
    
//     // Sort the array in descending order
//     const sortedDescending = numbers.sort((a, b) => b - a);
    
//     // Second lowest number is at index 1 in the ascending sorted array
//     const secondLowest = sortedAscending[1];
    
//     // Second greatest number is at index 1 in the descending sorted array
//     const secondGreatest = sortedDescending[1];
    
//     return [secondLowest, secondGreatest];
// }

// // Example usage:
// const numbers = [1, 2, 3, 4, 5];
// const [secondLowest, secondGreatest] = findSecondLowestAndGreatest(numbers);
// console.log(secondLowest, secondGreatest); // Output: 2 4
// const number =[1,2,3,4,5]
// function findSecondLandG(arr){
//     const sortedAscending=number.slice().sort(function(a,b) {
//         return  a-b
//     })
//     const sortdecending=number.slice().sort(function(a,b){
//         return b-a
//     })
//     const secondLowest=sortedAscending[1]
//     const secondGreatest=sortdecending[1]

//     return [secondLowest,secondGreatest]

// }
// console.log(findSecondLandG(number));

// function findPerfectNumber(number){
//     if(number<2){
//         return false
//     }
//     let sum=1;
//     for(let i=2;i<=number/2;i++){
//         if(number%i===0){
//             sum=sum+i
//         }
//     }
//     return sum===number
// }
// console.log(findPerfectNumber(6));
// console.log(findPerfectNumber(10));

// function findTheperfectNumber(number){
//     if(number<2){
//       return false
//     }
//     let sum=1
//     for(let i=2;i<=number/2;i++){
//         if(number%i===0){
//             sum=sum+i
//         }
//     }
//     return sum===number
// }
// console.log(findTheperfectNumber(6));



// function findFactor(num){
//     if(num<=0){
//         return 'input must be positie integer'
//     }
//     const factor=[]
//     for(let i=1;i<=num;i++){
//         if(num%i===0){
//             factor.push(i)
//         }
//     }
//     return factor
// }
// console.log(findFactor(12));
// function findtheFactor(num){
//     if(num<=0){
//         return'input should be positive number'
//     }
//     let factor=[]
//     for(let i=1;i<=num;i++){
//         if(num%i===0){
//             factor.push(i)
//         }
//     }
//     return factor.join(',')
// }
// console.log(findtheFactor(5));
 

// function expo(x,y){
//     var num=1;
//     for(var i=1;i<=y;i++){
//         num=num*x;
//     }
//     return num;
// }
// var result=expo(2,4)
// console.log(result);


// function expo(x,y){
//     let ans=1;
//     for(let i=1;i<=y;i++){
//         ans=ans*x
//     }
//     return ans

// }
// console.log(expo(2,3));

// const str= "thequickbrownfoxjumpsoverthelazydog"
// function deletedup(str){
//     let result=''
//     for(let i=0;i<str.length;i++){
//        let char=str[i]
//        if(str.indexOf(char)===i){
//         result=result+char
//        }
//     }
//     return result
// }
// console.log(deletedup(str));
// const str='mynameisshreyash'
// function uniquecharacter(){
//     let result=''
//     for(let i=0;i<str.length;i++){
//         if(str.indexOf(str[i])===i){
//             result+=str[i]
//         }
//     }
//     return result 
// }
// console.log(uniquecharacter(str));

// let str='shreyash'
// function countLetter(str){
//     let letterCount={}
//     for(let i=0;i<str.length;i++){
//         let char=str[i]
//         char=char.toLowerCase()
//         letterCount[char] = (letterCount[char] || 0) + 1;
//     }
//     return letterCount
// }
// console.log(countLetter(str));

// const str='my name is shreyash'
// function countletter(){
//     let letterCount=[]
//     for(let i=0;i<str.length;i++){
//         str[i].toLowerCase()
//         letterCount[str[i]]=(letterCount[str[i]]||0)+1

// }
// return letterCount
// }
// console.log(countletter(str));
// const arr=[12,13,14,15,16,17]
// function findElementgre(arr,num){
// return arr.filter(function(element){
//    return element>num
// })
// }
// console.log(findElementgre(arr,15));

// function generateRandomString(length){
//     const character='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'
//     let result=''
//     for(let i=0;i<length;i++){
//         const randomIndex=Math.floor(Math.random()*character.length)
//         result+=character.charAt(randomIndex)
//     }
//     return result
// }
// console.log(generateRandomString(8));

// function countOccurrence(string,letter){
// let count=0;
// for(let i=0;i<string.length;i++){
//     if(string[i]===letter){
//         count++
//     }
// }
// return count
// }
// const str='shreyashsalame'
// const letter='a'
// let result=countOccurrence(str,letter)
// console.log(result);
// const str='hello my name is shreyash'
// function countocuurance(str,letter){
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if(str[i]===letter){
//             count++
//         }
//     }
//     return count
// }
// console.log(countocuurance(str,'e'));




// const str= 'abacddbec'
// function notRepeating(str){
// let charcount={}
// for(let i=0;i<str.length;i++){
//     charcount[str[i]]=(charcount[str[i]]|| 0)+1
// }
// for(let i=0;i<str.length;i++){
//     if(charcount[str[i]]===1){
//         return str[i]
//     }
// }
// return null
// }
// console.log(notRepeating(str));


// const str='shreyash'
// function nonrepeating(str){
//     let charcount={}
//     for(let i=0;i<str.length;i++){
//         charcount[str[i]]=(charcount[str[i]] || 0)+1
//     }
//     for (let i = 0; i < str.length; i++) {
//         if(charcount[str[i]]===1){
//             return str[i]
//         }
        
//     }
//     return null
// }
// console.log(nonrepeating(str));




// function longestCountryName(countryNames) {
//     let longestName = '';

//     for (let i = 0; i < countryNames.length; i++) {
//         if (countryNames[i].length > longestName.length) {
//             longestName = countryNames[i];
//         }
//     }

//     return longestName;
// }

// // Test the function with the sample input
// const sampleCountries = ["Australia", "Germany", "United States of America"];
// const longestName = longestCountryName(sampleCountries);
// console.log(longestName);


// // Define a function that takes another function as a parameter
// function higherOrderFunction(callback) {
//     // Call the callback function
//     callback();
// }

// // Define a function that will be passed as a parameter
// function myFunction() {
//     console.log("Hello from myFunction!");
// }

// // Call the higher order function and pass myFunction as a parameter
// higherOrderFunction(myFunction);

// const arr=[0,2,3,5,2]
// function findPeak(arr){
//     let left=0
//     let rigth=arr.length-1

//     while(left < rigth){
//         let mid=Math.floor((left+rigth)/2)
//         if(arr[mid]>arr[mid+1]){
//             rigth=mid
//         }else{
//             left=mid+1
//         }
//     }
//     return arr[left]
// }
// console.log(findPeak(arr));


// const arr=[1,2,3,6,2,7,8]
// function findThePeak(arr){
//      let left =0
//      let right=arr.length-1
//      while(left < right){
//         let mid=Math.floor((left+right)/2)
//         if(arr[mid]>arr[mid+1]){
//             right=mid
//         }else{
//             left=mid+1
//         }
//      }
//      return arr[left]
// }
// console.log(findThePeak(arr));