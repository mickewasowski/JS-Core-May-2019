function solve(array){
    let speedlimit= 0;
    let difference = 0;
    if (array[1] === 'motorway') {
        speedlimit = 130;
        difference = array[0] - speedlimit;
        checkForSpeeding(difference);   
    }
    else if (array[1] === 'interstate') {
        speedlimit = 90;
        difference = array[0] - speedlimit;
        checkForSpeeding(difference);
    } 
    else if (array[1] === 'city') {
        speedlimit = 50;
        difference = array[0] - speedlimit;
        checkForSpeeding(difference);
    } 
    else if (array[1] === 'residential') {
        speedlimit = 20;       
        difference = array[0] - speedlimit;
        checkForSpeeding(difference);
    }
    
    function checkForSpeeding(difference){
        if (difference > 0 && difference <= 20) {
            console.log('speeding')
        }
        else if(difference > 0 && difference <= 40){
            console.log('excessive speeding')
        }
        else if(difference > 0 && difference > 40){
            console.log('reckless driving')
        }
    }
}

solve([200, 'motorway'])