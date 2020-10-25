function iqTest(numbers){
    numbers = numbers.split(' ').map(x => parseInt(x));
    let i = 0,
        evenCounter = 0,
        oddCounter = 0;
    //determine from first two/three elements if the array is an odd one or even one
    while(i < numbers.length){
        if(evenCounter < 2 && numbers[i] % 2 === 0){
            evenCounter++;
        } 
        if(oddCounter < 2 && numbers[i] % 2 === 1){
            oddCounter++;
        } 
        if(oddCounter === 2) {
            for(let j = 0; j < numbers.length; j++){
                if(numbers[j] % 2 === 0){
                    return j + 1;
                }
            }
        } 
        if(evenCounter === 2) {
            for(let j = 0; j < numbers.length; j++){
                if(numbers[j] % 2 === 1){
                    return j + 1;
                }
            }
        } 
        i++;
    }
}

console.log(iqTest("2 4 7 8 10"))