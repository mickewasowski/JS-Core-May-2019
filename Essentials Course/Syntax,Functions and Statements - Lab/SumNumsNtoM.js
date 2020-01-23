function solve(num1,num2){
    let first = +num1;
    let second = +num2;

    let result = 0;

    for (let i = first; i <= second; i++) {
        result += i;
    }

    console.log(result);
}

solve(1,3)