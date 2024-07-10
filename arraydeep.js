// const originalArray = [1,[4],[],[44], 4, 5];

// function clone(arr) {
//   return arr.map(function(item) {
//     if (Array.isArray(item)) {
//       return clone(item);
//     } else {
//       return item;
//     }
//   });
// }

// const clonedarray = clone(originalArray);
// clonedarray[1].push(3)

// console.log("Original", originalArray);
// console.log("Cloned:", clonedarray);





const original = [1,[4],[],[44]];
const clone = JSON.parse(JSON.stringify(original));
clone.push(999)
console.log( original);
console.log(clone);