function solve(a, b) {
    return 0;
}

function primeReducer(n){
    n = n.toString().split('').map(x => Number.parseInt(x)**2).reduce((acc,cur) => acc + cur);   
    //go through digits
        //calculate square of each one of them
        //reduce them ito a sum
    //if the sum is not 1 then we could do a primeReducer(sum)
    return n === 1 ? true : primeReducer(n);
}

console.log(primeReducer(7))
