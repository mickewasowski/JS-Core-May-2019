function tickets(array, command) {
    
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketsArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentArray = array[i].split('|');
        let city = currentArray[0];
        let price = Number(currentArray[1]);
        let status = currentArray[2];

        let ticket = new Ticket(city,price,status);
        ticketsArray.push(ticket);
    }

    let sortedTickets = {};
    
    switch(command){
        case"destination":
        sortedTickets = ticketsArray.sort((a,b)=> {
            return a.destionation.localeCompare(b.destination);
        });
        break;
        case"price":
        sortedTickets = ticketsArray.sort((a,b)=> {
            return a.price - b.price;
        });
        break;
        case"status":
        sortedTickets = ticketsArray.sort((a,b)=> {
            return a.status.localeCompare(b.status);
        });
        break;
    }

    return sortedTickets;
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));