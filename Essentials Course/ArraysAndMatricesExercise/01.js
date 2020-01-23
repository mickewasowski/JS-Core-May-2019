function arrayWithDelimiter(input){
    let array = input;
    let delimiter = array.pop();

    console.log(array.join(delimiter))
}

arrayWithDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
)