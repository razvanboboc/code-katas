function sum(num) {
    if(num === 1 || num === 2 || num === 3){
        return num; 
    }
    console.log('Number: ' + num);
    let counter = 3 + Math.floor(num/2);
    console.log('Initial counter ' + counter);
    for(let i = num - 2; i > 2; i--){
        console.log('Counter: ' + counter);
        console.log('Numbers in partition: ' + i)
        let biggestNumberInPartition = num - i + 1;
        process.stdout.write('Initial biggest number: ' + biggestNumberInPartition + ' // ')
        do {
            counter++;
            biggestNumberInPartition--;
            process.stdout.write(biggestNumberInPartition + ' ');
        } while(biggestNumberInPartition > 1 )
        console.log('\n');
    }
    return counter;
}


// console.log(sum(1), 1);
// console.log(sum(2), 2);
// console.log(sum(3), 3);
// console.log(sum(4), 5);

// console.log(sum(5), 7);

console.log(sum(9), 30);