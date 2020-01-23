(function(a,b){

    let functions = {
        add: (a,b) => {
            return [a[0] + b[0],a[1] + b[1]]
        },
        multiply: (a,b) =>{
            return [a[0]*b,a[1]*b]
        },
        length: function(a){
            return Math.sqrt(a[0]*a[0] + a[1]*a[1])
        },
        dot: function(a,b){
            return a[0]*b[1] + b[0]*a[1]
        },
        cross: function(a,b){
            return  a[0]*b[1] - a[1]*b[0]
        }
    };

    return functions;
}());

console.log(solution.add([1, 1], [1, 0]));