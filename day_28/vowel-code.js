function encode(string) {
    return string.split('').map(function(char) {
        if(char.match(/^[aeiou]$/)){
            switch(char){
                case 'a':
                    return char.charCodeAt(0) - 96;
                case 'e':
                    return char.charCodeAt(0) - 99;
                case 'i':
                    return char.charCodeAt(0) - 102;
                case 'o':
                    return char.charCodeAt(0) - 107;
                case 'u':
                    return char.charCodeAt(0) - 112;
                default:
                    break;
            }
        } else {
            return char;
        }
    }).join('');
}
  
function decode(string) {
    return string.split('').map(function(char) {
        if(char.match(/^[12345]$/)){
            switch(char){
                case '1':
                    return String.fromCharCode(97);
                case '2':
                    return String.fromCharCode(101);
                case '3':
                    return String.fromCharCode(105);
                case '4':
                    return String.fromCharCode(111);
                case '5':
                    return String.fromCharCode(117);
                default:
                    break;
            }
        } else {
            return char;
        }
    }).join('');
}

console.log(encode("hello"))

console.log(decode("h2ll4"))