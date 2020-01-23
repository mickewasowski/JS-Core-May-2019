function solve() {
    let input = document.getElementById('input');
    let string = input.value;
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '1') {
            sum += Number(string[i]);
        }
    }

    //todo while loop 129 => 6
    let sumToString = '';
    sumToString += sum.toString();
    let elementForRemoval = 0;
    while(sumToString.length > 1){
        let groupNum = 0;
        
        for (let i = 0; i < sumToString.length; i++) {
            groupNum += Number(sumToString[i]);
        }
        sumToString = groupNum.toString();
        elementForRemoval = groupNum; // it works perfectly
    }

    let end = string.length - elementForRemoval;
    let finalString = string.slice(elementForRemoval,end); //it works perfectly

    let parts = finalString.split(/([\d]{8})/).filter((x) => x); //it works perfectly

    let wordArray = [];
    let word = '';
    for (let i = 0; i < parts.length; i++) {
        var digit = parseInt(parts[i], 2);
        var res = String.fromCharCode(digit);
        console.log(res)
        word = res;
        wordArray.push(word);
    } //it works perfectly
    //console.log(wordArray);

    let valid = wordArray.filter((w) => /[A-Za-z ]+/g.test(w));
    let words = valid.join('');
    words = words.replace(/^\w\s\*/g,'');
    console.log(words);
    //console.log(valid)


    //todo it does not visualize the result box
    let resultField = document.getElementById('resultOutput');
    //console.log(resultField)
    resultField.textContent = `${words}`;
}