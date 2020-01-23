function solve(array){
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    checkDifferenceBetweenPointAndZero(x1,y1);
    checkDifferenceBetweenPointAndZero(x2,y2);
    checkDifferenceBetweenPoints(x1,y1,x2,y2);

    function checkDifferenceBetweenPointAndZero(x,y){
        let distance = Math.sqrt(Math.pow((0 - x),2) + Math.pow((0 - y),2));
        if (Number.isInteger(distance)) {
            console.log(`{${x}, ${y}} to {0, 0} is valid`);
        }
        else
        {
            console.log(`{${x}, ${y}} to {0, 0} is invalid`)
        }
    }

    function checkDifferenceBetweenPoints(x1,y1,x2,y2){
        let distance = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else
        {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }
}
solve([2, 1, 1, 1])