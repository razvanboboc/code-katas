function loneliest(str) {
str = str.split('');
//init obj to remember the chars and their loneliness
let chars ={};
//init loneliest variable
let loneliest = -1;
//go through every character of the array
for(let i = 0; i < str.length; i++){
    //init temp var to current i
    let currentIndex = i;
    // //init var to remember blanks
    // let blanksCounter = 0;
    //if the current char is not a blank
    if(str[i] !== ' '){
        //array takes current char as first element and its loneliness as 0
        chars.str[i] = 0;
    }
    //while current character is not blank
    while(str[i] !== ' '){
        //verify if previous character was blank
        if(str[currentIndex] == ' ') {
            //blank var incremented
            chars.[str[i]].++;
            //temp var decremented
            currentIndex--;
        }
    }
    //temp var reinit with current index i
    currentIndex = i;
    //while current character is not blank
    while(str[i] !== ' '){
        //verify if next character is blank
        if(str[currentIndex] == ' '){
            //blank var incremented
            blanksCounter++;
            //temp var incremented
            currentIndex--
        }
    }
    //obj attribute takes the value from the blank var
    chars.str[i]
    //if blank var is greater than loneliest 
        //loneliest becomes blank variable
}
//init new array to display loneliest characters
//iterate through array of chars and their values
    //verify if current attribute has an equal value to the loneliest char
        //add element to loneliest array
//return sorted array of characters
        

}

