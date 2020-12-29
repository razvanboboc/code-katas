function removeNb(n) {
    let sum = n * (n + 1) / 2;
    let pairs = [];
    for(let i = Math.floor(n / 2); i < n; i++){
        let j = (sum - i) / (i + 1);
        if(Number.isInteger(j)){
            pairs.push([i, j]);
        }
    }
    return pairs;
}

// console.log(removeNb(26))
console.log(removeNb(1000003))