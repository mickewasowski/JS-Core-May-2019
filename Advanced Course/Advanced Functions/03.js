//IIFE

(function() {
    let sum = 0;

    return function add(n){
        sum += n;
        add.toString = function(){
            return sum
        };
        return add
    }
}());
