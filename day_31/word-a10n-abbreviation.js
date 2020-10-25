function abbreviate(string) {
    return string.split(' ').map(function(el){
        let comma = '';
        if(el.includes('-')){
            el = el.split('-');
            if(el[0].length > 3){
                el[0] = el[0].substring(0,1) + (el[0].length - 2).toString() + el[0].substring(el[0].length - 1);
            }
            if(el[1].includes(',')){
                el[1] = el[1].substring(0, el[1].length - 1); 
                comma = ',';
            }
            if(el[1].length > 3){
                el[1] = el[1].substring(0,1) + (el[1].length - 2).toString() + el[1].substring(el[1].length - 1);
            }
            el = el.join('-') + comma;
        } else if(el.length > 3) {
            if(el.includes(',')){
                el = el.substring(0, el.length - 1); 
                comma = ',';
            }
            el = el.substring(0,1) + (el.length - 2).toString() + el.substring(el.length - 1) + comma;
        }
        return el;
    }).join(' ');
}

console.log(abbreviate("You need, need not want, to complete this code-wars mission"));
console.log(abbreviate("is sat double-barreled on sits"))
