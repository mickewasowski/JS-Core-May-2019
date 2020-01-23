function solve(input){
    let object = {};

    let currentArray = input.toString();
    currentArray = currentArray.split(/[\s\,\'\.\-]+/);

    for (let i = currentArray.length - 1; i >= 0; i--) {
        if (currentArray[i] === "") {
            currentArray.splice(i,1);
        } 
    }

    for (let i = 0; i < currentArray.length; i++) {
        if (object.hasOwnProperty(currentArray[i])) {
            object[currentArray[i]] += 1;
        }else{
            object[currentArray[i]] = 1;
        }       
    }
    let myJson = JSON.stringify(object);
    console.log(myJson);
}
solve("JS devs use Node.js for server-side JS.-- JS for devs")