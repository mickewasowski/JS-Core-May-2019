function solve(array){
    let objects = [];
    
    for (let i = 1; i < array.length; i++) {
        let current = array[i].split(/\|\s*/);
        
        for (let j = current.length - 1; j >= 0; j--) {
            if (current[j] === "") {
                current.splice(j,1);
            }
        }

        let town = current[0];
        town = town.substring(0,town.length - 1);
        let latitude = Number(current[1]);
        let longitude = Number(current[2]);

        objects.push({Town:`${town}`,Latitude:latitude,Longitude:longitude})
       }

       let json = JSON.stringify(objects);
       console.log(json)
}
solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])