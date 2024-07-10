// function isArray(input){
//     return Array.isArray(input)
// }
// console.log(isArray([1,2,3]));
// console.log(isArray('shree'));



// const arr=[1,2,3,4,5]
// function removeNelement(arr,n){
//  arr.splice(n,1)
//  return arr
// }
// console.log(removeNelement(arr,2));


// const arr=[1,2,3,4,5,6]
// function removeNelement(arr,n){
//     let newArray=[]
//     for(let i=0;i<arr.length;i++){
//         if(i!==n-1){
//             newArray.push(arr[i])
//         }
//     }
//     return newArray
// }
// console.log(removeNelement(arr,1));


// function insertDashes(number){
//     const strnumber=number.toString()
//     let result=strnumber[0]

//     for(let i=1;i< strnumber.length;i++){
//         if(strnumber[i-1]%2===0 && strnumber[i]%2===0){
//             result += '-';
//         }
//         result +=strnumber[i]
//     }
//     return result
// }
// const number=23458;
// console.log(insertDashes(number));

// var num=23456
// var str = num.toString();
// var result = [str[0]];
  
// for(var x=1; x<str.length; x++)
//   {
//     if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
//      {
//       result.push('-', str[x]);
//      }
//     else
//      {
//       result.push(str[x]);
//      }
//   }
// console.log(result.join(''));
// function bubbleSort(arr) {
//     const length = arr.length;
//     for (let i = 0; i < length - 1; i++) {
//       for (let j = 0; j < length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // Swap elements
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }
  
//   const arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//   console.log(bubbleSort(arr1).join(','));
// const arr=[ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
//   function sort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 const temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
//   }
//   console.log(sort(arr));

// const arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// function findMostFrequent(){
//     let mostfre=0;

//     let mostrepeating;
//     for(let i=0;i<arr.length;i++){
//        let count=0
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
// console.log(findMostFrequent(arr));


// const str='The Quick Brown Fox'
// function changeText(str){
//    let newString= str.toUpperCase().split(' ')
//     for(let i=0;i<newString.length;i++){
//         let char=newString[i]
//        newString[i]= char.charAt(0).toLowerCase() + char.slice(1)
//     }
//     return  newString.join(' ')

// }
// console.log(changeText(str));

// const arr=[1,2,3,4,5]
// function sumOfsquare(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]*arr[i]
//     }
//     return sum
// }
// console.log(sumOfsquare(arr));

// const arr=[1,2,3,4,5]
// function sumOfsquare(arr){
//     let sum=0;
//     let product=1
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//         product=product*arr[i]
//     }
//     return {
//         sum: sum,
//         product: product
//     }
// }
// console.log(sumOfsquare(arr));

// function findLeapYears(startyear,endyear){
//     const leapyear=[]
//     for(let year=startyear;year<=endyear;year++){
//         if((year%4===0 && year%100!==0) || (year%400===0)){
//             leapyear.push(year)
//         }
//     }
//     return leapyear
// }
// console.log(findLeapYears(2000,2020));'
// // function shuffleArray(array) {
//     // Iterate from the end to the beginning of the array
//     for (let i = array.length - 1; i > 0; i--) {
//         // Generate a random index within the range of 0 to i (inclusive)
//         const j = Math.floor(Math.random() * (i + 1));
        
//         // Swap the current element with the randomly selected element
//         [array[i], array[j]] = [array[j], array[i]];
//     }
    
//     return array; // Return the shuffled array
// }

// // Example usage:
// const originalArray = [1, 2, 3, 4, 5];
// const shuffledArray = shuffleArray(originalArray);
// console.log("Original Array:", originalArray);
// console.log("Shuffled Array:", shuffledArray);


// const arr=[1,2,3,4,5,6,7,8,9,10]
// function showIndex(arr,target){
//     for(let i=0;i<=target;i++)
//         if(arr[i]===target){
//         return i
//         }
        
// }
// console.log(showIndex(arr,1));

// const arr1 = [1, 0, 2, 3, 4];
// const arr2 = [3, 5, 6, 7, 8, 13];
// function sumofarray(arr1,arr2){
//     let sumArray=[]

//     const maxlength=Math.max(arr1.length,arr2.length)
//     for(let i=0;i<maxlength;i++){
//         const value1 = arr1[i] || 0;
//         const value2 = arr2[i] || 0;
//         const sum=value1+value2
//         sumArray.push(sum)
//     }
//     return sumArray
//     }
//     console.log(sumofarray(arr1,arr2));

// const number=[1,2,3,4,5,6]
// const sum=number.reduce(function(acc,currentvalue){
//     return acc+currentvalue
// },0)
// console.log(sum);

// const number=[10,37,487,85,83]
// const maxNumber=number.reduce(function(acc,currentValue){
//     return Math.max(acc,currentValue)
// },-Infinity)
// console.log(maxNumber);

// const number=[1,2,3,4,5]
// function SquareofNumber(number){
// return number.map(function(element){
//     return element*element
// })
// }
// console.log(SquareofNumber(number));

// const arr= ["Alice", "Bob", "Charlie", "David"];
// function createsname(arr){
//     return arr.map(function(name){
//         return {name: name,length: name.length}
//     })
// }
// console.log(createsname(arr));
// const students = [
//     { name: "Alice", age: 22 },
//     { name: "Bob", age: 18 },
//     { name: "Charlie", age: 25 },
//     { name: "David", age: 20 }
//   ]
//   function filterStudentByAge(students){
//     return students.filter((student)=> student.age >20)
//     .map((student) =>student.name)
//   }
//   console.log(filterStudentByAge(students));

// const strings = ["hello", "world", "javascript"];
// function reverseTheString(string){
//     return strings.map(string =>string.split('').reverse().join(''))
// }
// console.log(reverseTheString(strings));

// const students = [
//     { name: "Alice", grade: 85 },
//     { name: "Bob", grade: 70 },
//     { name: "Charlie", grade: 95 },
//     { name: "David", grade: 60 }
//   ];
//   function findMarks(students){
// return students.filter(function(student){
//     return student.grade<80
// })
// .map(function(student){
//     return student.name
// })
//   }
//   console.log(findMarks(students));
// const expenses = [
//     { category: "Food", amount: 50 },
//     { category: "Transport", amount: 30 },
//     { category: "Food", amount: 20 },
//     { category: "Shopping", amount: 100 },
//     { category: "Transport", amount: 40 }
//   ];

//   function calculateTotalExpence(expences){
// return expenses.reduce(function(acc,expence){
//   const {category,amount}=expence
//   acc[category] = (acc[category] || 0) + amount;
//     return acc;
// },{})
//   }
//   console.log(calculateTotalExpence(expenses));
// const products = [
//   { product: "Laptop", price: 1000 },
//   { product: "Phone", price: 500 },
//   { product: "Headphones", price: 100 }
// ];
// function findThesum(products){
//   return products.reduce(function(acc,product){
//     return acc+product.price
//   },0)
// }
// console.log(findThesum(products));
// const products = [
//   { product: "Laptop", price: 1000 },
//   { product: "Phone", price: 500 },
//   { product: "Headphones", price: 100 }
// ];
// function calculateTotalPrice(products){
//   let totalprice=0
//   products.forEach(product => {
//     totalprice+=product.price
//   });
//   return totalprice
// }
// console.log(calculateTotalPrice(products));