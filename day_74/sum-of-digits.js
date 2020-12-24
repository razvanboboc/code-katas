function digital_root(n) {
    return (n < 10) ? n : digital_root(sum(n));
}

function sum(n){
    return (n != 0) ? n % 10 + sum(Math.floor(n / 10)) : n;
}
