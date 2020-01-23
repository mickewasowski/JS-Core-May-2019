function solve(fruitName,grams,price){
    let kilos = Number(grams) / 1000;
    let moneyNeed = kilos * Number(price);

    console.log(`I need $${moneyNeed.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruitName}.`);
}