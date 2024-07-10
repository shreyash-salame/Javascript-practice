
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

    for (var i = 50; i <= 100; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }