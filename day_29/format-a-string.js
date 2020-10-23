function list(names){
    let namesArray = [];

    for(let key of names){
        let name = JSON.stringify(key).split(':').pop();
        namesArray.push(name.substring(1, name.length - 2));
    }


    if(namesArray.length > 1){
        lastName = namesArray.pop().split('');
        lastName.unshift(' & ');
    } 

    if(namesArray.length === 1){
        return namesArray.join('');
    }

    return namesArray.join(', ') + lastName.join('');
}

obj = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]

console.log(list(obj));