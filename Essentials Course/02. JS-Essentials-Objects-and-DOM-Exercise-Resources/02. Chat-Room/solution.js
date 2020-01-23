function solve() { 
   let sendBtn = document.getElementsByTagName('button')[0];
   let inputField = document.getElementsByTagName('textarea')[0];

   sendBtn.addEventListener('click',clickEvent);

   function clickEvent(){
      let divMessage = document.createElement('div');
      divMessage.className = 'message my-message';
      divMessage.textContent = inputField.value;

      let parent = document.getElementById('chat_messages');

      parent.appendChild(divMessage);

      inputField.value = '';
   }
}


