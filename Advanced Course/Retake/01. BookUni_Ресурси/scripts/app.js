function solve() {

    let addBtn = document.querySelector('body > form > button');
    addBtn.addEventListener('click', addNewBook);

    function addNewBook(e) {
        let title = document.querySelector('body > form > input[type=text]:nth-child(2)').value;
        let year = parseInt(document.querySelector('body > form > input[type=number]:nth-child(4)').value);
        let price = parseFloat(document.querySelector('body > form > input[type=number]:nth-child(6)').value).toFixed(2);

        let parentDiv = document.querySelector('#outputs > section:nth-child(2) > div');

        let newBookDiv = document.createElement('div');
        newBookDiv.className = "book";


        if(title && year >= 2000 && price > 0){
            let parag = document.createElement('p');
            parag.textContent = `${title} [${year}]`;

            let buyBtn = document.createElement('button');
            buyBtn.textContent = `Buy it only for ${price} BGN`;
            buyBtn.addEventListener('click', buyEvent);

            let moveOldBtn = document.createElement('button');
            moveOldBtn.textContent = 'Move to old section';
            moveOldBtn.addEventListener('click', moveToOldBooksSection);

            newBookDiv.appendChild(parag);
            newBookDiv.appendChild(buyBtn);
            newBookDiv.appendChild(moveOldBtn);

            parentDiv.appendChild(newBookDiv); 

        }else if(title && year < 2000 && price > 0){
            let parent = document.querySelector('#outputs > section:nth-child(1) > div');

            price = price - price*0.15;
            price = price.toFixed(2);

            let oldBookDiv = document.createElement('div');
            oldBookDiv.className = "book";

            let parag = document.createElement('p');
            parag.textContent = `${title} [${year}]`;

            let buyBtn = document.createElement('button');
            buyBtn.textContent = `Buy it only for ${price} BGN`;
            buyBtn.addEventListener('click', buyEvent);

            oldBookDiv.appendChild(parag);
            oldBookDiv.appendChild(buyBtn);

            parent.appendChild(oldBookDiv); 
        }

        e.preventDefault();

        clearFields();
    }

    function buyEvent(e){
        let elem = e.target.parentNode;

        let price = e.target.textContent;

        let regex = /\d+(\.\d+)?/g;

        let num = price.match(regex);

        let amount = num[0];

        let totalAmountElem = document.querySelector('body > h1:nth-child(3)').innerHTML;
        let num1 = totalAmountElem.match(regex);
        let currentTotal = parseFloat(Number(num1[0]) + Number(amount)).toFixed(2);

        document.querySelector('body > h1:nth-child(3)').innerHTML = `Total Store Profit: ${currentTotal} BGN`;

        let parent = elem.parentNode;
        parent.removeChild(elem);
    }

    function moveToOldBooksSection(e){
        let elem = e.target.parentNode;
        let moveBtnElem = elem.children[2];

        elem.removeChild(moveBtnElem);

        let price = elem.children[1].textContent;

        let regex = /\d+(\.\d+)?/g;

        let num = price.match(regex);

        let newPrice = parseFloat(Number(num[0]) - Number(num[0])*0.15).toFixed(2);


        elem.children[1].textContent = `Buy it only for ${newPrice} BGN`;

        document.querySelector('#outputs > section:nth-child(1) > div').appendChild(elem);
    }

    function clearFields(){
        document.querySelector('body > form > input[type=text]:nth-child(2)').value = "";
        document.querySelector('body > form > input[type=number]:nth-child(4)').value = "";
        document.querySelector('body > form > input[type=number]:nth-child(6)').value = "";
    }
}