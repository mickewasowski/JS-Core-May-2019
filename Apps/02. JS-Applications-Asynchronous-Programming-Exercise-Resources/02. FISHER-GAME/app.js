function attachEvents() {
    document.getElementsByClassName('load')[0].addEventListener('click', () => {
        let url = 'https://fisher-game.firebaseio.com/catches.json';

        fetch(url)
            .then((response) => response.json())
            .then(data => {
                let keys = Object.keys(data);
                let values = Object.values(data);

                let catchesDiv = document.getElementById('catches');

                for (let i = 0; i < values.length; i++) {
                    let catchDiv = document.createElement('div');
                    catchDiv.className = 'catch';
                    catchDiv.id = keys[i];

                    createElements(catchDiv, values[i]);
                    catchesDiv.appendChild(catchDiv);
                }
            })
    });

    document.getElementsByClassName('add')[0].addEventListener('click', () => {
        let children = Array.from(document.getElementById('addForm').children);

        let angler = children[2].value;
        let weight = children[4].value;
        let species = children[6].value;
        let location = children[8].value;
        let bait = children[10].value;
        let captureTime = children[12].value;

        let url = 'https://fisher-game.firebaseio.com/catches.json';

        fetch(url, {
            "method": "post",
            "body":JSON.stringify({
                "angler": angler, 
                "weight": weight, 
                "species":species, 
                "location":location, 
                "bait":bait, 
                "captureTime": captureTime
            })
        })
        .then((response) => response.json());

        children[2].value = '';
        children[4].value = '';
        children[6].value = '';
        children[8].value = '';
        children[10].value = '';
        children[12].value = '';
    });

    function createElements(catchDiv, tokens) {
        let anglerLabel = document.createElement('label');
        anglerLabel.textContent = 'Angler';

        let anglerInput = document.createElement('input');
        anglerInput.className = 'angler';
        anglerInput.type = 'text';
        anglerInput.value = tokens.angler;

        let hrElem = document.createElement('hr');

        let weightLabel = document.createElement('label');
        weightLabel.textContent = 'Weight';

        let weightInput = document.createElement('input');
        weightInput.className = 'weight';
        weightInput.type = 'number';
        weightInput.value = tokens.weight;

        //hr
        let speciesLabel = document.createElement('label');
        speciesLabel.textContent = 'Species';

        let speciesInput = document.createElement('input');
        speciesInput.className = 'species';
        speciesInput.type = 'text';
        speciesInput.value = tokens.species;

        //hr
        let locationLabel = document.createElement('label');
        locationLabel.textContent = 'Location';

        let locationInput = document.createElement('input');
        locationInput.className = 'location';
        locationInput.type = 'text';
        locationInput.value = tokens.location;

        //hr
        let baitLabel = document.createElement('label');
        baitLabel.textContent = 'Bait';

        let baitInput = document.createElement('input');
        baitInput.className = 'bait';
        baitInput.type = 'text';
        baitInput.value = tokens.bait;

        //hr
        let captureTimeLabel = document.createElement('label');
        captureTimeLabel.textContent = 'Capture Time';

        let captureTimeInput = document.createElement('input');
        captureTimeInput.className = 'captureTime';
        captureTimeInput.type = 'number';
        captureTimeInput.value = tokens.captureTime;

        let updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        updateBtn.className = 'update';
        updateBtn.addEventListener('click', updateEvent);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete';
        deleteBtn.addEventListener('click', deleteEvent);

        catchDiv.appendChild(anglerLabel);
        catchDiv.appendChild(anglerInput);
        catchDiv.appendChild(hrElem);

        catchDiv.appendChild(weightLabel);
        catchDiv.appendChild(weightInput);
        catchDiv.appendChild(hrElem);

        catchDiv.appendChild(speciesLabel);
        catchDiv.appendChild(speciesInput);
        catchDiv.appendChild(hrElem);

        catchDiv.appendChild(locationLabel);
        catchDiv.appendChild(locationInput);
        catchDiv.appendChild(hrElem);

        catchDiv.appendChild(baitLabel);
        catchDiv.appendChild(baitInput);
        catchDiv.appendChild(hrElem);

        catchDiv.appendChild(captureTimeLabel);
        catchDiv.appendChild(captureTimeInput);
        catchDiv.appendChild(hrElem);

        catchDiv.appendChild(updateBtn);
        catchDiv.appendChild(deleteBtn);
    }

    function updateEvent() {
        let childElements = this.parentNode.children;
        
        let angler = childElements[1].value;
        let weight = childElements[3].value;
        let species = childElements[5].value;
        let location = childElements[7].value;
        let bait = childElements[9].value;
        let captureTime = childElements[11].value;

        let id = this.parentNode.id;

        let url = `https://fisher-game.firebaseio.com/catches/${id}.json`;

        fetch(url, {
            "method": "put",
            "body": JSON.stringify({
                "angler":angler, 
                "weight":weight, 
                "species":species, 
                "location":location, 
                "bait":bait, 
                "captureTime":captureTime
            })
        })
        .then((response) => response.json());
    }

    function deleteEvent() {
        let childElem = this.parentNode;
        document.getElementById('catches').removeChild(childElem);

        let id = childElem.id;
        let url = `https://fisher-game.firebaseio.com/catches/${id}.json`;

        fetch(url, {
            method: 'delete'
        })
            .then(response => response.json());
    }
}

attachEvents();

