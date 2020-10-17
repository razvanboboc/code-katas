function warnTheSheep(queue) {
    for(let i = 0; i < queue.length - 1; i++) { 
        if(queue[i] === 'wolf'){
            return `Oi! Sheep number ${queue.length - 1 - i }! You are about to be eaten by a wolf!`;
        }
    }
    if(queue[queue.length - 1] === 'wolf'){
        return "Pls go away and stop eating my sheep";
    }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));