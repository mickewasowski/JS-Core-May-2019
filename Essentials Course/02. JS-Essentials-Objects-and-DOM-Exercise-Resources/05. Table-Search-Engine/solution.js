function solve() {
   let button = document.getElementsByTagName('button')[0];

   button.addEventListener('click',clickEvent);

   function clickEvent(e){
      let btn = e.target;

      let people = Array.from(document.querySelectorAll('tbody tr td'));
      let input = document.getElementById('searchField');

      let tags = Array.from(document.querySelectorAll('tbody tr'));
      tags.forEach((t) => {
         let name = t.className;
         if (name === 'select') {
            t.className = '';
         }
      });

      people.forEach((p) => {        
         let person = p.textContent.toLowerCase();
         if (person.includes(input.value.toLowerCase())) {
            let selected = p.parentElement;
            selected.className = 'select';
         }
      });

      input.value = '';
   }
}