function solve() {  
  function clickEvent() {
    let string = this.children[1].textContent
     
      let number = string.match(/\d+/)[0];
      string = `Visited: ${Number(number) + 1} times`
      this.children[1].textContent = string

  }
  let linkElements = Array.from(document.getElementsByClassName('link-1'));
  for (let linkElement of linkElements){
      linkElement.addEventListener('click', clickEvent);
      
  }

}
