function oddNum(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            return i;
        }
    }
    return -1;
}