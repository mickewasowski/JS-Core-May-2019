function sortArray(input) {
    let array = input;

    array = array.sort(function (a,b) {
        return a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase())
    });

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

sortArray(['test', 
'Deny', 
'omen', 
'Default']
)