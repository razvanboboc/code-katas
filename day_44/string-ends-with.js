function solution(str, ending){
    for(let i = str.length, j = ending.length; i >= str.length - ending.length;){
        if(str[i] === ending[j]){
            i--;
            j--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(solution('sumo', 'omo'));
console.log(solution('ails', 'fails'));