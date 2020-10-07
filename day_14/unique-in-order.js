var uniqueInOrder=function(iterable){
    if(typeof(iterable) === 'string'){
        iterable = iterable.split('');
    }
    for(let i = 0; i < iterable.length; i++){
        while(iterable[i] === iterable[i + 1]){
            iterable.splice(i+1, 1);
        }
    }
    return iterable;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));