function spaceshipCrafting() {
	let titanium = Number(document.getElementById('titaniumCoreFound').value);
	let aluminum = Number(document.getElementById('aluminiumCoreFound').value);
	let magnesium = Number(document.getElementById('magnesiumCoreFound').value);
	let carbon = Number(document.getElementById('carbonCoreFound').value);
	let lossPercentage = Number(document.getElementById('lossesPercent').value);

	let leftTitanium = Math.floor(titanium) - lossPercentage;
	let leftAluminum = Math.floor(aluminum) - lossPercentage;
	let leftMagnesium = Math.floor(magnesium) - lossPercentage;
	let leftCarbon = Math.floor(carbon) - lossPercentage;

	let titaniumBar = Math.floor(leftTitanium / 25);
	let aluminumBar = Math.floor(leftAluminum / 50);
	let magnesiumBar = Math.floor(leftMagnesium / 75);
	let carbonBar = Math.floor(leftCarbon / 100);

	let spaceships = {};

	let loop = true;
	while (loop) {
		if (titaniumBar >= 7 && aluminumBar >= 9 && magnesiumBar >= 7 && carbonBar >= 7) {
			if (spaceships['THE-UNDEFINED-SHIP']) {
				spaceships['THE-UNDEFINED-SHIP'].quantity += 1;
				titaniumBar -= 7;
				aluminumBar -= 9;
				magnesiumBar -= 7;
				carbonBar -= 7;
			} else {
				spaceships['THE-UNDEFINED-SHIP'] = { quantity: 1 };
				titaniumBar -= 7;
				aluminumBar -= 9;
				magnesiumBar -= 7;
				carbonBar -= 7;
			}
		}
		if (titaniumBar >= 5 && aluminumBar >= 7 && magnesiumBar >= 7 && carbonBar >= 5) {
			if (spaceships['NULL-MASTER']) {
				spaceships['NULL-MASTER'].quantity += 1;
				titaniumBar -= 5;
				aluminumBar -= 7;
				magnesiumBar -= 7;
				carbonBar -= 5;
			} else {
				spaceships['NULL-MASTER'] = { quantity: 1 };
				titaniumBar -= 5;
				aluminumBar -= 7;
				magnesiumBar -= 7;
				carbonBar -= 5;
			}
		}
		if (titaniumBar >= 3 && aluminumBar >= 5 && magnesiumBar >= 5 && carbonBar >= 2) {
			if (spaceships['JSON-CREW']) {
				spaceships['JSON-CREW'].quantity += 1;
				titaniumBar -= 3;
				aluminumBar -= 5;
				magnesiumBar -= 5;
				carbonBar -= 2;
			} else {
				spaceships['JSON-CREW'] = { quantity: 1 };
				titaniumBar -= 3;
				aluminumBar -= 5;
				magnesiumBar -= 5;
				carbonBar -= 2;
			}
		}
		if (titaniumBar >= 2 && aluminumBar >= 2 && magnesiumBar >= 3 && carbonBar >= 1) {
			if (spaceships['FALSE-FLEET']) {
				spaceships['FALSE-FLEET'].quantity += 1;
				titaniumBar -= 2;
				aluminumBar -= 2;
				magnesiumBar -= 3;
				carbonBar -= 1;
			} else {
				spaceships['FALSE-FLEET'] = { quantity: 1 };
				titaniumBar -= 2;
				aluminumBar -= 2;
				magnesiumBar -= 3;
				carbonBar -= 1;
			}
		}
		if (titaniumBar < 2 || aluminumBar < 2 || magnesiumBar < 3 || carbonBar < 1) {
			loop = false;
		}
	}

	let paragraphs = document.getElementsByTagName('p');
	let availableBars = paragraphs[0];
	availableBars.textContent = `${titaniumBar} titanium bars, ${aluminumBar} aluminum bars, ${magnesiumBar} magnesium bars, ${carbonBar} carbon bars`;

	let builtSpaceships = paragraphs[1];

	let spaceshipsNames = Object.keys(spaceships);
	let quantities = Object.values(spaceships);

	let resultString = '';
	for (let i = 0; i < spaceshipsNames.length; i++) {
		if (i === spaceshipsNames.length - 1) {
			resultString += `${quantities[i].quantity} ${spaceshipsNames[i]}`;
		}else{
			resultString += `${quantities[i].quantity} ${spaceshipsNames[i]}, `;
		}	
	}

	builtSpaceships.textContent = resultString;
}