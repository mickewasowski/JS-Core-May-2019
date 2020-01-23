function attachEvents() {
    const icons = {
        sunny: '☀',
        partlySunny: '⛅',
        overcast: '☁',
        rain: '☂',
        degrees: '°'
    };

    document.getElementById('submit').addEventListener('click', () => {
        let inputField = document.getElementById('location').value;

        let url = 'https://judgetests.firebaseio.com/locations.json';

        fetch(url)
            .then((response) => response.json())
            .then(data => {
                for (const d of data) {
                    forecast(inputField, d);
                }
            })
            .catch((error) => {
                document.getElementById('forecast').style.display = 'block';
                document.getElementById('forecast').textContent = 'Error';
            });
    });

    function forecast(inputField, d) {
        if (inputField === d.name) {      
            let individualUrlToday = `https://judgetests.firebaseio.com/forecast/today/${d.code}.json`;

            fetch(individualUrlToday)
                .then((response) => response.json())
                .then(data => {               
                    currentForecast(data);                  
                })
                .catch((error) => {
                    document.getElementById('forecast').style.display = 'block';
                    document.getElementById('forecast').textContent = 'Error';
                });;

            let urlUpcomming = `https://judgetests.firebaseio.com/forecast/upcoming/${d.code}.json`;

            fetch(urlUpcomming)
            .then((response) => response.json())
            .then(data => {
                upcomingForecast(data.forecast);
            }).catch((error) => {
                document.getElementById('forecast').style.display = 'block';
                document.getElementById('forecast').textContent = 'Error';
            });
        }
    }

    function currentForecast(data){
        let name = data.name;
        let tokens = data.forecast;
        let high = tokens.high;
        let low = tokens.low;
        let condition = tokens.condition;

        document.getElementById('forecast').style.display = 'block';
        createCurrentForcastElements(name, high, low, condition);
    }

    function upcomingForecast(data) {
        let upcomingDiv = document.getElementById('upcoming');
        let forecastInfoDiv = document.createElement('div');
        forecastInfoDiv.className = 'forecast-info';

        for (const d of data) {
            let spanUpcoming = document.createElement('span');
            spanUpcoming.className = 'upcoming';

            let symbolSpan = document.createElement('span');
            symbolSpan.className = 'symbol';
            symbolSpan.textContent = icons[d.condition.toLowerCase()] || icons.partlySunny;

            let spanDegrees = document.createElement('span');
            spanDegrees.className = 'forecast-data';
            spanDegrees.textContent = `${d.low}${icons.degrees}/${d.high}${icons.degrees}`;

            let spanConditionName = document.createElement('span');
            spanConditionName.className = 'forecast-data';
            spanConditionName.textContent = d.condition;

            spanUpcoming.appendChild(symbolSpan);
            spanUpcoming.appendChild(spanDegrees);
            spanUpcoming.appendChild(spanConditionName);

            forecastInfoDiv.appendChild(spanUpcoming);
        }

        upcomingDiv.appendChild(forecastInfoDiv);
    }

    function createCurrentForcastElements(name, high, low, condition){
        let divElem = document.getElementById('current');

        let forecastsElem = document.createElement('div');
        forecastsElem.className = 'forecasts';

        let conditionSpan = document.createElement('span');
        conditionSpan.className = 'condition symbol';
        conditionSpan.textContent = icons[condition.toLowerCase()];

        let infoSpan = document.createElement('span');
        infoSpan.className = 'condition';

        let nameSpan = document.createElement('span');
        nameSpan.className = 'forecast-data';
        nameSpan.textContent = name;

        let degreesSpan = document.createElement('span');
        degreesSpan.className = 'forecast-data';
        degreesSpan.textContent = `${low}${icons.degrees}/${high}${icons.degrees}`;

        let conditionNameSpan = document.createElement('span');
        conditionNameSpan.className = 'forecast-data';
        conditionNameSpan.textContent = condition;

        infoSpan.appendChild(nameSpan);
        infoSpan.appendChild(degreesSpan);
        infoSpan.appendChild(conditionNameSpan);

        forecastsElem.appendChild(conditionSpan);
        forecastsElem.appendChild(infoSpan);

        divElem.appendChild(forecastsElem);
    }
}

attachEvents();