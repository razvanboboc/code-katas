function findOutlier(arr){
    let oddCounter = 0,
        evenCounter = 0,
        outlier = undefined;
        for(let i = 0; i < 3; i++){
            if(Math.abs(arr[i]) % 2 === 0){
                evenCounter++;
            } else {
                oddCounter++;
            }
            if(evenCounter === 2 ){
                outlier = arr.reduce( (a, c) => {
                    if(Math.abs(c) % 2 === 1){
                        a = c;
                    }
                    return a;
                });
                break;
            } else if(oddCounter === 2){
                outlier = arr.reduce( (a, c) => {
                    if(Math.abs(c) % 2 === 0){
                        a = c;
                    }
                    return a;
                });
                break;
            }
        }
    
    return outlier;
}

console.log(findOutlier([ 2, -6, 8, -10, -3 ]))