function accum(string) {
    string = string.split('');
    return string.map((x, i) => {
        let result = [];
        result.push(string[i].toUpperCase());
        for(let j = 0; j < i; j++){
            result.push(string[i].toLowerCase());
        }
        return result.join('');
    }).join('-');
}

console.log(accum("abcd"))