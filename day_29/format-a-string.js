function list(names){
    let namesArray = [];

    for(let key of names){
        let name = JSON.stringify(key).split(':').pop();
        namesArray.push(name.substring(1, name.length - 2));
    }

    let lastName = '';

    if(namesArray.length > 1){
        lastName = ' & ' + namesArray.pop();
    }

    return namesArray.join(', ') + lastName;
}

obj1 = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]
obj2 = [{name: 'Bart'}, {name: 'Lisa'}]
obj3 = [{name: 'Bart'}]
obj4 = [];

console.log(list(obj1));
console.log(list(obj2));
console.log(list(obj4));

