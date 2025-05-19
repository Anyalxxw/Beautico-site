const questions = document.querySelectorAll('.questions-right-side .question');
const answer = document.querySelector('.answer');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if(answer && answer.classList.contains('answer')){
            answer.classList.toggle('active');
        }
    });
})









