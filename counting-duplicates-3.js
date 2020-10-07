function duplicateCount(text){
    //need an object to store all counts
    const counts = {}
    //iterate through whole string and add them to the object
    for(let i = 0; i < text.length; i++) {
        const letter = text[i].toLowerCase();
        
        if(!counts[letter]){
            counts[letter] = 0;
        }
        
        counts[letter]++;
    }
    
    let duplicates = 0;

    //iterate through counts and see which property is greater than 1
    for(let letter in counts){
        //duplicate count gets incremented
        if(counts[letter] > 1){
            duplicates++;
        }
    }

    return duplicates;
}

console.log(duplicateCount('abcdefghijklmnopqrstuvwxyzbaaAAB'));  //2
console.log(duplicateCount('abcdefghijabcdeABCDABCabA'));


console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('Indivisibility'));
console.log(duplicateCount('Indivisibilities'));