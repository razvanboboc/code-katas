function john(n) {
    let john = Array.of(0);
    let ann = Array.of(1);
    for(let i = 1; i < n; i++){
        john.push(i - ann[john[i - 1]]);
        ann.push(i - john[ann[i - 1]]);
    }
    return john;
}
function ann(n) {
    let john = Array.of(0);
    let ann = Array.of(1);
    for(let i = 1; i < n; i++){
        john.push(i - ann[john[i - 1]]);
        ann.push(i - john[ann[i - 1]]);
    }
    return ann;
}

function sumJohn(n) {
    let katas = john(n);
    let sum = katas.reduce((sum, kata) => sum + kata);
    return sum;
}

function sumAnn(n) {
    let katas = ann(n);
    let sum = katas.reduce((sum, kata) => sum + kata);
    return sum;
}