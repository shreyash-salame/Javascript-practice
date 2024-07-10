// let fruits = ['apple', 'banana', 'cherry', 'date'];



// // Remove 'banana' from index 1
// let removed = fruits.splice(2, 1,'lemon');

// console.log(fruits)
// console.log(removed)

// const arr=[1,2,3,4,5]
// let result= arr.filter(function(num){
//     if(num<=3){
//         return num
//     }
// })
// console.log(result);
//  var result=arr.filter(function(num){
// if(num<=3){
//     return num
// }
// })
// console.log(result);/.


// var arr=[2,3,4,5,6]
// var result=arr.map(function(num){
//     return num *num;
// })
// console.log(result);

// var arr=[10,20,30,40,50]
// var result=arr.map(function(cel) {
//     return (cel* 9/5)+32;
// })
// console.log(result);

// var persons = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ]
//   var result=persons.map(function(persons){
//     return persons.name
//   })
//   console.log(result);

// var num=[1,2,3,4,5,6,7,8,9,10]
// var result=num.filter(function(num){
//     return num % 2=== 0
// })
// console.log(result);

//   var person=['shreyash','kiran','prakash','shruti',"ravi"]
//   var result=arr.filter(function(person){
//     return person.length>5
//   })
//   console.log(result);
// var persons = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 40 }
//   ] 
//   var result=persons.filter(function(persons){
//     return persons.age>=30
//   })
//   console.log(result);

// var fruits=['apple','banana','cherry']
// console.log(fruits.length);
//  fruits.length=2;
//  console.log(fruits);
//  console.log(fruits.length)


// var numbers=[1,2,3,4,5]

// var sum = numbers.reduce(function(acc , currentvalue){
// return acc +currentvalue
// },0)
// console.log(sum);


var arrays = [[1,[4],2],[6],[3, 4], [5, 6]];
var result=arrays.reduce(function(acc,value){
    return acc.concat(value)
})
console.log(result);
var arrays = [[1,[4], 2], [3, 4], [5, 6]];
// var result=arrays.flat(2)
// console.log(result);

// var fruits = ['apple', 'banana', 'orange', 'apple', 'banana'];
// let count= fruits.reduce(function(acc,value){
//     acc[value]=(acc[value] || 0)+1;
//     return acc
// },{})
// console.log(count);
// var count=fruits.reduce(function(acc,value){
//    acc[value] = (acc[value] || 0)+1;
//    return acc
// },{})
// console.log(count);

// var number=[3, 7, 4, 9, 2];
// var result= number.reduce(function(acc,value){
//     return Math.min(acc,value)
// },0);

// console.log(result);
// console.log(a);
// var a=10