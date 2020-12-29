function removeNb(n) {
    //incepem de la n/2 pana la n
    // let sum = n * (n + 1) / 2;
    //create a result array with pairs of numbers
    let pairs = [];
    //go through every number from greatest
    //i^2 = sum - 2 * i
    let closest = 0;
    for(let i = Math.floor(n / 2); i < n; i++){
        //pair it with another smaller number number
        for(let j = closest != 0 ? closest: n ; j > i; j--){
            process.stdout.write(`i is = ${i} `);
            process.stdout.write(`j is = ${j} \n`);
            
            //calculate their product
            let result = 2 * (i * j + i + j) / (n + 1);
            process.stdout.write(`r is = ${result} \n`);
            //substract from sum a and b.
            // let substractedSum = sum - i - j;
            // process.stdout.write(`p is = ${product} `);
            // process.stdout.write(`s is = ${substractedSum} \n`);
            //verify if their product is equal to substracted sum
            if(Math.floor(result) === n && result != n){
                closest = j - 1;
                break;
            }
            if(result === n){
                //if it is then add it to the result array
                pairs.push([i, j]);
                pairs.push([j, i]);
                closest = j - 1;
                break;
            }
        }
    }
    return pairs.sort((a,b) => a[0] - b[0]);
}

console.log(removeNb(26))
// console.log(removeNb(1000003))