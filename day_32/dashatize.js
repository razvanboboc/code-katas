function dashatize(num) {
    num = (num + '').split('').map(function(x){
        if(parseInt(x) % 2 === 1){
            return '-' + x + '-';
        }
        if(parseInt(x) % 2 === 0) {
            return x;
        }
    }).join('').replace(/--/g, '-');
    num = num.split('');
    if(num[0] === '-'){
        num = num.splice(0,1);
    }
    if(num[num.length -1] === '-'){
        num = num.splice(num.length - 1, 1);
    }
    return num.join('');
}

console.log(dashatize(274));