function dashatize(num) {
    num = (num + '').split('').map(function(x){
        if(parseInt(x) % 2 === 1){
            return '-' + x + '-';
        }
    }).join('').replace(/--/g, '-');
    return num.substring(1, num.length - 1);
}

console.log(dashatize(5311));