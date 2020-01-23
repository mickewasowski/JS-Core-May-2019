function getInfo() {
    let input = document.getElementById('stopId').value;
    let url = `https://judgetests.firebaseio.com/businfo/${input}.json`;

    fetch(url)
    .then((info) => info.json())
    .then((data) => {
        document.getElementById('stopName').textContent = data.name;
        document.getElementById('buses').innerHTML = '';

        let buses = Object.entries(data.buses);

        for (let [busName, busTime] of buses) {
            let list = document.createElement('li');
            list.textContent = `Bus ${busName} arrives in ${busTime} minutes`;

            let busesUl = document.getElementById('buses');
            busesUl.appendChild(list);
        }

        
    })
    .catch(error => {
        document.getElementById('stopName').textContent = 'Error!';
    });
    
    document.getElementById('stopId').value = '';
}