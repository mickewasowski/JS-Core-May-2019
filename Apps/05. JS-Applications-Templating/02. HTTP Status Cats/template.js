(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let template = document.getElementById('cat-template').innerHTML;

        let compiled = Handlebars.compile(template);

        let rendered = compiled({
            cats: window.cats
        });

        document.getElementById('allCats').innerHTML = rendered;

        showAdditionalContent();

    }

    function showAdditionalContent() {
        let showBtns = document.getElementsByClassName('showBtn');

        for (const btn of showBtns) {

            btn.addEventListener('click', function () {
                let clickedBtn = this;

                if (clickedBtn.textContent === 'Show status code') {
                    clickedBtn.textContent = 'Hide status code';

                    let infoId = clickedBtn.parentNode.children[1].id;

                    document.getElementById(infoId).style.display = 'block';
                } else {
                    clickedBtn.textContent = 'Show status code';

                    let infoId = clickedBtn.parentNode.children[1].id;

                    document.getElementById(infoId).style.display = 'none';
                }
            });
        }
    }
})()
