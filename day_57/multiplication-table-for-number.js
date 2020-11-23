function multiTable(number) {
    let multiplicationTable = [];
    let i = 1;
    while(i <= 10){
        multiplicationTable.push(`${i} * ${number} = ${i * number}`);
        i++;
    }
    return multiplicationTable.join('\n');
}

console.log(multiTable(5));