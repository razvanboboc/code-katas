function invert(array) {
    return array.slice().map(x => {
        if(x < 0) {
            return Math.abs(x);
        } 
        if(x > 0) {
            return -x;
        }
        return 0;
    });
}