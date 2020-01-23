function attachEvents() {
    let loadBtn = document.getElementById('btnLoad');
    let ulElement = document.getElementById('phonebook');

    loadBtn.addEventListener('click', function () {
        let urlGet = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

        fetch(urlGet)
            .then((info) => info.json())
            .then((data) => {
                let values = Object.values(data);
                let keys = Object.keys(data);

                for (let i = 0; i < keys.length; i++) {
                    let name = values[i].person;
                    let phone = values[i].phone;
                    
                    elementCreation(name,phone);
                }
            })
            .catch(err => () => {
                console.log(err);
            })
    });

    let createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', () => {
        let urlPost = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

        let inputName = document.getElementById('person').value;
        let inputNumber = document.getElementById('phone').value;

        fetch(urlPost, {
            method: 'post',
            body: JSON.stringify({
                person: `${inputName}`,
                phone: `${inputNumber}`
            })
        })
        .then((response) => {
                console.log(`Request success: ${response}`);
        })
        .catch((error) => {
                console.log(`Request failed: ${error}`);
        });

        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';

        elementCreation(inputName,inputNumber);
    });

    function deleteEvent() {
        let item = this.parentElement.id;

        let deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${item}.json`;

        fetch(deleteUrl, {
            method: 'delete'
        })
            .then(response => response.json());

        document.getElementById('phonebook').removeChild(this.parentElement);
    }

    function elementCreation(name, phone){
        let liElement = document.createElement('li');
        liElement.textContent = `${name}: ${phone}`;

        let deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', deleteEvent);
        deleteBtn.textContent = 'Delete';

        liElement.appendChild(deleteBtn);
        ulElement.appendChild(liElement);
    }
}

attachEvents();