function nDig(n,d){
    //square all the numbers from zero to n, create an array of strings from it'
    let squaredNumbers = []
    for(let i = 0; i <= n; i++){
        squaredNumbers.push(Math.pow(i, 2).toString());
    }
    //go through the array, verify which of the numbers use the digit d, and increase the counter
    let counter = 0
    squaredNumbers.forEach(function(item){
        d = d + ''
        item = item.split('');
        item.forEach(function(digit){
            if(digit === d){
                counter++;
            }
        })
    })
    return counter;
}


console.log(nDig(11,1));
// console.log(nDig(5750, 0));
// console.log(nDig(11011));
// console.log(nDig(12224));
// console.log(nDig(11549));