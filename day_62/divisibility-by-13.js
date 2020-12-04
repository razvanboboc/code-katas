function thirt(n) {
    n = n.toString().split('').map(x => parseInt(x));
    let seq = [1, 10, 9, 12, 3 ,4];
    let j = 0;
    for(let i = n.length - 1; i >= 0; i--){
        n[i] = n[i] * seq[j];
        if(j + 1 === seq.length){
            j = 0;
        }
        j++;
    }
    n = n.reduce((sum, elem) => sum + parseInt(elem));
    return n < 100 ? n : thirt(n);
}

console.log(thirt(1234567))
console.log(thirt(321))
// console.log(thirt(8529), 79)
// console.log(thirt(85299258), 31)
// console.log(thirt(5634), 57)
// console.log(thirt(1111111111), 71)
// console.log(thirt(987654321), 30)