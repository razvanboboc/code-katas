function listSquared(m, n) {
    let list = [];
    for(let i = m; i <= n; i++){
        let squaredDivisors = getSquaredDivisors(i);
        let sum = squaredDivisors.reduce((sum, e) => sum + e)
        if(Number.isInteger(Math.sqrt(sum))){
            list.push([i , sum])
        }
    }
    return list;
}

function getSquaredDivisors(n){
    let divisors = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            divisors.push(i * i);
        }
    }
    return divisors;
}
