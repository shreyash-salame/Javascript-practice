
// function sum(a,b){
//     return a*b;
// }

// console.log(sum(3,9));

function func(a){
    a.push(6); 
    console.log(a);

}
var v=[1,2,3,4,5];
func(v); 
console.log(v);

//number,boolean,string are passed a copies=pass by value
//arrays,ojects,fuctions are passed as memory locations=pass by reference