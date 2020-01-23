function solve(arr1,arr2,arr3){
    let sumLength;
    let averageLenght;

    let firstArg = arr1.length;
    let secondArg = arr2.length;
    let thirdArg = arr3.length;

    sumLength = firstArg + secondArg + thirdArg;
    averageLenght = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLenght);
}

solve('chocolate','ice cream','cake')