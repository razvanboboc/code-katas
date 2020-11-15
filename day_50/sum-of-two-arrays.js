function addArrays(array1, array2) {
    let arrayToNumber1 = array1.length > 0 ? parseInt(array1.join('')) : 0;
    let arrayToNumber2 = array2.length > 0 ? parseInt(array2.join('')) : 0;
    let result = (arrayToNumber1 + arrayToNumber2).toString().split('').map(x => {        
        if(Number.isInteger(parseInt(x))){
            return parseInt(x);
        }
        return x;
    });
    if(!Number.isInteger(result[0])){
        result.shift();
        result[0] = -result[0];
    }
    return result[0] === 0 ? [] : result;
}


console.log(addArrays([-6,7], [1,0]), [ 1, 3, 4 ])
