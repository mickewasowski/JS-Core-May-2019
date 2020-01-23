function solve() {
  let generateButton = document.getElementsByTagName('button')[0];
  generateButton.addEventListener('click',clickEvent);

  let buyButton = document.getElementsByTagName('button')[1];
  buyButton.addEventListener('click',buyEvent);

  function buyEvent(){
    let array = [];
    let totalPrice = 0;
    let averageDecFac = 0;
    let counter = 0;

    let inputs = Array.from(document.getElementsByTagName('input'));
    inputs.forEach((i) => {
      if (i.checked === true) {
        let td = i.parentElement;
        let productInfo = td.parentElement.children;

        let name = productInfo[1].getElementsByTagName('p')[0].innerHTML;    
        let price = Number(productInfo[2].textContent);
        let decFactor = Number(productInfo[3].textContent);

        array.push(name);
        totalPrice += Number(price);
        averageDecFac += Number(decFactor);
        counter++;
      }
    });

    averageDecFac = averageDecFac / counter;

    let result = document.getElementsByTagName('textarea')[1];
    result.value += `Bought furniture: ${array.join(', ')}\n`;
    result.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    result.value += `Average decoration factor: ${averageDecFac}`;
  }


  function clickEvent(e){
    let inputs = Array.from(document.getElementsByTagName('input'));
    
    inputs.forEach((i) => {
      i.disabled = false;
    });

    let name;
    let url;
    let price;
    let decFactor;

    let inputField = document.getElementsByTagName('textarea');
    let input = JSON.parse(inputField[0].value);
    input.forEach((i) =>{
      name = i.name;
      url = i.img;
      price = i.price;
      decFactor = i.decFactor;

      let body = document.getElementsByTagName('tbody');
    let newFurniture = document.createElement('tr');

    let picture = document.createElement('td');
    let pictureUrl = document.createElement('img');
    pictureUrl.src = `${url}`;
    picture.appendChild(pictureUrl);

    let nameTag = document.createElement('td');
    let nameParag = document.createElement('p');
    nameParag.textContent = name;
    nameTag.appendChild(nameParag);
    
    let priceTag = document.createElement('td');
    let priceParag = document.createElement('p');
    priceParag.textContent = price;
    priceTag.appendChild(priceParag);
    
    let decFacTag = document.createElement('td');
    let decFacParag = document.createElement('p');
    decFacParag.textContent = decFactor;
    decFacTag.appendChild(decFacParag);

    let inputTag = document.createElement('td');
    let inputTagField = document.createElement('input');
    inputTagField.type = 'checkbox';
    inputTag.appendChild(inputTagField);

    newFurniture.appendChild(picture);
    newFurniture.appendChild(nameTag);
    newFurniture.appendChild(priceTag);
    newFurniture.appendChild(decFacTag);
    newFurniture.appendChild(inputTag);

    body[0].appendChild(newFurniture);
    });
  }
}