function solve(array){
    let number = Number(array[0]);

    for (let i = 1; i < array.length; i++) {
        switch(array[i]){
            case'chop':
            number = number / 2;
            break;
            case'dice':
            number = Math.sqrt(number);
            break;
            case'spice':
            number += 1;
            break;
            case'bake':
            number *= 3;
            break;
            case'fillet':
            number = number - (number * 0.2);
            break;
        }
        console.log(number);
    }
}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])