function berlinClock(time) {
    time = time.split(':').map(x => parseInt(x));
    let topLight = time[2] % 2 === 0 ? 'Y\n' : 'O\n',
        firstRow = generateFirstRow(time[0]) + '\n',
        secondRow = generateRemaining(time[0]) + '\n',
        thirdRow = generateThirdRow(time[1]) + '\n',
        fourthRow = generateRemaining(time[1]).split('R').join('Y');
    return topLight + firstRow + secondRow + thirdRow + fourthRow;
}

function generateFirstRow(hours){
    let firstRow = [];
    let firstRowValues = Math.floor(hours / 5);
    if(firstRowValues === 0){
        return 'OOOO'
    }
    while(firstRowValues != 0){
        firstRow.push('R');
        firstRowValues--;
        while(firstRowValues === 0 && firstRow.length < 4){
            firstRow.push('O');
        }
    } 
    return firstRow.join(''); 
}

function generateRemaining(remaining){
    let row = [];
    let rowValues = remaining % 5;
    if(rowValues === 0){
        return 'OOOO';
    }
    while(rowValues != 0){
        row.push('R');
        rowValues--;
        while(rowValues === 0 && row.length < 4){
            row.push('O');
        }
    } 
    return row.join('');     
}

function generateThirdRow(minutes){
    let thirdRow = [];
    let thirdRowValues = Math.floor(minutes / 5);
    if(thirdRowValues === 0){
        return 'OOOOOOOOOOO';
    }
    while(thirdRowValues != 0){
        if((thirdRow.length + 1) % 3 === 0 && thirdRow.length != 0){
            thirdRow.push('R');
            thirdRowValues--;
        } else {
            thirdRow.push('Y');
            thirdRowValues--;
        }
        while(thirdRowValues === 0 && thirdRow.length < 11){
            thirdRow.push('O');
        }
    } 
    return thirdRow.join('');     
}

console.log(berlinClock("12:56:01")) 
// console.log(berlinClock("22:32:45"), 
// "\nYYOO")
// console.log(berlinClock("12:56:01")) 
// console.log(generateThirdRow(245))

// console.log(berlinClock("00:00:00"), 
// "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO")

// console.log(berlinClock("22:32:45"), 
// "O\nRRRR\nRROO\nYYRYYROOOOO\nYYOO")