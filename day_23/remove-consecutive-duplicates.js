function removeConsecutiveDuplicates(s) {
    let arrayOfStrings = s.split(' ');
    for(let i = 0; i < arrayOfStrings.length; i++){
        if(arrayOfStrings[i] === arrayOfStrings[i+1]){
            arrayOfStrings.splice(i+1, 1);
            i--;
        }
    }
    return arrayOfStrings.join(' ');
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));