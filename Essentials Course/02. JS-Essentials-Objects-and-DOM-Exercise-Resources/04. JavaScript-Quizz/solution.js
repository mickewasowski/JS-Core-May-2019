function solve() {
  let answers = Array.from(document.getElementsByClassName('answer-wrap'));
  
  answers.forEach((a) => {
    a.addEventListener('click',clickEvent);
  });
  
  let counter = 0;

  function clickEvent(e){
    let answer = e.target;
    answer.removeEventListener('click',clickEvent);
    
    let current = answer.textContent;
    
    let sections = Array.from(document.getElementsByTagName('section'));

    if (current === 'onclick' || current === 'onmouseclick') {
      if (current === 'onclick') {
        counter++;
      }
      sections[0].style.display = "none";
      sections[1].style.display = "block";
      //sections[0].className = 'hidden';
      //sections[1].className = 'none';
    }
    else if(current === 'JSON.toString()' || current === 'JSON.stringify()'){
      if (current === 'JSON.stringify()') {
        counter++;
      }
      sections[1].style.display = "none";
      sections[2].style.display = "block";
      // sections[1].className = 'hidden';
      // sections[2].className = 'none';
    }
    else if(current === 'A programming API for HTML and XML documents' || current === 'The DOM is your source HTML'){
      if (current === 'A programming API for HTML and XML documents') {
        counter++;
      }
      sections[2].style.display = "none";
      //sections[2].className = 'hidden';

      let result = document.getElementsByClassName('results-inner')[0].children;
      document.getElementById("results").style.display = "block";
      if (counter >= 0 && counter < 3) {
        result[0].innerHTML += `You have ${counter} right answers`;
      }
      else if(counter === 3){
        result[0].innerHTML += 'You are recognized as top JavaScript fan!';
      }
    }
  }
}
