function solve(x){
    let num = x.toString();
    let bool = 0;
    let sum = 0;

    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    
    if(num.length > 1){
        for (let i = 1; i < num.length ; i++) {
            if (num[0] == num[i]){
                bool = 1;
            } else {
                bool = 0;
                break;
            }
        }
    }else{
        bool = 1;
    }
     
     if (bool == 1){
         console.log('true');
         console.log(sum);
     } else {
         console.log('false');
         console.log(sum);
     }
 }

 solve(1)