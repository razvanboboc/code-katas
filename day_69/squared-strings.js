function rot(strng) {
    return strng.split('').reverse().join('');
}
function selfieAndRot(strng) {
    let counter = strng.substring(0,strng.indexOf('\n')).length;
    let dots = '';
    while (counter != 0){
        dots += '.';
        counter--;
    }
    beforeRotate = strng.split('').map((x,i) => {
        if(x === '\n'){
            x =  dots + x;
        }
        if(i === strng.length - 1){
            x = x + dots;
        }
        return x;
    }).join('');
    afterRotate = '\n' + beforeRotate.split('').reverse().join('');
    return beforeRotate + afterRotate;
}
function oper(fct, s) {
    return fct(s);
}

// console.log(oper(rot, "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL"), "LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif");
// console.log(oper(rot, "rkKv\ncofM\nzXkh\nflCB"), "BClf\nhkXz\nMfoc\nvKkr");

console.log(oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP"));
console.log('==========')
console.log("xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx");