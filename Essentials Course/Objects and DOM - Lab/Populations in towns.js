function solve(array){
    let object = {};

    for (let i = 0; i < array.length; i++) {
        let current = array[i].toString();
        current = current.split(/ <-> /);
        let townName = current[0];
        let population = current[1];

        if (object.hasOwnProperty(townName)) {
            object[townName] += Number(population);
        }
        else{
            object[townName] = Number(population);
        }       
    }

    for (const key in object) {
        console.log(`${key} : ${object[key]}`)
    }
}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
    ]
)