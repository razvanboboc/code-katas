function rot13(message){
    message = message.split('')
    for(let i = 0; i < message.length; i++){
        if(`${message[i]}`.charCodeAt(0) >= 97 && `${message[i]}`.charCodeAt(0) <= 122){
            if(`${message[i]}`.charCodeAt(0) + 13 > 122){
                message[i] = String.fromCharCode(`${message[i]}`.charCodeAt(0) - 13);
            } else {
                message[i] = String.fromCharCode(`${message[i]}`.charCodeAt(0) + 13);
            }
        }
        if(`${message[i]}`.charCodeAt(0) >= 65 && `${message[i]}`.charCodeAt(0) <= 90){
            if(`${message[i]}`.charCodeAt(0) + 13 > 90){
                message[i] = String.fromCharCode(`${message[i]}`.charCodeAt(0) - 13);
            } else {
                message[i] = String.fromCharCode(`${message[i]}`.charCodeAt(0) + 13);
            }
        }
    }
    return message.join('');
}

console.log(rot13('Test'));