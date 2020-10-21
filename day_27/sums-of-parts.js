function partsSums(ls) {
    for(let i = 0; i < ls.length; i++){
        for(let j = i + 1; j < ls.length; j++){
            ls[i] += ls[j];
        }
    }

    ls.push(0);
    return ls;
}

console.log(partsSums([0, 1, 3, 6, 10]));