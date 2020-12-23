function solution(roman){
    let romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let romanValues = [1, 5, 10, 50, 100, 500, 1000];
    roman = roman.split('');
    let result = 0;
    for(let i = 0; i < roman.length; i++){
        if(romanNumerals.indexOf(roman[i]) < romanNumerals.indexOf(roman[i + 1])){
            result += romanValues[romanNumerals.indexOf(roman[i + 1])] - romanValues[romanNumerals.indexOf(roman[i])];
            i++;
        } else {
            result += romanValues[romanNumerals.indexOf(roman[i])];
        }
    }
    return result;
}