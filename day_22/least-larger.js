function leastLarger(a,i) {
    //return the index of the least larger number compared to the number given by the index to the fn
    let leastLargerNumber = {
        value: Infinity,
        key : -1
    };
    //traverse the array
    for(let j = 0; j < a.length; j++){
        //if element is bigger than the given number and smaller than the current least larger number
        if(a[j] > a[i] && a[j] < leastLargerNumber.value){
            //then least larger number becomes this element
            leastLargerNumber.value = a[j];
            leastLargerNumber.key = j;
        }
    }
    return leastLargerNumber.key;
}

console.log(leastLarger( [4, 1, 3, 5, 6], 0 ), 3 );
console.log(leastLarger( [4, 1, 3, 5, 6], 4 ), -1);