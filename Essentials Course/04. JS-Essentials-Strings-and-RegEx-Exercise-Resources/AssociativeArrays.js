function racers(input) {
    let racerNames = input[0].split(', ');
    let competitors = [];

    for (let j = 0; j < racerNames.length; j++) {
        if (!competitors.includes(racerNames[j])) {
            competitors.push(racerNames[j]);
            //console.log(`${racerNames[j]} assigned for the race.`);
        } else {
            //console.log(`${racerNames[j]} is already assigned for the race!`)
        }
    }

    let raceInfo = [];
    for (let i = 1; i < input.length - 1; i++) {
        let tokens = input[i].split(' -> ');
        let racerName = tokens[0];
        let racerTime = Number(tokens[1]);

        if (!competitors.includes(racerName)) {
            //console.log(`${racerName} is not assigned for the race!`);
        } else {
            let racerLaps = 1;
            if (raceInfo.length === 0) {
                let racer = {
                    name: racerName,
                    time: racerTime,
                    laps: racerLaps
                };
                raceInfo.push(racer);
            } else {
                let bool = checkIfExist(raceInfo, racerName);
                if (bool !== -1) {
                    if (raceInfo[bool].laps === 5) {
                        continue;
                    }else{
                        raceInfo[bool].time += racerTime;
                        raceInfo[bool].laps++;
                    }
                }
                else {
                    raceInfo.push({
                        name: racerName,
                        time: racerTime,
                        laps: racerLaps
                    });
                }
            }
        }
    }

    raceInfo = raceInfo.filter(x => x.laps >= 5);
    if (raceInfo.length < 1) {
        console.log('No one finished the race! The race will be replayed tomorrow!');
    } else {
        raceInfo = raceInfo.sort(function (a, b) { return a.time - b.time });


        for (let i = 0; i < raceInfo.length; i++) {
            console.log(`${raceInfo[i].name} finished the race with total of ${raceInfo[i].time} seconds!`)
        }
    }

    function checkIfExist(array, name) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].name === name) {
                return i;//true;
            } else if (i !== array.length - 1) {
                continue;
            } else {
                return -1;//false;
            }
        }
    }
}
racers(['Gosho, Gosho, Stamat, Gosho, Tosho',
    'Gosho -> 50',
    'Gosho -> 20',
    'Gosho -> 20',
    'Gosho -> 10',
    'Gosho -> 10',
    'Stamat -> 5',
    'Stamat -> 5',
    'Stamat -> 5',
    'Stamat -> 5',
    'Tosho -> 10',
    'Tosho -> 10',
    'Tosho -> 10',
    'Stamat -> 5',
    'Unknown -> 10',
    'Tosho -> 10',
    'Finish'
])