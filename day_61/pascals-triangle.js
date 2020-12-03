function pascalsTriangle(n) {
    let row = 0,
        arr = [];
    while(row < n){
        let column = 0;
        while(column <= row){
            arr.push(generateElement(row,column))
            column++;
        }
        row++;
    } 
    return arr;   
}

function generateElement(row, column){
    let a = calculateNfacOverKfac(row, column);
    let b = 1 / fac(row - column);
    return Math.round(a * b);
}

function calculateNfacOverKfac(n, k){
    k += 1;
    let sol = 1;
    while(k <= n){
        sol *= k;
        k++;
    }
    return sol;
}

function fac(n){
    return n < 2 ? 1 : n * fac(n - 1);
}

// console.log(generateElement(2, 0))
// console.log(pascalsTriangle(1))
// console.log(pascalsTriangle(2))
console.log(pascalsTriangle(20))
// console.log(pascalsTriangle(6))
// console.log(pascalsTriangle(25))
// console.log(generateElement(4, 2))