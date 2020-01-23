function solve() {
   let addButton = document.getElementsByTagName('button')[0];

   addButton.addEventListener('click', addEvent);

   function addEvent(e){
       let input = document.getElementsByTagName('input')[0];

       console.log(input.value)

       let listOfLetters = Array.from(document.getElementsByTagName('li'));

        let firstLetter = input.value.toLowerCase().charCodeAt(0);
        
        let index = firstLetter - 97;
        console.log(index);

        if (listOfLetters[index].textContent === '') {
            listOfLetters[index].textContent += capitalize(input.value);
        }else{
            listOfLetters[index].textContent += `, ${capitalize(input.value)}`;
        }

        input.value = '';
   }

   function capitalize(string){
        return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
   }
}