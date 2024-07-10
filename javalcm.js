
function lcmOfNumbers(x, y) {
    var lcm = (x * y) / hcfOfNumbers(x, y);
    return lcm;
}

function hcfOfNumbers(x, y) {
    var hcf = 1;
    
    for (var i = 1; i <= x && i <= y; i++) {
        if (x % i === 0 && y % i === 0) {
            hcf = i;
        }
    }
    return hcf;
}
var lcm = lcmOfNumbers(56, 24);
console.log(lcm);