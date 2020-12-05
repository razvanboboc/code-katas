function solution(n){
    let duplicates = [];
    let sum = 0;
    for(let i = 3; i < n; i += 3){
        if(i % 5 === 0){
            duplicates.push(i);
        }
        sum +=i;
    }
    for(let j = 5; j < n; j += 5){
        if(duplicates.includes(j)){
            continue;
        }
        sum += j;
    }
    return sum;
}

//sub 10 sunt 3, 6, 9 pt 3.
//si pt 5 sunt 5 si atat.


console.log(solution(10));