function trainStation(num, array) {
    let wagonCapacity = num;
    let passengers = array;

    let trainEmptyWagons = []; // the size has to be the length of the input array

    let left = 0;
    for (let i = 0; i < passengers.length; i++) {
        let toGetIn = passengers[i];
        if (left + toGetIn <= wagonCapacity) {        
            trainEmptyWagons.push(left + toGetIn);
            left = 0;
        }
        // if (toGetIn <= wagonCapacity) {
        //     trainEmptyWagons.push(toGetIn);
        // }
        else {
            if (left === 0) {
                left = toGetIn - wagonCapacity;
                trainEmptyWagons.push(wagonCapacity);
            }else{
                //29 + 1 => 30 => 30 - 10 => 20
                left += toGetIn;
                left -= wagonCapacity;
                trainEmptyWagons.push(wagonCapacity);
            }
        }
    }

    if (left > 0) {
        console.log(trainEmptyWagons);
        console.log(`Could not fit ${left} passengers`);
    }
    if (left === 0) {
        console.log(trainEmptyWagons);
        console.log(`All passengers aboard`);
    }
}

trainStation(10, [9,39,1,0,0])