function openOrSenior(data){
    let categorizations = [];
    for(i = 0; i < data.length; i++){
        if(data[i][0] >= 55 && data[i][1] > 7){
            categorizations.push('Senior');
        } else {
            categorizations.push('Open');
        }
    }
    return categorizations;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));