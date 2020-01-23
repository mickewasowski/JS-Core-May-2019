function solve() {
    let stringField = document.getElementById('string');
    let keyWord = stringField.value;
    
    let textField = document.getElementById('text');
    let text = textField.value;

    let regex = /(east|north)[\s\S]*?([\d]{2})[^,]*?,[^,]*?([\d]{6})/gi;

    let north = '';
    let east = '';

    while ((m = regex.exec(text)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        if (m[1].toUpperCase() === 'NORTH') {
            north = `${m[2]}.${m[3]} N`;
        }else if(m[1].toUpperCase() === 'EAST'){
            east = `${m[2]}.${m[3]} E`;
        }
    }

    let reg = new RegExp(`${keyWord}(.*?)${keyWord}`, 'g');
    let message = reg.exec(text)[1];

    let resultField = document.getElementById('result');

    let p1 = document.createElement('p');
    p1.textContent = north;

    let p2 = document.createElement('p');
    p2.textContent = east;

    let p3 = document.createElement('p');
    p3.textContent = `Message: ${message}`;

    resultField.appendChild(p1);
    resultField.appendChild(p2);
    resultField.appendChild(p3);
}