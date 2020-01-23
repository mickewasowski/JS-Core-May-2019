function nthElementArray(input){
    let array = input;
    let step = Number(array.pop());

    for (let i = 0; i < array.length; i+=step) {
        console.log(array[i]);
    }
}

nthElementArray(['5', 
'20', 
'31', 
'4', 
'20', 
'2'])