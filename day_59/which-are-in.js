function inArray(array1,array2){
    array2 = array2.join(' ');
    
    for(let i = 0; i < array1.length; i++){
        if(!array2.includes(array1[i])){
            array1.splice(i, 1);
            i--;
        }
    }

    return array1.sort();
}

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
let a1 = ["xyz", "live", "strong"];
let a3 = ["live", "strong", "arp"];
let a4 = ["tarp", "mice", "bull"];
console.log(inArray(a1,a2));
console.log(inArray(a3,a2));
console.log(inArray(a4,a2));
