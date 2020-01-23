function atmMachine(input){
   let totalCashInAtm = 0;
   let banknotesInAtm = [];

   for (let i = 0; i < input.length; i++) {
       let current = input[i];
       if (current.length > 2) {
           //insert
           let inserted = insertInAtm(current);
           console.log(`Service Report: ${inserted}$ inserted. Current balance: ${totalCashInAtm}$.`)
       }else if(current.length === 2){
        //withdraw
        let accountBalance = current[0];
        let withdrawMoney = current[1];

        if (accountBalance < withdrawMoney) {
            console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
        }else if(totalCashInAtm < accountBalance){
            console.log(`ATM machine is out of order!`);
        }else{
            withdrawOperation(withdrawMoney);
            console.log(`You get ${withdrawMoney}$. Account balance: ${accountBalance - withdrawMoney}$. Thank you!`)
        }
       }else if(current.length === 1){
        //report
        let banknote = current[0];
        let count = banknotesInAtm.filter(x => x === banknote).length;
        console.log(`Service Report: Banknotes from ${current}$: ${count}.`)
       }      
   }

   function insertInAtm(money){
       let inserted = 0;
    money.forEach(e => {
        inserted += e;
        totalCashInAtm += e;
        banknotesInAtm.push(e);
    });
    return inserted;
   }

   function withdrawOperation(money){
        totalCashInAtm -= money;
        banknotesInAtm = banknotesInAtm.sort((a,b) => b - a);

        for (let i = 0; i < banknotesInAtm.length; i++) {
            let curr = banknotesInAtm[i];
            let remove = 0;
            if(remove + curr <= money){
                remove += curr;
                banknotesInAtm.splice(i,1);
                i--;
            }           
        }
   }
}
atmMachine([[20, 5, 100, 20, 1],
 [457, 25],
 [1],
 [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
 [20, 85],
 [5000, 4500],]
)