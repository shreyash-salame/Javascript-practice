// const alpha=['banana','cherry','apple']
//  let res=alpha.sort()
// console.log(res);
// console.log(alpha);


// const points = [40, 100, 1, 5, 25, 10];
// let res=points.sort(function(a,b){
//     return a-b;
// })
// console.log(points[0]);


// const points = [40, 100, 1, 5, 25, 10];
// let res=Math.max.apply(null,points)
// console.log(res);
// const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// function findlowestno(arr){
//     let lowest=arr[0]
//     for(let i=1;i<array.length;i++){
//         if(arr[i]<lowest){
//             lowest=arr[i]
//         }
//     }
//     return lowest;
// }
// const lowest=findlowestno(array)
// console.log(lowest);

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];
//   let res=cars.sort(function(a, b){
//     return a.year - b.year});
//     console.log(res);
  
// const originalArray = [1, 2, [3], [4, 5]];

// // Cloning the array using concat()
// const clonedArray = [].concat(originalArray);
// originalArray[2].push('apples');

// console.log("Original Array:", originalArray);
// console.log("Cloned Array:", clonedArray);
  
// const arr=[1,2,3,4,5];
//  const arr2=[]
//  Array.assign(arr2,arr)

//  const originalArray = [1, [2, 3,], 4, 5];

// // Cloning the array using the spread operator
// const clonedArray = [...originalArray];
// clonedArray[1].push('shree')

// console.log("Original Array:", originalArray);
// console.log("Cloned Array:", clonedArray);


const originalArray = [1, [2, 3], 4, 5];

function deepClone(arr) {
  return arr.map(function(item) {
    if (Array.isArray(item)) {
      return deepClone(item);
    } else {
      return item;
    }
  });
}

const clonedArray = deepClone(originalArray);
clonedArray[1].push('shree')

console.log("Original Array:", originalArray);
console.log("Cloned Array:", clonedArray);