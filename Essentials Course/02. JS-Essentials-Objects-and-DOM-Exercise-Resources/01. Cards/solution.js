function solve() {
   Array.from(document.getElementsByTagName('img')).forEach((img) =>{
      img.addEventListener('click',clickEvent);
   });

   function clickEvent(e){
      let card = e.target;
      card.src = './images/whiteCard.jpg';
      card.removeEventListener('click',clickEvent);
      let parent = card.parentNode;

      let spanCollection = document.getElementById('result').children;

      let left = spanCollection[0];
      let right = spanCollection[2];

      if (parent.id === 'player1Div') {
         left.textContent = card.name;
         
      }else if(parent.id === 'player2Div'){
         right.textContent = card.name;
      }

      if(left.textContent && right.textContent){
         let winner;
         let looser;

         if(Number(spanCollection[0].innerHTML) > Number(spanCollection[2].innerHTML)){
            winner = document.querySelector(`#player1Div img[name="${left.textContent}"]`);
            looser = document.querySelector(`#player2Div img[name="${right.textContent}"]`);
         }
         else{
            winner = document.querySelector(`#player2Div img[name="${right.textContent}"]`);
            looser = document.querySelector(`#player1Div img[name="${left.textContent}"]`);
         }

         winner.style.border = '2px solid green';
         looser.style.border = '2px solid red';

         document.getElementById('history').textContent += `[${left.textContent} vs ${right.textContent}] `;

         left.textContent = '';
         right.textContent = '';
         
         //fix the test with the timeout
      }
   }
}