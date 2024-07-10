function fibonacci(n) {
    var fiboseries = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fiboseries.push(fiboseries[i - 1] + fiboseries[i - 2]);
    }
    
    return fiboseries;
}
var n=5;
console.log(fibonacci(n));