//  function factorial(n){
//     if(n==0||n===1){
//         return 1
//     }
//     else{
//         return n*factorial(n-1)
//     }
//  }
//  console.log(factorial(5));

// function factorial(n){
//     if(n===0 ||n===1){
//         return 1
//     }else{
//         return n*factorial(n-1)
//     }
// }
// console.log(factorial(5));

// const a=48
// const b=18
// function hcf(a,b){
//     if(b===0){
//         return a
//     }else{
//         return hcf(b,a%b)
//     }
// }
// console.log(hcf(a,b));


// const x=2
// const y=9
// function range(x,y){
//     let result=[]
//     if(x>=y-1){
//         return result
//     }else{
//         result.push(x+1)
//         return result.concat(range(x+1,y))
//     }

// }
// console.log(range(x,y));
// const arr=[1,2,3,4,5,6]
// function sumOfArray(arr){
//     if(arr.length===0){
//         return 0
//     }else{
//      return  arr[0]+sumOfArray(arr.slice(1)) 
//     } 
// }
// console.log(sumOfArray(arr));

// function iseven(number){
//     if(number===0){
//          return true
//     }else if(number===1){
//        return false
//     }else{
//         return iseven(number-2)
//     }
// }
// console.log(iseven(9));

// function fibonacci(n){
//     if (n<=1) {
//         return n
//     }else{
//       return fibonacci(n-1)+fibonacci(n-2)
//     }
// }
// function fiboSeries(terms){
//     let series=[]
//     for(let i=0;i<terms;i++){
//         series.push(fibonacci(i))
//     }
//     return series
// }
// console.log(fiboSeries(5));

// const arr=[1,2,3,4,5]
// function sumArray(arr){
//     if(arr.length===0){
//         return 0
//     }else{
//         return arr[0]+sumArray(arr.slice(1))
//     }
// }
// console.log(sumArray(arr));

// function power(x,y){
//     if(y===0){
//         return 1
//     }else{
//         return x*power(x,y-1)
//     }
// }
// console.log(power(2,3));

// const str='hello'
// function reversestring(str){
//     if(str===''){
//         return ''
//     }else{
//         return reversestring(str.substr(1))+str.charAt(0)
//     }
// }
// console.log(reversestring(str));