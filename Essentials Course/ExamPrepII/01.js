function coffeeMachine(input) {
    let totalIncome = 0;

    for (let i = 0; i < input.length; i++) {
        let currentArray = input[i].split(', ');

        let money = Number(currentArray[0]);
        let drink = currentArray[1];

        let price = 0.8;
        if (currentArray.length === 3) {
            if (Number(currentArray[2]) > 0) {
                price += 0.1;
            }
        } else if (currentArray.length === 4) {
            if (currentArray[2] === 'milk') {
                price = price + Number((price * 0.1).toFixed(1));
            }else if(currentArray[2] === 'decaf'){
                price += 0.1;
            }
            if (Number(currentArray[3]) > 0) {
                price += 0.1;
            }
        } else if (currentArray.length === 5) {
            if (currentArray[2] === 'decaf') {
                price += 0.1;
            }
            if (currentArray[3] === 'milk') {
                price = price + Number((price * 0.1).toFixed(1));
            }
            if (Number(currentArray[4]) > 0) {
                price += 0.1;
            }
        }

        let difference = Math.abs(money - price);
        difference = difference.toFixed(2);
        if (money < price) {
            console.log(`Not enough money for ${drink}. Need ${difference}$ more.`)
        } else {
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${difference}$`)
            totalIncome += price;
        }
    }
    console.log(`Income Report: ${totalIncome.toFixed(2)}$`)
}


coffeeMachine(
    ['1.00, coffee, caffeine, milk, 4',
        '0.40, tea, milk, 2',
        '1.00, coffee, decaf, 0']
)