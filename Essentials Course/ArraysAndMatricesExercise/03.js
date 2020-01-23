function addRemove(input){
    let array = input;

    let numArray = [];
    let innitial = 1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'add') {
            numArray.push(innitial);
        }else if(array[i] === 'remove'){
            numArray.pop();
        }
        innitial++;        
    }

    if(numArray.length === 0){
        console.log('Empty');
    }else{
        for (let i = 0; i < numArray.length; i++) {
            console.log(numArray[i]);       
        }
    }
}

addRemove(['remove', 
'remove', 
'remove']
)