function univalue(arr) {
 for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
       if (arr[i] === arr[j]) {
         return false;
            }
        }
    }
    return true;
}

var arr = [1, "Apple", false, true,true,1] ;


console.log(univalue(arr))
