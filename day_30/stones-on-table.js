function solve(s) {
    stones = s.split('');
    for(let i = 0; i < stones.length; i++){
        if(stones[i] === stones[i-1] || stones[i] === stones[i + 1]){
            stones.splice(i, 1);
            i--;
        }
    }
    return s.length - stones.length;
}

console.log(solve("RGGRGBBRGRR"));