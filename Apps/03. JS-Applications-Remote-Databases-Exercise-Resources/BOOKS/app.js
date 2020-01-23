const kinveyElements = {
    kinveyAppKey: 'kid_S1brE5JMS',
    kinveySecret: '105b075feddd4edda2bf77fae9356c84'
}

const kinveyUsername = 'guest';
const kinveyPassword = 'guest';

document.getElementById('submitBtn').addEventListener('click', function (e){
    e.preventDefault();

    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let isbn = document.getElementById('isbn');

    if(title && author && isbn){
        const dataObjects = {
            title: title.value,
            author: author.value,
            isbn: isbn.value
        };

        const headers = {
            method: 'POST',
            body:JSON.stringify(dataObjects),
            credentials: 'include',
            Authorization: 'Basic ' + btoa(`${kinveyUsername}:${kinveyPassword}`),
            headers: {
                "Content-Type" : "application/json"
            }
        };
        let baseUrl = `https://baas.kinvey.com/appdata/${kinveyElements.kinveyAppKey}/books`;

        fetch(baseUrl, headers)
        .then((res) => res.json());
    }
});

function handler(){
    if (res.status >= 400) {
        throw new Error(res.status);
    }

    return res.json();
}

let loadBtn = document.getElementById('loadBooks').addEventListener('click', addBook);

function addBook(ev){
    ev.preventDefault();

    let baseUrl = `https://baas.kinvey.com/appdata/${kinveyElements.kinveyAppKey}/Books`;

    fetch(baseUrl,{
        method: 'GET',
        credentials: 'include',
        Authorization: 'Basic ' + btoa('guest:guest'),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        let keys = Object.keys(data);
        let values = Object.values(data);

        //let tbodyElem = document.querySelector('body > table > tbody');
        let tbodyElem = document.getElementById('booksElements');

        for (let i = 0; i < values.length; i++) {
            let element = `<tr id="${keys[i]}">
                <td>${values[i].title}</td>
                <td>${values[i].author}</td>
                <td>${values[i].isbn}</td>
                <td>
                    <button id="editBtn">Edit</button>
                    <button id="deleteBtn">Delete</td>
                </td>
            </tr>`;

            console.log(tbodyElem);
            tbodyElem.innerHTML += element;
        }
    });
}


