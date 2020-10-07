// function disemvowel(str){
	
	// for(let i = 0; i < str.length; i++){
		// if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ||
		   // str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U'){
			// str = str.replace(str[i], ''); 
			// i--;
		// }
	// }
	// return str;
// }

function disemvowel(str){
	return str.replace(/[aeiou]/gi,'');
}

console.log(disemvowel('This website is for losers LOL!'));


