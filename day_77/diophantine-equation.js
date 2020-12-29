function solequa(n) {
    let result = [];
    let factors = [];
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            factors.push([n / i, i]);
        }
    }
    for(let i = 0; i < factors.length; i++){
        let x = (factors[i][0] + factors[i][1]) / 2;
        if(Number.isInteger(x)){
            let y = Math.abs((factors[i][1] - x) / (-2));
            if(Number.isInteger(y)){
                result.push([x, y]);
            }
        } else {
            continue;
        }
    }
    return result;
}
//x2 - 4 * y2 = n
//x2 - 4 * y2 = (x - 2*y) * (x + 2*y) 

//(x - 2*y) * (x + 2*y) = n 
//                                             


console.log(solequa(5), [[3, 1]])
console.log(solequa(12), [[4, 1]])
console.log(solequa(13), [[7, 3]]) 
console.log(solequa(16), [[4, 0]])
