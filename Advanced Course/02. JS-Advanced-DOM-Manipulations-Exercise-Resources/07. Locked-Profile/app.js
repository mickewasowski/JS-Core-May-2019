function lockedProfile() {
    // document.getElementById("red").checked = true;

    let checkedButtons = document.querySelectorAll('input[type="radio"]');
    let buttons = document.getElementsByTagName('button');

    for (const button of buttons) {
        button.addEventListener('click',info);
    }

    function info(elem){
       let checked = elem.target.parentElement.children[2].checked;
       if(!checked){
           let hiddenFields = elem.target.parentElement.children[9]; //select the correct one

           if (hiddenFields.style.display === 'none') {
            hiddenFields.style.display = 'inline-block';
            elem.target.parentElement.children[10].innerHTML = 'Hide';
           }else{
            hiddenFields.style.display = 'none';
            elem.target.parentElement.children[10].innerHTML = 'Show more';
           }         
       }
    }
}