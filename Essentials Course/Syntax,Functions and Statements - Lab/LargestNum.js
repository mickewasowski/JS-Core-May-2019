function solve(num1,num2,num3){
    let first = num1;
    let second = num2;
    let third = num3;

    let max = 0;

    if (first > second && first > third){
        max = first;
    }else if (second > first && second > third){
        max = second;
    } else {
        max = third;
    }

    console.log(`The largest number is ${max}.`)
}