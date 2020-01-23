function solve() {
    let input = document.getElementById('string').value;
    let output = document.getElementById('result');

    let tokens = input.split(', ');
    let text = tokens[0];
    let info = tokens[1];

    let regexName = / ([A-Z]+([A-Za-z]*)?)(-[A-Z][A-Za-z]*\.)?-([A-Z][A-Za-z]*)? /g;
    let airportRegex = / [A-Z]{3}\/[A-Z]{3} /g;
    let flightNumberRegex = / [A-Z]{1,3}[0-9]{1,5} /g;
    let companyRegex = /- [A-Za-z]{1,}\*[A-Za-z]{1,} /g;

    if (info === 'name') {
        let passengerName = text.match(regexName);
        let name = passengerName[0].trim().replace(/[-]/g,' ');

        output.textContent = `Mr/Ms, ${name}, have a nice flight!`;
    }else if(info === 'flight'){
        let flightNumber = text.match(flightNumberRegex)[0];
        let flightNumberString = flightNumber.substring(1);
        flightNumberString = flightNumberString.substring(0,flightNumberString.length - 1);
        
        let aiportName = text.match(airportRegex)[0];
        let aiportNames = aiportName.split('/');
        let leaving = aiportNames[0].substring(1,aiportNames[0].length);
        let arriving = aiportNames[1].substring(0,aiportNames[1].length - 1);

        output.textContent = `Your flight number ${flightNumberString} is from ${leaving} to ${arriving}.`;
    }else if(info === 'company'){
        let companyName = text.match(companyRegex)[0];
        let companyString = companyName.split('*');
        let first = companyString[0].substring(2,companyString[0].length);
        let second = companyString[1].substring(0,companyString[1].length - 1);
        let company = first + ' ' + second;

        output.textContent = `Have a nice flight with ${company}.`;
    }else if(info === 'all'){ 
        let passengerName = text.match(regexName);
        let name = passengerName[0].trim().replace(/[-]/g,' ');

        let flightNumber = text.match(flightNumberRegex)[0];
        let flightNumberString = flightNumber.substring(1);
        flightNumberString = flightNumberString.substring(0,flightNumberString.length - 1);
        
        let aiportName = text.match(airportRegex)[0];
        let aiportNames = aiportName.split('/');
        let leaving = aiportNames[0].substring(1,aiportNames[0].length);
        let arriving = aiportNames[1].substring(0,aiportNames[1].length - 1);

        let companyName = text.match(companyRegex)[0];
        let companyString = companyName.split('*');
        let first = companyString[0].substring(2,companyString[0].length);
        let second = companyString[1].substring(0,companyString[1].length - 1);
        let company = first + ' ' + second;

        output.textContent = `Mr/Ms, ${name}, your flight number ${flightNumberString} is from ${leaving} to ${arriving}. Have a nice flight with ${company}.`
    }   
}