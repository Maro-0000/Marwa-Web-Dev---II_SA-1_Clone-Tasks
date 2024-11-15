const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerText === 'Paris') {
                alert('Correct!');
            } else {
                alert('Try Again!');
            }
        });
    });