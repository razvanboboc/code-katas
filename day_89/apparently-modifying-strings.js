function apparently(string) {
    let result =  string.split(' ').map((x) => {
      if(x === 'but' || x === 'and'){
        return x + ' apparently';
      }
      return x;
    });
    console.log(result)
    for(let i = 0; i < result.length; i++){
        console.log(result[i])
        if(result[i] === 'apparently' && result[i+1] === 'apparently'){
            result.splice(i, 1);
            i--;
        }
    }
    return result.join(' ');
  }

console.log(apparently('but apparently'));
