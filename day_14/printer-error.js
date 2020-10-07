function printerError(s) {
    let counts = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] > 'm'){
            counts++;
        }        
    }
    return `${counts}/${s.length}`;
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));