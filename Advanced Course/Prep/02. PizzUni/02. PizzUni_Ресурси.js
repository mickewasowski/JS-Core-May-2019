// Example of a WORKING PizzUni Class
const assert = require('chai').assert;

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
module.exports = PizzUni;
// This piece of code exports the PizzUni Class, so it could be accessed in other files.

// let myclass = new PizzUni();
// myclass.registerUser('userEmail');
// myclass.makeAnOrder('userEmail', 'Italian Style');

// console.log(myclass.completeOrder());

describe('PizzUni class testing',()=>{
    it('test register method with non-existent email',()=>{
        let myClass = new PizzUni(); 
     
        assert.deepEqual(myClass.registerUser('userEmail'),{ email: 'userEmail', orderHistory: [] });
    });

    // it('test register error',()=>{
    //     let myClass = new PizzUni(); 
    //     myClass.registerUser('userEmail');

    //     assert.throw(() => myClass.registerUser('userEmail'),'This email address (userEmail) is already being used!');
    // });

    it('test make an order valid with pizza only', ()=>{
        let myClass = new PizzUni(); 
        myClass.registerUser('userEmail');
        myClass.makeAnOrder('userEmail','Italian Style');

        assert.equal(myClass.makeAnOrder('userEmail','Italian Style'),"1");
    });

    it('test make an order invalid with pizza only', ()=>{
        let myClass = new PizzUni(); 
        myClass.registerUser('userEmail');

        assert.throw(() => myClass.makeAnOrder('userEmail','somePizza'),"You must order at least 1 Pizza to finish the order.");
    });

    // it('test make an order invalid email', ()=>{
    //     let myClass = new PizzUni();       

    //    // assert.throw(() => myClass.makeAnOrder('userEmail','Italian Style'),"You must be registered to make orders!");

    //     assert.throw(() => myClass.makeAnOrder('userEmail','Italian Style'),"");
    // });

    it('test complete order', ()=>{
        let myClass = new PizzUni(); 
        myClass.registerUser('userEmail');
        myClass.makeAnOrder('userEmail','Italian Style');

        //console.log(myClass.completeOrder());

        assert.deepEqual(myClass.completeOrder(),{ orderedPizza: 'Italian Style',
        email: 'userEmail',
        status: 'completed' });
    });
});