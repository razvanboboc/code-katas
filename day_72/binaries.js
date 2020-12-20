function code(strng) {
    strng = strng.split('');
    result = strng.map(x => {
        x = getBinary(x).split('');
        initialSize = x.length;
        x.unshift('1');
        for(let i = 0; i < initialSize - 1; i++){
            x.unshift('0');
        }
        return x.join('')
    });
    return result.join('');
}

function decode(strng){
    let codes = Array.of(
        ['1', '11'],
        ['2', '0110'],
        ['3', '0111'],
        ['4', '001100'],
        ['5', '001101'],
        ['6', '001110'],
        ['7', '001111'],
        ['8', '00011000'],
        ['9', '00011001'],);
    //init a result array
    let result = [];
    //iterate through every property of object untill not found anymore\
    for(let i = codes.length - 1; i >= 0; i--){
        //verify if said property is part of our string
        while(strng.includes(codes[i][1])){
            //get the index of it.
            let firstIndex = strng.indexOf(codes[i][1]);
            //get the last index of it which should be the initial index
            //plus the length of the string
            let lastIndex = firstIndex + codes[i][1].length;
            //add it to another result object along with initial index as key
            //and the decoded value of the found encoding
            result.push([firstIndex, codes[i][0]]);
            //eliminate it from our string
            //initial string gets substring till initial index plus substring from last index to end of string
            strng = strng.substring(0, firstIndex) + strng.substring(lastIndex);
        }
    }
    //order the result array ascendingly based on first element of each array
    result.sort((a,b) => a[0] - b[0]);
    //return decoding array joined    
    return result;
}


function getBinary(strng){
    return Number(parseInt(strng)).toString(2);
}

// console.log(decode("0011110011110111011100011000"), '77338');
// console.log(decode("0011110011110111011100011000"));
// console.log(code('987654321'))
console.log(decode('00011001000110000011110011100011010011000111011011'),'987654321')