function minValue(v){
    for(let i = 0; i < v.length; i++){
        for(let j = 0; j < v.length; j++){
            if(v[i] < v[j]){
                let temp = v[i];
                v[i] = v[j];
                v[j] = temp;
            } 
        }
    }
    for(let i = 0; i < v.length; i++){
        if (v[i] === v[i+1]){
            v.splice(i,1);
            i--;
        }
    }
    return parseInt(v.join(''));
}

console.log(minValue([5, 6, 9, 9, 7, 6, 4]));
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));