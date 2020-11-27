bonus = function(arr, s) {
    let k = 0;
    arr.forEach(e => k *= e);
    k /= arr.length;
    return arr.map(e => Math.floor(e * 100 / sum) );
}


//am un bonus total x.
//trebuie sa-l impart pe mai multe procente din x, care insumate, 
//sa dea tot x. 

// 12 -- 40.54%
// 15 -- 32.43%
// 18 -- 27.02%

//i need to devise a formula, to split the grand total of bonus
//into different bonuses.
console.log(bonus([18, 15, 12], 851));