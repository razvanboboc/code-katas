function dirReduc(arr){
    arr.forEach((e, i) =>{
        switch(e){
            case 'NORTH':{
                if(arr[i + 1] === 'SOUTH'){
                    arr.splice(i, 2);
                    dirReduc(arr);
                }
                break;
            }
            case 'SOUTH':{
                if(arr[i + 1] === 'NORTH'){
                    arr.splice(i, 2);
                    dirReduc(arr);
                }
                break;
            } 
            case 'WEST':{
                if(arr[i + 1] === 'EAST'){
                    arr.splice(i, 2);
                    dirReduc(arr);
                }
                break;
            } 
            case 'EAST':{
                if(arr[i + 1] === 'WEST'){
                    arr.splice(i, 2);
                    dirReduc(arr);
                }
                break;
            }  
        }
    });
    return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));