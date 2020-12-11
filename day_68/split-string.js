function solution(str){
    let strArr = [];
    str.split('');
    for(let i = 0; i < str.length; i += 2){
        strArr.push(str[i] + str[i+1]);
    }
    let lastString = strArr[strArr.length - 1];
    if(lastString.includes('undefined')){
        lastString = lastString.substring(0,1) + '_';
        strArr[strArr.length - 1] = lastString;
    }
    return strArr;
}

console.log(solution('abcdefg'));