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
    return arr[arr.length - 2];   
}

function generateElement(row, column){
    let numerator = fac(row);
    console.log(numerator)
    let denominator = fac(column) * fac(row - column);
    console.log(denominator)
    return numerator / denominator;
}

function fac(n){
    return n < 2 ? 1 : n * fac(n - 1);
}


// console.log(pascalsTriangle(1))
// console.log(pascalsTriangle(2))
// console.log(pascalsTriangle(4))
// console.log(pascalsTriangle(6))
console.log(generateElement(24, 23))
// console.log(pascalsTriangle(25))
// console.log(generateElement(4, 2))