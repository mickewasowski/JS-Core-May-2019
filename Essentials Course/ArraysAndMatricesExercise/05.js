function nondecreasingSubsequence(input){
    let array = input;
    let currMax = Number(array[0]);

    let newArray = [];
    newArray.push(currMax);

    for (let i = 1; i < array.length; i++) {
        if (currMax <= Number(array[i])) {
            currMax = Number(array[i]);
            newArray.push(currMax);
        }      
    }

    for (let i = 0; i < newArray.length; i++) {
        console.log(newArray[i]);
    }
}

nondecreasingSubsequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])