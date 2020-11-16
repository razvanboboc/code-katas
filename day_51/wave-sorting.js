function waveSort(arr) {
    arr = arr.sort(function(a, b) {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    for(let i = 0; i < arr.length; i+=2){
        if(arr[i] < arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr;
}