function calculateTheBudget(input) {
    let tokens = input;
    let budget = Number(tokens.shift());
    let videocardsCount = Number(tokens.shift());
    let processorsCount = Number(tokens.shift());
    let ramcardsCount = Number(tokens.shift());

    let videocardsSum = videocardsCount * 250;
    let processorsSum = processorsCount * 400;
    let ramcardsSum = ramcardsCount * 55;

    let totalMoneyNeeded = videocardsSum + processorsSum + ramcardsSum;
    let donationMoney = 0;
    if (videocardsCount > processorsCount) {
        donationMoney = totalMoneyNeeded * 0.15;
        totalMoneyNeeded -= donationMoney;
    }

    if (budget < totalMoneyNeeded) {
        let moneyNeeded = totalMoneyNeeded - budget;
        console.log(`Not enough money! You need $${moneyNeeded.toFixed(2)} more!`);
    } else {
        let moneyLeft = budget - totalMoneyNeeded;
        console.log(`You successfully bought ${videocardsCount} video cards, ${processorsCount} processors и ${ramcardsCount} ram cards! You have $${moneyLeft.toFixed(2)} money left!`);

        if (donationMoney > 0) {
            console.log(`$${donationMoney} will be donated!`);
        }
    }

}
calculateTheBudget(['845.21','1','1','2'])
