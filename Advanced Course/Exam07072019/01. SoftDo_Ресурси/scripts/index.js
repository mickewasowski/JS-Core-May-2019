// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution() {

    let sendBtn = document.querySelector('#inputSection > div > button');

    sendBtn.addEventListener('click', submitQuestion);

    function submitQuestion() {
        let inputMessage = document.querySelector('#inputSection > textarea');
        let inputName = document.querySelector('#inputSection > div > input[type=username]');

        let pendingDiv = document.getElementById('pendingQuestions');
        let questionDiv = document.createElement('div');
        questionDiv.className = "pendingQuestion";

        let image = document.createElement('img');
        image.src = './images/user.png';
        image.width = 32;
        image.height = 32;

        let nameElement = document.createElement('span');
        if (inputName.value !== '') {
            nameElement.textContent = inputName.value;
        } else {
            nameElement.textContent = 'Anonymous';
        }

        let questionElement = document.createElement('p');
        questionElement.textContent = inputMessage.value;

        questionDiv.appendChild(image);
        questionDiv.appendChild(nameElement);
        questionDiv.appendChild(questionElement);

        let divActions = document.createElement('div');
        divActions.className = 'actions';

        let archiveBtn = document.createElement('button');
        archiveBtn.className = 'archive';
        archiveBtn.textContent = 'Archive';
        archiveBtn.addEventListener('click', archiveElement => {
            questionDiv.remove();
            divActions.remove();
        });

        let openBtn = document.createElement('button');
        openBtn.className = 'open';
        openBtn.textContent = 'Open';
        openBtn.addEventListener('click', openElement => {
            let openedMessages = document.getElementById('openQuestions');

            let currMessageDiv = document.createElement('div');
            currMessageDiv.className = 'openQuestion';

            let tokens = questionDiv.children;

            let img = tokens[0];
            let span = tokens[1];
            let p = tokens[2];

            currMessageDiv.appendChild(img);
            currMessageDiv.appendChild(span);
            currMessageDiv.appendChild(p);

            let actionsDiv = document.createElement('div');
            actionsDiv.className = 'actions';

            let replySection = document.createElement('div');
            replySection.className = 'replySection';
            replySection.style.display = 'none';

            let replyInput = document.createElement('input');
            replyInput.className = 'replyInput';
            replyInput.type = 'text';
            replyInput.placeholder = 'Reply to this question here...';

            let sendBtn = document.createElement('button');
            sendBtn.className = 'replyButton';
            sendBtn.textContent = 'Send';

            replySection.appendChild(replyInput);
            replySection.appendChild(sendBtn);

            let list = document.createElement('ol');
            list.className = 'reply';
            list.type = 1;
            replySection.appendChild(list);

            sendBtn.addEventListener('click', appendMessage => {
                let message = replyInput.value;

                let liElem = document.createElement('li');
                liElem.textContent = message;

                list.appendChild(liElem);

                replySection.appendChild(list);

                replyInput.value = '';
            });

            let btn = document.createElement('button');
            btn.className = 'reply';
            btn.textContent = 'Reply';
            btn.addEventListener('click', replyContent => {
                if (btn.textContent === 'Reply') {
                    replySection.style.display = 'block';
                    btn.textContent = 'Back';
                } else if (btn.textContent === 'Back') {
                    btn.textContent = 'Reply';
                    replySection.style.display = 'none';
                }
            });

            actionsDiv.appendChild(btn);

            pendingDiv.removeChild(questionDiv);

            currMessageDiv.appendChild(actionsDiv);
            currMessageDiv.appendChild(replySection);

            openedMessages.appendChild(currMessageDiv);
        });

        divActions.appendChild(archiveBtn);
        divActions.appendChild(openBtn);

        questionDiv.appendChild(divActions);
        pendingDiv.appendChild(questionDiv);

        inputMessage.value = '';
        inputName.value = '';
    }
}
// To check out your solution, just submit mySolution() function in judge system.