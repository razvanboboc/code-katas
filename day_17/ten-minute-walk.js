function isValidWalk(walk) {

    if(walk.length > 10 || walk.length < 10){
        return false;
    }

    let  coordinates = {
        n: 0,
        s: 0, 
        w: 0,
        e: 0
    };

    for(let i = 0; i < walk.length; i++){
        switch(walk[i]){
            case 'n':
                coordinates.n++;
                coordinates.s--;
                break;
            case 's':
                coordinates.s++;
                coordinates.n--;
                break;
            case 'w':
                coordinates.w++;
                coordinates.e--;
                break;
            case 'e':
                coordinates.e++;
                coordinates.w--;
                break;
        }
    }

    if( coordinates.n === 0 &&
        coordinates.s === 0 &&
        coordinates.w === 0 &&
        coordinates.e === 0){
            return true;
        } else {
            return false;
        }
}


//some test cases for you...
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
