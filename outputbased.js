// const b=20;
// const obj={
//     a:10,
//     b:20,
//     c: function(){
//         const a=3;
//         return b%a===0;

//     }
// }
// console.log(obj.c());


const obj= {
    a:10,
    isfactor: function(){
        var b=10;
        return obj.a%b===0;

    }
}
console.log(obj.isfactor());

