function create(words) {
   let parentDiv = document.getElementById('content');
   
   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      
      div.addEventListener('click',()=>{
            p.style.display = 'inline-block';
      });
      parentDiv.appendChild(div);
   }
}