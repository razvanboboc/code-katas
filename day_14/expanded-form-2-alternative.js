function expandedForm(num) {
    let [int, dec] = (''+num).split('.')
    console.log([int, dec]); 

    return int.split('').map((x, y, a) => x + '0'.repeat(a.length - y - 1))
      .concat(dec.split('').map((x, y, a) => `${x}/1${'0'.repeat(y + 1)}`))
      .filter(x => !x.startsWith('0'))
      .join(' + ')

}

// console.log(expandedForm(0.04));
// console.log(expandedForm(1.24));
// console.log(expandedForm(4.28));
console.log(expandedForm(227.304));
