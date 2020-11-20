function solution(nums){
    return nums.sort(function(a, b) {
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    });
}

console.log(solution([1, 2, 10, 50, 5]));