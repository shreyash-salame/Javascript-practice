// const arr=[3, 'a', 'a', 'a', 2, 3, 'a', 'a', 2, 4, 9, ];
// function findmostfrequent(arr){
//     let mostfre=0;
//     let count=0;
//     let mostrepeating;
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 count++
//             }
//             if(count>mostfre){
//                 mostfre=count
//                 mostrepeating=arr[i]
//             }
//         }
//     }
//     return mostrepeating
// }
// console.log(findmostfrequent(arr));



// const str='The Quick Brown Fox'
// function changeText(str){
// let newstr=str.toUpperCase().split(' ')
// for(let i=0;i<newstr.length;i++){
//     let char=newstr[i]
//     newstr[i]=char.charAt(0).toLowerCase()+char.slice(1)
// }
// return newstr.join(' ')
// }
// console.log(changeText(str));




// function findLeapYear(staryear,endyear){
//     let leapyears=[]
//     for(let year=staryear;year<=endyear;year++){
//     if((year%4===0 && year%100!==0) || (year%400===0)){
//         leapyears.push(year)
//     }
    
// }
// return leapyears
// }
// console.log(findLeapYear(2000,2024));

// const arr1=[1,0,2,3,4]
// const arr2 = [3, 5, 6, 7, 8, 13];
// function sumofarray(arr1,arr2){
//     let sumofArray=[]

//     const maxlength=Math.max(arr1.length,arr2.length)
//     for(let i=0;i<maxlength;i++){
//         const value1= arr1[i] || 0;
//         const value2= arr2[i] || 0;
//         const sum=value1+value2
//         sumofArray.push(sum)
//     }
//     return sumofArray
// }
// console.log(sumofarray(arr1,arr2));

// const expenses = [
//     { category: "Food", amount: 50 },
//     { category: "Transport", amount: 30 },
//     { category: "Food", amount: 20 },
//     { category: "Shopping", amount: 100 },
//     { category: "Transport", amount: 40 }
//   ];

//   function calculatetotalespence(expences){
//     return expences.reduce(function(acc,expence){
//         const {category,amount}=expence
//         acc[category]=(acc[category]||0)+amount
//         return acc
//     },{})
//   }
//   console.log(calculatetotalespence(expenses));

// const str='web development tutorial'
// function findlargestnumber(str){
//       let largestword=''
//       let word=str.split(' ')
//       for(let i=0;i<word.length;i++){
//         if(word[i].length>largestword.length){
//             largestword=word[i]
//         }
//       }
//       return largestword
// }
// console.log(findlargestnumber(str));


// function checkPrime(num){
//     if(num<=0){
//         return false
//     }
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkPrime(9));

// const numbers=[1,2,3,4,5,6,7,8,9,10]
// function findnumbers(number){
// const ascending=numbers.sort(function(a,b){
//     return a-b
// });
// const descending=numbers.sort(function(a,b){
//     return b-a
// });
//  const secondlowest=ascending[1]
//  const secondGreatest=descending[1]
//  return [secondlowest,secondGreatest]
// }
// console.log(findnumbers(numbers));


// function findperfectNumber(number){
//     if(number<2){
//         return false
//     }
//     let sum=1
//     for(let i=2;i<=number/2;i++){
//         if(number%i===0){
//            sum=sum+i
//         }
//     }
//     return sum===number
// }

// function findFactor(number){
// if(number<=0){
//     return 'input must be positive'
// }
// let factor=[]
// for(let i=1;i<=number;i++){
//     if(number%i===0){
//         factor.push(i)
//     }
// }
// return factor
// }
// console.log(findFactor(12));

// function expo(x,y){
//     let num=1
//     for(let i=1;i<=y;i++){
//        num=num*x
//     }
//     return num
// }
// console.log(expo(2,5));



// let str='shreyashsalame'
// function countletter(str){
//     let lettercount={}
//     for(let i=0;i<str.length;i++){
//         let char=str[i]
//         lettercount[char]=(lettercount[char] || 0)+1
//     }
//     return lettercount

// }
// console.log(countletter(str));




// const str='abacddbec'
// function nonrepeating(str){
//     let charcount={}
//     for(let i=0;i<str.length;i++){
//         charcount[str[i]]=( charcount[str[i]] ||0)+1
//     }
//     for(let i=0;i<str.length;i++){
//         if(charcount[str[i]]===1){
//             return str[i]
//         }
//     }
//     return null
    
// }
// console.log(nonrepeating(str));

// const arr=[8,34,6,7,84,678,1,4]
// function findthepeak(arr){
//      let left=0;
//      let right=arr.length-1
//      while(left< right){
//          let mid=Math.floor((left+right)/2)
//          if(arr[mid]>arr[mid+1]){
//             right=mid
//          }else{
//             left=mid+1
//          }
//      }
//      return arr[left]
// }
// console.log(findthepeak(arr));




// const arr=[1,2,3,4,5,6,7,8,9,10]
// function rotate(arr,d){
//     const rotatearray=arr.slice(0,d)
//     const remainingarray=arr.slice(d)
//     return [...remainingarray,...rotatearray]
// }
// console.log(rotate(arr,4));


// let arr = [1,2,3,4,5];
// function rorateanticlock(arr,d){
//        const n=arr.length
//        const rotatepart=arr.slice(n-d)
//        const remainingpart=arr.slice(0,n-d)
//        return [...rotatepart,...remainingpart]
// }
// console.log(rorateanticlock(arr,1));





// const arr=[1,2,3,4,5]
// function rotate(arr){
//     let lastElement=arr[arr.length-1]
//     for(let i=arr.length-1;i>=0;i--){
//         arr[i]=arr[i-1]
//     }
//     arr[0]=lastElement
//     return arr
// }
// console.log(rotate(arr));


// function binarytodecimal(num){
//     return num.toString(2)

// }
// console.log(binarytodecimal(10));
// console.log(binarytodecimal(5));