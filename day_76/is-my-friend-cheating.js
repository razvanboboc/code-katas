function removeNb(n) {
    //fac Math.sqrt(suma)
    //din numarul dat fac Math.floor(rezultat)
    //targetSum = rezultat + rezultat.
    //caut pe langa valoarea sqrt cele doua numere care adaugate
    //sa dea targetSum
        //apoi verific daca inmultite dau suma - ele.
    let sum = n * (n + 1) / 2;
    //create a result array with pairs of numbers
    let pairs = [];
    //go through every number from greatest
    //i^2 = sum - 2 * i
    for(let i = n; i > 0 && i > Math.sqrt(sum - 2 * i); i--){
        //pair it with another smaller number number
        for(let j = i - 1; j > 0; j--){
            //calculate their product
            let product = i * j;
            //substract from sum a and b.
            let substractedSum = sum - i - j;
            if(product < substractedSum){
                break;
            }
            //verify if their product is equal to substracted sum
            if(product === substractedSum){
                //if it is then add it to the result array
                pairs.push([j, i]);
                pairs.push([i, j]);
            }
        }
    }
    return pairs.sort((a, b) => a[0] - b[0]);
}

console.log(removeNb(26))
console.log(removeNb(100))