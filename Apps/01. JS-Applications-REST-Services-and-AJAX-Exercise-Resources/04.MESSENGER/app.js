function attachEvents() {
    let url = 'https://rest-messanger.firebaseio.com/messanger.json';

    document.getElementById('submit').addEventListener('click', ()=>{
        let name = document.getElementById('author').value;
        let message = document.getElementById('content').value;

        console.log(name);
        console.log(message);

        fetch(url,{
            method: 'post',
            body: JSON.stringify({
                author: `${name}`,
                content: `${message}`
            })
        })
        .then((response) => console.log(`Response is: ${response}`))
        .catch((err) => console.log(`Request failed: ${err}`));

        document.getElementById('author').value = '';
        document.getElementById('content').value = '';
    });

    document.getElementById('refresh').addEventListener('click', ()=>{
        
        fetch(url)
        .then((request) => request.json())
        .then(data => {
            let messagingArea = document.getElementById('messages');

            let values = Object.values(data);
            console.log(values);
            
            for (const mes of values) {
                messagingArea.value += `${mes.author}: ${mes.content}` + '\n';
            }
        });
    });
}

attachEvents();