// var color = "red";
// // color=="red"?console.log(true):console.log(false);
// if(color==="red") console.log("true");
// else console.log("false");

// let str="shreyashsalame"
// let capital=""
// for(let i=0;i<str.length;i++){
// if(i%2===0){
//     capital=capital+str[i].toUpperCase()
// }
// else{
//     capital=capital+str[i]
// }
// }
// console.log(capital);

// function perfectsquare(num){
//     for(let i=1;i<=Math.sqrt(num);i++){
//         if(i*i===num){
//             return 'perfect square'
//         }
//     }
//     return'not perfect square'
// }
// console.log(perfectsquare(25));

// const obj = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   };
//   const func = obj.greet;
// func();
// const arr = [1, 2, 3];
// const newArr = arr.map(function(value) {
//   return value * 2;
// });
// const arr = [1, 2, 3];
// const newArr = arr.map(function(value) {
//   return value * 2;
// });
// const num = 10;
// const obj = {
//   [num]: 'value'
// };
// console.log(obj['10']);
// const obj = { a: 1, b: 2 };
// const { a, ...rest } = obj;
// console.log(rest);
// const arr = [1, 2, 3];
// arr.length = 0;

// console.log(arr);
// const arr = [1, 2, 3];
// const newArr = arr.map(function(value) {
//   return value * 2;
// });

// console.log(newArr);

// const arr=[1, 5, 3, 4, 3, 5, 6];

// function removedup(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//           return arr[i]
//         }
//       }
//   }
// return -1
// }
// console.log(removedup(arr))
//  const arr=[0, 0, 1, 0, 1, 0, 0, 1];
//  function index(arr){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]===1){
//       return i
//     }
//   }
//   return-1
//  }
//  console.log(index(arr));

// const arr= [16, 8, 23, 4, 15];
// function target(value){
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i]+arr[j]===value){
//         return [i,j]
//       }
//     }
//   }
//   return-1
// }
// console.log(target(19));


// const arr=[1,2,3,4,5]
// let res=arr.map(function(value){
//   return value*2
// })
// console.log(res);



// const arr=[1,2,3,4,5,6,7,8,9,10]
// let result=arr.filter(function(value){
//    if(value<8){
//     return value
//    }
// })

// console.log(result);

// function repeatingele(arr){
//   let repeatingelement=0;
//   let mostrepeat;
//   for(let i=0;i<arr.length;i++){
//      let count=0;
//      for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//           count++;
//       }
//     }
//       if(count>repeatingelement){
//         repeatingelement=count
//         mostrepeat=arr[i]
//       }
//   }


// return mostrepeat
// }

// const arr=[1,2,3,4,5,6,7,8,9,10,4,4,4,4,4,9,9,9,9,9,9]
// const mostrepeat=repeatingele(arr)
// console.log(mostrepeat);



// const arr=[1,2,3,4,4,4,4,6,5,8,7,3,3,3,3,3,3]
// function repeatElement(arr){
// let maxfreq=0;
// let mostRepeating;
// count=0;
// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]===arr[j]){
//       count++
//     }
//   }
//   if(count>maxfreq){
//     maxfreq=count
//     mostRepeating=arr[i]
//   }
// }
// return mostRepeating
// }
// console.log(repeatElement(arr));



//swap first and last element


// const arr=[1,2,3,4,5]
// function swap(arr){
// let temp=arr[0];
// arr[0]=arr[arr.length-1]
// arr[arr.length-1]=temp;
// return arr
// }
// console.log(swap(arr));
// const arr=[1,2,3,4,5]
// function swap(arr){
//     let temp=arr[0];
//     arr[0]=arr[arr.length-1]
//     arr[arr.length-1]=temp;
//     return arr;
// }
// console.log(swap(arr));




//largest three element

// const arr=[1,5,3,9,10,12,50]
// function largelement(arr){
//    arr.sort(function(a,b){
//     return b-a
//   })
//  const largestTree=arr.slice(0,3)
//  return largestTree
// }
// console.log(largelement(arr));

// const arr=[1,5,3,9,10,12,50]
// function largestelement(arr){
//     arr.sort(function(a,b){
//         return b-a
//     })
//     const largestthree=arr.slice(0,3)
//     return largestthree
// }
// console.log(largestelement(arr));

// const arr=[1,5,3,9,10,12,50]
// function largest(arr){
//   let largestnumber=arr[0]
//   for(let i=1;i<arr.length;i++){
//      if(arr[i]>largestnumber){
//       largestnumber=arr[i]
//      }
//   }
//   return largestnumber
  
// }
// console.log(largest(arr));


// const arr=[1,5,3,9,10,12,500]
// function largestelement(arr){
//     let largestnumber=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largestnumber){
//             largestnumber=arr[i]
//         }
//     }
//     return largestnumber
// }
// console.log(largestelement(arr));


// const arr=[1,5,3,9,10,12,50]
// function smallest(arr){
//   let smallestnumber=arr[0]
//   for(let i=1;i<arr.length;i++){
//      if(arr[i]<smallestnumber){
//       smallestnumber=arr[i]
//      }
//   }
//   return smallestnumber
  
// }
// console.log(smallest(arr));

// const arr=[-1,-2,-3,-4,1,2,3,4]
// function negative(arr){
//    for(let i=0;i<arr.length;i++){
//     if(arr[i]>=0){
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < 0) {
//             // Swap arr[i] and arr[j]
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             break;
//         }
//     }
// }
// }

// return arr;
// }


// console.log(negative(arr));



// rotate array from any element d
// const arr=[1,2,3,4,5,6,7,8,9,10]
// function rotate(arr,d){
//   const rotatearray=arr.slice(0,d);
//   const remainingarray=arr.slice(d);
//   return [...remainingarray, ...rotatearray]
// }
// console.log(rotate(arr,5));

// const arr=[1,2,3,4,5,6,7,8,9,10]
// function rotate(arr,d){
//     const rotatearray=arr.slice(0,d)
//     const remainingarray=arr.slice(d)
//     return [...remainingarray,...rotatearray]
// }
// console.log(rotate(arr,4));



// Rotate the array anticlockwise by d times.
// let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// function rotateArrayAntiClockwise(arr, d) {
//   const n = arr.length;
//   const rotatedPart = arr.slice(n - d);
//   const remainingPart = arr.slice(0, n - d);
  
//   return [...rotatedPart, ...remainingPart];
// }
// console.log(rotateArrayAntiClockwise(arr,4));

// let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// function rotateArrayAntiClockwise(arr,d){
//     const n=arr.length
//     const rotatearray=arr.slice(n-d)
//     const remainingarray=arr.slice(0,n-d)
//     return [...rotatearray,...remainingarray]
// }
// console.log(rotateArrayAntiClockwise(arr,3));

// let arr=[1,2,3,4,5]
//   let result=arr.sort(function(a,b){
//     return b-a
//   })
// console.log(result);

// let arr=[1,2,3,4,5]
// let reverse=[];
// for(let i=arr.length-1;i>=0;i--){
// reverse.push(arr[i])
// }
// console.log(reverse);

// const arr=[1,2,3,4,5]
// function rotate(arr){
//   let lastElement=arr[arr.length-1]
//   for(i=arr.length-1;i>=0;i--){
//     arr[i]=arr[i-1]
//   }
//   arr[0]=lastElement
//   return arr
// }
// console.log(rotate(arr));

// const arr=[1,2,3,4,5]
// function rotate(arr){
//    let lastElement=arr[arr.length-1]
//    for(let i=arr.length-1;i>=0;i--){
//     arr[i]=arr[i-1]
//    }
//    arr[0]=lastElement
//    return arr
// }
// console.log(rotate(arr));










// const arr=[1,2,3,4,5]
// function rotatearray(arr,d){
//   for(let i=0;i<d;i++){
//     let result=arr.shift();
//     arr.push(result)
//   }
//   return arr
// }
//  console.log(rotatearray(arr,4));

// const arr=[1,2,3,4,5]
// function rotatearray(arr,d){
//   for(let i=0;i<d;i++){
//     let result=arr.pop();
//     arr.unshift(result)
//   }
//   return arr
// }
// console.log(rotatearray(arr,4));


// const arr=[ 1,2,3,1,1,4,5,'rome','shree','rome']
// function removearray(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=1+i;j<arr.length;j++){
//       if(arr[i]===arr[j]){
//         arr.splice(j,1)
//         j--
//       }
//     }
//   }
//   return arr
// }
// console.log(removearray(arr));


// const arr=[10,10,20,20,30]
// function singleout(arr){
//     for (let i=0;i<arr.length;i++){
//         for(let j=1+i;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 arr.splice(j,1)
//                 arr.splice(i,1)
//                 j--
//                 i--
//             }
//         }
//     }
//     return arr
// }
// console.log(singleout(arr));

// const arr = [10, 10, 10, 20, 20, 30,30];
// function nonduplicate(arr){
//     let result=0
//     for (let num of arr) {
//         result^=num
//     }
//     return result
// }
// console.log(nonduplicate(arr));








// function removeDuplicates(arr) {
//     const counts = [];
//     for (let i = 0; i < arr.length; i++) {
//         counts[arr[i]] = (counts[arr[i]] || 0) + 1;
//     }
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (counts[arr[i]] === 1) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(removeDuplicates(arr));
