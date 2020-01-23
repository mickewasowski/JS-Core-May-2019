function solve() {
  let text = document.getElementById('input').innerHTML;
  //console.log(text);

  let array = text.toString();
  array = array.split(/\./);

  for (let i = array.length - 1; i >= 0 ; i--) {
    if (array[i] === '') {
      array.splice(i,1);
    }   
  }


  while(array.length > 0){
if (array.length >= 3) {
    let p = document.createElement('p');
    let first = array.pop().toString();
    let second = array.pop().toString();
    let third = array.pop().toString();

    let string = first + '.' + second + '.' + third + '.';
    p.textContent = string; 
    document.getElementById('output').appendChild(p);
  }else{
    if(array.length === 2){
    let p = document.createElement('p');
    let first = array.pop().toString();
    let second = array.pop().toString();
    let string = first + '.' + second + '.';
    p.textContent = string; 
    document.getElementById('output').appendChild(p);
    }else{
      let p = document.createElement('p');
    let first = array.pop().toString();
    let string = first + '.';
    p.textContent = string; 
    document.getElementById('output').appendChild(p);
    }
  }
}
}