function solve() {
    let keys = Array.from(document.getElementsByTagName('button'));
    console.log(keys)
    let clearButton = keys[0];
    
    let clearIndex = keys.indexOf(clearButton);
    keys.splice(clearIndex,1);

    keys.forEach((k) => {
        k.addEventListener('click',getExpression);
    });

    let clearButn = document.getElementsByClassName('clear')[0];
    clearButn.addEventListener('click',clearEvent);

    function getExpression(e){
        let currentButton = e.target;
        
        let resultFiled = document.getElementById('expressionOutput');

        let symbol = currentButton.value;

        if (symbol === '=') {           
            evalExpression()
        }
        else if (symbol === '+' || symbol === '/' || symbol === '*' || symbol === '-') {
            resultFiled.textContent += ` ${symbol} `
        }
        else{
            resultFiled.textContent += currentButton.value;
        }
        
    }

    function evalExpression(){
        let resultField = document.getElementById('expressionOutput').textContent;
        let finalResult = resultField;
        let output = document.getElementById('resultOutput');
        try {
            finalResult = eval(resultField)
            output.textContent = finalResult;
        }
        catch(err) {
            finalResult = "NaN"
            output.textContent = finalResult;
        }
    }

    function clearEvent(){
        let result = document.getElementById('expressionOutput');        
        result.textContent = '';
        let resultOutput = document.getElementById('resultOutput');
        resultOutput.textContent = '';
    }
}