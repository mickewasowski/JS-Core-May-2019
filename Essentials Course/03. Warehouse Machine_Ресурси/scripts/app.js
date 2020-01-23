function coffeeStorage() {
    let inputField = document.getElementsByTagName('textarea')[0].value;
    let tokens = JSON.parse(inputField);
    
    let storage = [];

    for (let i = 0; i < tokens.length; i++) {
        let splited = tokens[i].split(', ');

        let command = splited[0];
        let brand = splited[1];
        let coffee = splited[2];
        let expirationDate = splited[3];
        let quantity = Number(splited[4]);
    }
}