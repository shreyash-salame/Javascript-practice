/*Write a function named fetchUserData that fetches user data from an API asynchronously. 
The API endpoint is https://api.example.com/users.
 The function should return a promise that resolves with an array of user objects,
 where each object represents a user and contains id, name, and email properties.
  Simulate a delay of 1.5 seconds for the API request.*/
  // function fetchUserData(){
  //    let p;
  //    p=new Promise(async(resolve,reject)=>{
  //     let res;
  //     setTimeout(async()=>{
  //       try {
  //         res=await fetch("https://api.example.com/users.")
  //         resolve(res)
  //       } catch (error) {
  //         resolve([{name: 'abc', id: 1, email: "dnkeje"},{name:'shreyash',id:2,email:'12345'}])
  //       }
       
  //     },1500)
  //    })
  //  return p
  // }
  //  let pro=fetchUserData()
  //  pro.then((data)=>console.log(data))




// function fetchUserdata() {
//   let p;
//   p = new Promise(async (resolve, reject) => {
//       let res;
//       setTimeout(async () => {
//         try {
//           res = await fetch('https://api.example.com/users');
//           resolve(res);
//         }
//         catch(err) {
//           resolve([{name: 'abc', id: 1, email: "dnkeje"},{name:'shreyash',id:2,email:'12345'}])
//         }
//       }, 1500);
//   });
 
//   return p;
// };
 
// let pro = fetchUserdata();
 
// pro
//   .then((data) => {console.log(data)})

//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second

// function delayInvoke(callback){
//   setTimeout(callback,2000);
// }
// function mycallback(){
//   console.log('callback after 2 sec');
// }
// delayInvoke(mycallback);



 function delayInvoke(callback){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(mycallback())
    }, 2000);
  })
 }
function mycallback(){
  console.log('hello');
}
delayInvoke(mycallback)
.then((data)=>{
  console.log('promise resolved');
})
.catch((err)=>{
  console.log('not resolved');
})


//callback function to promisebased functions

// function callBacktopromise(fn){
//   return function(...args){
//     return new Promise((resolve,reject)=>{
//      fn(...args,(err,data)=>{
//       if(err){
//         reject(err)
//       }else{
//         resolve(data)
//       }
//      }) 
//     })
//   }
// }
// function callbackBasedfunction(x,y,callback){
//   setTimeout(() => {
//     if(x+y>10){
//       callback(null,'sum is greater than 10')
//     }else{
//       callback(new Error('sum is not grater than 10'))
//     }
//   }, 1000);
// }
// const promisebasedFunction= callBacktopromise(callbackBasedfunction)
// promisebasedFunction(5,6)
// .then(res=>console.log(res))
// .catch(error=>console.error(error.message))

// promisebasedFunction(2,3)
// .then(res=>console.log(res))
// .catch(error=>console.error(error.message))

// function callbackToPromise(fn) {
//   return (...args) => new Promise((resolve, reject) => {
//     fn(...args, (err, data) => {
//       if (err) reject(err);
//       else resolve(data);
//     });
//   });
// }

// // Example usage:
// function callbackBasedFunction(x, y, callback) {
//   setTimeout(() => {
//     if (x + y > 10) callback(null, 'Sum is greater than 10');
//     else callback(new Error('Sum is not greater than 10'));
//   }, 1000);
// }

// // Convert the callback-based function to a Promise-based function
// const promiseBasedFunction = callbackToPromise(callbackBasedFunction);

// // Usage of the converted Promise-based function
// promiseBasedFunction(5, 6)
//   .then(result => console.log(result)) // Sum is greater than 10
//   .catch(error => console.error(error.message)); // (No error is thrown)

// promiseBasedFunction(2, 3)
//   .then(result => console.log(result))
//   .catch(error => console.error(error.message)); // Sum is not greater than 10
// function findUniqueElement(arr) {
//   let uniqueElement;
//   // Iterate through the array
//   for (let i = 0; i < arr.length; i++) {
//       // Check if the current element occurs only once in the array
//       if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//           // If yes, assign it to uniqueElement and break the loop
//           uniqueElement = i;
//           break;
//       }
//   }
//   return uniqueElement;
// }

// // Example usage:
// const array = [1,1,2,3,4,4,4,4,4];
// const uniqueElement = findUniqueElement(array);
// console.log("The unique element in the array is:", uniqueElement);

// Function that takes a callback
// function greet(name, callback) {
//   console.log('Hello, ' + name + '!');
//   callback(); // Invoke the callback function
// }

// // Callback function
// function sayGoodbye() {
//   console.log('Goodbye!');
// }

// // Calling the function with a callback
// greet('Alice', sayGoodbye);


// function pracCallback(callback){
//   console.log('hello');
//   callback()
// }
// function everyone(){
//   console.log('everyone');
// }
// pracCallback(everyone)

// const promiseone =new Promise((resolve,reject)=>{
//   // console.log('before promise');
//   setTimeout(()=>{
//     resolve('promise resolved')
//   },2000)

// })


// async function asyncpromiseone(){
//   try{
//     console.log('before promise');
//     let result= await promiseone
//    console.log(result);
//    console.log('after promise');
//    }
//    catch(error){
// console.log((error));
//    }
//   }
 

// asyncpromiseone()
// Function that returns a promise resolving after the specified milliseconds
// function delay(milliseconds) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, milliseconds);
//   });
// }

// // Function that uses delay to print countdown from the given seconds to zero
// async function countdown(seconds) {
//   for (let i = seconds; i >= 0; i--) {
//     console.log(i);
//     await delay(1000);
//   }
//   console.log('Countdown complete!');
// }

// // Example usage:
// countdown(5);  // Starts a countdown from 5 to 0, printing one number per second
