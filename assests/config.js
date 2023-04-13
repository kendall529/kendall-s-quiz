var start = document.querySelector('#start');
var score = document.querySelector('#score');
var timerEl = document.querySelector('#countdown');
var cards = document.querySelector('.card');
// var currentCard = cards.dataset.status('active');
var button = document.querySelector('.btn');
var answerCorrect = document.querySelector('.correct');
var answerIncorrect = document.querySelector('.incorrect');
var hidden = document.querySelector('.content');
var delay = 1000;


start.addEventListener('click', function() {
    startGame();
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

function startGame() {
    start.setAttribute('style', 'display: none;');
    hidden.classList.remove('hide');
}




function nextQuestion() {
    // if(cards.dataset.status = 'active' && cards.dataset.index == [0]) {
        // for(var i = 0; i < cards.length; i++)
        // cards.dataset.index = [1];
        // cards.dataset.status = 'active';
        // return;
    // }
    if(cards.dataset.index = [0]) {
        // cards.setAttribute('style', 'scale: 0;');
        cards.setAttribute('data-status', 'unknown');
    }

}

button.addEventListener('click', function(event) {
    var clickEl = event.target;

    if(clickEl.matches('.btn')) {
        var buttonState = clickEl.getAttribute('data-state');

        if(buttonState === 'correct') {
            answerCorrect.textContent = answerCorrect.dataset.string;
            score.textContent = 10;

            // answerCorrect.dataset.state = 'visible';
        } 
        if(buttonState !== 'correct') {

            console.log('hello')
            // answerIncorrect.textContent = answerIncorrect.dataset.string;

            // answerIncorrect.dataset.state = 'visible';
        }
    // nextQuestion();
    setTimeout(nextQuestion, delay);
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

// for(var i = 0; i < cards.length; i++);

