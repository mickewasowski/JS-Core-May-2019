// Example of a WORKING PizzUni Class
const expect = require('chai').expect;

class PizzUni {
    constructor() {
        this.registeredUsers = [];
        this.availableProducts = {
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        };
        this.orders = [];
    }

    registerUser(email) {

        const user = this.doesTheUserExist(email);

        if (user) {
            throw new Error(`This email address (${email}) is already being used!`)
        }

        const currentUser = {
            email,
            orderHistory: []
        };

        this.registeredUsers.push(currentUser);

        return currentUser;
    }

    makeAnOrder(email, orderedPizza, orderedDrink) {

        const user = this.doesTheUserExist(email);

        if (!user) {
            throw new Error(`You must be registered to make orders!`);
        }

        const isThereAPizzaOrdered = this.availableProducts.pizzas.includes(orderedPizza);

        if (!isThereAPizzaOrdered) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        }

        let userOrder = {
            orderedPizza
        };

        const isThereADrinkOrdered = this.availableProducts.drinks.includes(orderedDrink);

        if (isThereADrinkOrdered) {
            userOrder.orderedDrink = orderedDrink;
        }

        user.orderHistory.push(userOrder);

        const currentOrder = {
            ...userOrder,
            email,
            status: 'pending'
        };
        this.orders.push(currentOrder);

        return this.orders.length - 1;
    }

    detailsAboutMyOrder(id) {
        if (this.orders[id]) {
            return `Status of your order: ${this.orders[id].status}`;
        }
    }

    doesTheUserExist(email) {
        return this.registeredUsers.filter((user) => user.email === email)[0];
    }

    completeOrder() {
        if (this.orders.length > 0) {
            const index = this.orders.findIndex((o) => o.status === "pending");
            this.orders[index].status = 'completed';

            return this.orders[index];
        }
    }
}

// describe("Testing Pizzuni", ()=>{
//     it('testing register', () =>{
//         let myClass = new PizzUni();
//         let email = 'newEmail';
//         let expectedResult = myClass.registerUser(email);

//         expect(expectedResult).to.equal(`{ email: \'${email}\', orderHistory: [] }`,"Error");
//     });
// });

let myClass = new PizzUni();
console.log(myClass.registerUser('newUser'));
console.log(myClass.registerUser('anotherUser'));

console.log(myClass.makeAnOrder('newUser','Italian Style'));
console.log(myClass.makeAnOrder('anotherUser','Italian Style'));

console.log(myClass.detailsAboutMyOrder(0));
console.log(myClass.detailsAboutMyOrder(1));

console.log(myClass.completeOrder());
console.log(myClass.completeOrder());

myClass.doesTheUserExist('newUser');

module.exports = PizzUni; // This piece of code exports the PizzUni Class, so it could be accessed in other files.