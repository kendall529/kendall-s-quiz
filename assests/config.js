var start = document.querySelector('#start')
var score = document.querySelector('#score')
var timerEl = document.querySelector('#countdown')


start.addEventListener('click', function() {
    var timeLeft = 30;

    var interval = setInterval(function () {
        if(timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(interval);
            gameOver();
        }
    }, 1000);
})



var activeIndex = 0;

var cards = document.getElementsByClassName('card');

var button = document.querySelector('.btn');
var answerCorrect = document.querySelector('.correct');
var answerIncorrect = document.querySelector('.incorrect');

function nextQuestion() {
    var nextIndex = activeIndex + 1 <= cards.length;

    var currentCard = document.querySelector(`[data-index="${activeIndex}"]`),
    nextCard = document.querySelector(`[data-index="${nextIndex}"]`);

    currentCard.dataset.status = 'unknown';

    nextCard.dataset.status = 'active';
}

button.addEventListener('click', function(event) {
    var clickEl = event.target;

    if(clickEl.matches('.btn')) {
        var buttonState = clickEl.getAttribute('data-state');

        if(buttonState === 'correct') {
            answerCorrect.textContent = answerCorrect.dataset.string;

            answerCorrect.dataset.state = 'visible';
        } else {
            answerIncorrect.textContent = answerIncorrect.dataset.string;

            answerIncorrect.dataset.state = 'visible';
        }
    nextQuestion();
    }
}) 

// function renderScore() {
//     score.textContent = 0;
//     for()
// }

// function gameOver() {

// }

// upon clicking an answer: the index will increase by 1 on the card class divs
// the active index will become dataset.status = 'unknown'
// the next index will become dataset.status = 'active'