function revrot(str, sz){
    if(sz <= 0 || str === '' || sz > str.length){
        return '';
    }
    //divide string into chunks of size sz and form a new array with it
    //ignore last chunk if smaller than sz
    let chunks = [];
    for(let i = sz; i < str.length; i += sz){
        chunks.push(str.substring(i - sz, i));
    }
    //iterate through array
    chunks = chunks.map(function(chunk){
        //verify if chunk is equal to the sum of all the cubes of its digits
        //divisible by 2
        chunk = chunk.split('');
        let sum = 0;
        for(i = 0; i < chunk.length; i++){
            sum += Math.pow(parseInt(chunk[i]), 3);
            // console.log(Math.pow(parseInt(chunk[i]), 3))
        }
        //if it is reverse it
        if(sum % 2 === 0){
            chunk = chunk.reverse();
        } else {
            //else rotate it to the left by one position
            shiftedNumber = chunk.shift();
            chunk.push(shiftedNumber);
        } 
        chunk = chunk.join('');
        return chunk;
    })
    return chunks.join(''); 
}


// console.log(revrot("123456987654", 6));
// console.log("1234", 0);
// console.log("", 0);
// console.log("1234", 5);
console.log(revrot("73304991087281576455176044327690580265896896028", 8));