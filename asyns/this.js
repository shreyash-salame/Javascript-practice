// const obj={
//     name:'akshay',
//     printname:function(){
//         console.log(this.name);
//     }
// }
// obj.printname()


// const obj2={
//     a:20,
//     x:function(){
//         const y=() =>{
//             console.log(this)
//         }
//         y();
//     }
// }
// obj2.x()
// function filterArray(arr, callback) {
//     let filteredArr = arr.filter(callback);
//     callback(filteredArr);
// }

// // Example usage:
// filterArray([1, 2, 3, 4, 5], function(result) {
//     console.log("Filtered Array:", result);
// });
// const p= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:'shreyash'})
//     },2000)
// })
// p.then((data)=>{
//     console.log(data);
// }).catch(()=>{
//     console.log('rejected');
// })
//  async function req(){
//   const url='http;mklfknskdnmfkSKDFMK;mdk;fmeeEE'
//   const response= await fetch(url)
//   console.log(response)

// }
// function addTwonumber(){
//   return 5+6
// }
// try{
//   console.log(a);
// }catch(err){
//   console.log(err);
// }
// console.log(3+7);


// Write a function that returns a promise which resolves to a given number.Then, chain another promise to it which doubles the resolved value.Finally, chain another promise which subtracts 10 from the doubled value.Console log the final result.

// function returnPromise(number){
//   return  new Promise((resolve,reject)=>{
//     resolve(number)
//   })
//   .then((num)=>num*2)
//   .then((doublenumber)=>doublenumber-10)
// }
// returnPromise(100).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })


// function isPrime(number){
// return new Promise((resolve,reject)=>{
//  for(let i=2;i<=number;i++){
//   if(number%i!==0){
//     resolve(true)
//   }
//  }
//  resolve(false)
// })
// }
// isPrime(7).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })
// [0,1,1,2,3,5]
// function generateFab(n){
//   return new Promise((resolve, reject) => {
//     let series=[0,1]
//     for(let i=2;i<=n;i++){
//       series.push(series[i-1]+series[i-2])
//       resolve(series)
//     }
//     reject("reject")
//   })

// }
// generateFab(7).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })
// function delayecho(message ,delay){
// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//    resolve(message);
//   },delay)
// })
// }
// delayecho("hello",2000)
// .then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })

// function sumOfArray(arr){
//   return new Promise((resolve,reject)=>{
//     let sum=arr.reduce((acc,currentvalue)=> acc+ currentvalue,0)
//     resolve(sum)
//     if(!Array.isArray(arr)){
//       reject('put array')
//     }
//   })
// }
// sumOfArray([1,2,3,4,5])
// .then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })

// function reverseString(str){
//   return new Promise((resolve,reject)=>{
//     if( typeof str !=='string'){
//       reject('input string')
//     }
//       let reverse='';
//       for(let i=str.length-1;i>=0;i--){
//         reverse+=str[i]
        
//       }
//       resolve(reverse)
//   })
// }
// reverseString(1).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })
function Stopwatch() {
  let start, end, duration = 0;

  this.start = function () {
    start = new Date();
    console.log("Stopwatch started.");
  };

  this.stop = function () {
    end = new Date();
    let seconds = (end.getTime() - start.getTime())/1000;
    duration += seconds;
    console.log("Stopwatch stopped.");
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    }
  });
}

let stpwatch = new Stopwatch();

stpwatch.start();
setTimeout(() => {
  stpwatch.stop();
  console.log("Duration:", stpwatch.duration);
},5000);