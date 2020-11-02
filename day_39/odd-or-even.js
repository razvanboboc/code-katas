function oddOrEven(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
      sum += array[i];
    }
    return Math.abs(sum % 2) === 1 ? 'odd' : 'even';
}