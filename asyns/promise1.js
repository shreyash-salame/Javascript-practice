// Write a function that returns a promise. This promise should resolve after a given number of milliseconds with a message "Promise resolved" and reject after another given number of milliseconds with a message "Promise rejected".
// function returnpromise(time1,time2){
// return p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise resolved')

//     },time1)
//     setTimeout(()=>{
//          reject('promise rejected')
//     },time2)
// })
// }
// returnpromise(2000,3000)
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// function returnpromise3(time1,time2){
//     return p=new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('promise resolved')
//       },time1);
//       setTimeout(() => {
//         reject('promise rejected')
//       },time2); 
//     })
// }returnpromise3(2000,3000).then((data)=>{
//     console.log(data);
// }).catch((Error)=>{
//     console.log(Error);
// })

// function returnPromise(time1,time2){
//     return  p = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           resolve("promise resolved")
//         },time1)
//         setTimeout(()=>{
//             reject("promise rejected")
//           },time2)
//     })
// }
// returnPromise(2000,3000).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// Write a function that returns a promise which resolves to a given number. Then, chain another promise to it which doubles the resolved value.Finally, chain another promise which subtracts 10 from the doubled value. Console log the final result
// function returnpromise(num){
//     return p=new Promise((resolve,reject)=>{
//         resolve(num)
//     }).then((num)=>num*2)
//     .then((doublevalue)=>doublevalue-10)
// }
// returnpromise(400)
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// function returnpromise4(num){
//     return p= new Promise((resolve, reject) => {
//         resolve(num)
//     }).then((num)=>num*2)
//     .then((doubledvalue)=>doubledvalue-10)
// }
// returnpromise4(200).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
// function returnPromise2(num){
//     return p=new Promise((resolve,reject)=>{
//         resolve(num)
//     })
//     .then((num)=>num*2)
//     .then((doubledValue)=>doubledValue-10)
// }
// returnPromise2(100).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
// Write a function that takes an array of promises which resolve to numbers. Use Promise.All to wait for all promises to resolve and then calculate their sum. Return a promise that resolves with the sum.
// const promises=[Promise.resolve(6),Promise.resolve(2),Promise.resolve(2)]
// function calculates(promises){
//     return Promise.all(promises)
//     .then((number)=>{
//         const sum=number.reduce((acc,cur)=>acc+cur,0)
//              return sum 
//     }) 
// }calculates(promises)
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// function calculateSum(promises){
//     return Promise.all(promises)
//     .then((numbers)=>{
//         const sum=numbers.reduce((acc,curr)=>acc+curr,0)
//         return sum
//     })
    
// }calculateSum(promises)
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log((err));
// })

// const promises=[Promise.resolve(3),Promise.resolve(7),Promise.resolve(10)]

// function calculateSum(promises){
//     return Promise.all(promises)
//     .then(numbers =>{
//         const sum=numumbers.reduce((acc,curr)=>acc+curr,0)
//         return sum
//     })
// }
// calculateSum(promises)
// .then((sum)=>{
//     console.log(sum);
// }).catch((err)=>{
//     console.log((err));
// })
//  Write a function that takes an array of promises which resolve after different amounts of time.Use Promise.race to return a promise that resolves with the value of the first resolved promise.


// const promises=[
//      new Promise(resolve=> setTimeout(()=>resolve('first'),1000)),
//      new Promise(resolve=> setTimeout(()=>resolve('second'),500)),
//      new Promise(resolve=> setTimeout(()=>resolve('thrid'),2000)),
// ]
// function firstResolved(promises){
//     return Promise.race(promises)
// }
// firstResolved(promises)
// .then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log((err));
// })

// const promises=[
//     new Promise(resolve=>setTimeout(()=>resolve('first'),2000)),
//     new Promise(resolve=>setTimeout(()=>resolve('second'),1000)),
//     new Promise(resolve=>setTimeout(()=>resolve('third'),500)),
// ]
// function firstResolved(promises){
//     return Promise.race(promises)
// }
// firstResolved(promises)
// .then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log((err));
// })

// Write a function that returns a promise. Within the promise, randomly throw an error with a probability of 30 % and resolve with a number otherwise.Handle the error using.catch() and log the error message if the promise is rejected.
// function randomPromise(){
//     return new Promise((resolve,reject)=>{
//         const randomNumber=Math.random()
//         if(randomNumber<0.3){
//             reject('error occured')
//         }else{
//             resolve(Math.floor(Math.random()*100))
//         }
//     })
// randomPromise()
// .then((data)=>{
//     console.log('resolved with',data);
// }).catch((err)=>{
//     console.log('error',err);
// })


// function randomPromise(){
//     return new Promise((resolve,reject)=>{
//         const randomNumber=Math.random()
//         if(randomNumber<0.3){
//             reject(new Error('error occured'))
//         }else{
//             resolve(Math.floor(Math.random()*100))
//         }
//     })
// }
// randomPromise()
// .then((data)=>{
//     console.log('resolved with',data);
// }).catch((err)=>{
//     console.log('error',err);
// })







