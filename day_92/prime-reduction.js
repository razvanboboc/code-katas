function solve(a, b) {
    let counter = 0;
    let primes = []
    for (let i = a; i < b; i++) {
        if (isPrime(i) && primeReducer(i)) {
            counter++;
        }
    }
    return counter;
}

function primeReducer(n) {
    n = n
        .toString()
        .split("")
        .map((x) => Number.parseInt(x) ** 2)
        .reduce((acc, cur) => acc + cur);
    if (n < 10 && n != 1 && n != 7) {
        return false;
    }
    return n === 1 ? true : primeReducer(n);
}

function isPrime(n) {
    if (n === 0 || n === 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(primeReducer(1));
// console.log(primeReducer(2));
// console.log(primeReducer(3));
// console.log(primeReducer(4));
// console.log(primeReducer(5));
// console.log(primeReducer(6));
// console.log(primeReducer(7), 7);
// console.log(primeReducer(8));
// console.log(primeReducer(9));
// console.log(primeReducer(23));
// console.log(primeReducer(19));
// console.log(primeReducer(49999));

// console.log(solve(100,1000),28);
// console.log(solve(1,25), 4);
// console.log(solve(100, 3000), 65);
let result = solve(30, 1050);
result.forEach(x => console.log(`${x} is prime ${isPrime(x)} and reduceable ${primeReducer(x)}`))
