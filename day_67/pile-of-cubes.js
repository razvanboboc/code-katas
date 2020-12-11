function findNb(m) {
    m = Math.sqrt(m);
    if(!Number.isInteger(m)){
        return -1;
    }
    m *= 2;
    for(let i = 0; i < Math.sqrt(m); i++){
        if(i * (i + 1) === m){
            return i;
        }
    }
    return -1;
}

console.log(findNb(4183059834009), 2022)