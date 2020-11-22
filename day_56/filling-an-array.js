function arr(n){
    if(n === undefined){
      return [];
    }
    let arr = [n];
    for(let i = 0; i < n; i++){
      arr[i] = i;
    }
    return arr;
}