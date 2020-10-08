function revrot(str, sz){
    //divide string into chunks of size sz and form a new array with it
    //ignore last chunk if smaller than sz
    let chunks = [];
    for(let i = 0; i < str.length; i += sz){
        chunks.push(str.substring(i, i + sz));
    }
    //iterate through array
    chunks.forEach(function(chunk){
        //verify if chunk is equal to the sum of all the cubes of its digits
        //divisible by 2
        chunk = chunk.split('');
        let sum = 0;
        for(i = 0; i < chunk.length; i++){
            sum = sum + Math.pow(parseInt(chunk[i]), 3);
        }
        if(sum)
        console.log(sum); 
    }) 
    //if it is reverse it
    //else rotate it to the left by one position
}


console.log(revrot("123456987654", 6));
// console.log("1234", 0);
// console.log("", 0);
// console.log("1234", 5);
// console.log("733049910872815764", 5);