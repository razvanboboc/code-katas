function solution(string){
    string = string.split(/(?=[A-Z])/g)
    return string.join(' ');
}

console.log(solution('camelCasing'));