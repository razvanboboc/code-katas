function tripleX(str){
    str = str.split('')
    let counter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'x' && counter === 0){
            counter++;
            if(str[i+1] ==='x' && str[i+2] === 'x'){
                return true;
            }
        }
    }
    return false;
}



console.log(tripleX("abraxxxas"));
console.log(tripleX("xoxotrololololololoxxx"));