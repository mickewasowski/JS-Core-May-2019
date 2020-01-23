function rotateArray(input){
    let array = input;

    let rotations = Number(array.pop());
    rotations = rotations % array.length;

    for (let i = 0; i < rotations; i++) {
        let last = array.pop();
        array.unshift(last);
    }
    console.log(array.join(" "))
}

rotateArray(['1', 
'2', 
'3', 
'4', 
'2']
)