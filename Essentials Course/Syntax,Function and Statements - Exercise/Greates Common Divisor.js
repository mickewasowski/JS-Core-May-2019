function solve(x,y){
    while(y){
        var t = y;
        y = x % y;
        x = t;
    }
    console.log(x);
}