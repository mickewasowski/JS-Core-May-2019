function solve(num = 5){
    let result = "";
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <num ; j++) {
                result += "* ";
        }
        //result.substr(result.length - 1, 1);
        result += "\n";
    }
    console.log(result);
}