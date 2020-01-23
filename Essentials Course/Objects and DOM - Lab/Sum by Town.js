function solve(array){
    let objects = {};

    for (let i = 0; i < array.length; i+=2) {
        if (objects.hasOwnProperty(array[i])) {
            objects[array[i]] += Number(array[i + 1]);
        }
        else{
            objects[array[i]] = Number(array[i + 1]);
        }       
    }
    let myJson = JSON.stringify(objects);
    console.log(myJson);
}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4'])