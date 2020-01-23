function solve (array){
    let result = "{ ";

    for (let i = 0; i < array.length; i+=2) {
        if (i == array.length - 2) {
        result += `${array[i]}: ${array[i + 1]} }`;
            
        }
        else{

            result +=`${array[i]}: ${array[i + 1]}, `;
        }
    }
    console.log(result);
}

solve(['Yoghurt',48, 'Rise',138,'Apple',52])

//{ Yoghurt: 48, Rise: 138, Apple: 52 }