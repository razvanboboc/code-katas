function zeckendorf(n) {
    if(n < 0) {
        return null;
    }
    let fib = generateFibonacci(n);
    let zeck = [];
    for(let i = 0; i < fib.length && n != 0; i++){
        if(n - fib[i] >= 0){
            zeck.push(fib[i]);
            n -= fib[i];
        }
    }
    return zeck;
}

function generateFibonacci(n){
    let fib = [1, 1];
    while(1){
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        if(fib[fib.length - 1] > n){
            fib.pop();
            break;
        }
    }
    return fib.reverse();
}

console.log(generateFibonacci(19))
console.log(zeckendorf(19));
// console.log(generateFibonacci(10));