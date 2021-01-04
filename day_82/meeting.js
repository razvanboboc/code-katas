function meeting(s) {
    s = s.split(';');
    for(let i = 0; i < s.length; i++){
        s[i] = s[i].toUpperCase().split(':').reverse();
        s[i][1] = ' ' + s[i][1];
    }
    return '(' + s.sort().join(')(') + ')';
}

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
//"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
console.log(meeting(s));