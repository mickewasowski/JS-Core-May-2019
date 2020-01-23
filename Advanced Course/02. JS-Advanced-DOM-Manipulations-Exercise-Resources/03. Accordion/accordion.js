function toggle() {
    let buttonName = document.getElementsByClassName('button')[0];

    let div = document.getElementById('extra');

    if (div.style.display === 'none') {
        div.style.display = 'block';
        buttonName.textContent = 'Less';
    }else{
        div.style.display = 'none';
        buttonName.textContent = 'More';
    }
}