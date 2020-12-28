function removeNb(n) {
    //incepem de la n/2 pana la n
    let sum = n * (n + 1) / 2;
    //create a result array with pairs of numbers
    let pairs = [];
    //go through every number from greatest
    //i^2 = sum - 2 * i
    for(let i = Math.floor(n / 2); i < n; i++){
        //pair it with another smaller number number
        for(let j = i + 1; j <= n; j++){
            process.stdout.write(`i is = ${i} `);
            process.stdout.write(`j is = ${j} \n`);
            //calculate their product
            let product = i * j;
            //substract from sum a and b.
            let substractedSum = sum - i - j;
            process.stdout.write(`p is = ${product} `);
            process.stdout.write(`s is = ${substractedSum} \n`);
            if(product > substractedSum){
                break;
            }
            //verify if their product is equal to substracted sum
            if(product === substractedSum){
                //if it is then add it to the result array
                pairs.push([i, j]);
            }
        }
    }
    return pairs;
}

console.log(removeNb(26))
// console.log(removeNb(1000003))