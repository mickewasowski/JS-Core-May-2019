function solve() {
    let selectOption = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';
    
    selectOption.appendChild(binaryOption);
    selectOption.appendChild(hexadecimalOption);

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click',clickEvent);
 
    function clickEvent(e){
        var option = selectOption.options[selectOption.selectedIndex].value;
        if (option === 'binary') {
            let input = document.getElementById('input').value;
            let result = document.getElementById('result');
            result.value = Number(input).toString(2);
        }else if(option === 'hexadecimal'){
            let input = document.getElementById('input').value;
            let result = document.getElementById('result');
            result.value = Number(input).toString(16).toUpperCase();
        }
    }
}