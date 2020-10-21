function partsSums(ls) {
    let sum = 0;
    let sumsList = [];
    for(let i = 0; i < ls.length; i++){
        sum += ls[i];
    }

    sumsList.push(sum);

    for(let i = 1; i < ls.length; i++){
        sum -= ls[i - 1];
        sumsList.push(sum);
    }
    if(sumsList.length !== 1){
        sumsList.push(0);
    }
    return sumsList;
}

console.log(partsSums([]));