let random = document.querySelector('.random');
let easy = document.querySelector('.easy');
let medium = document.querySelector('.medium');
let hard = document.querySelector('.hard');
let questionBox = document.querySelector('.questionBox');
let questionText = document.querySelector('.questionText');
let answers = document.querySelectorAll('.answer');
let modal = document.querySelector('.modal');
let modalText = document.querySelector('.modalText');
let nextButton = document.querySelector('.nextQuestion');
let gameStatus = document.querySelector('.gameStatus');
let gameOver = document.querySelector('.gameOver')
let answersContentFinal = [];
let i=0;
let answersContent = [];
let correctAnswer = document.querySelector('.correctAnswer')
let questions = [];
let baseUrl = 'https://opentdb.com/api.php?amount=10&';
let randomUrl = 'type=multiple';
let easyUrl = 'difficulty=easy&type=multiple';
let mediumUrl = 'difficulty=medium&type=multiple';
let hardUrl = 'difficulty=hard&type=multiple';
random.addEventListener('click', randomGame);
easy.addEventListener('click', easyGame);
medium.addEventListener('click', mediumGame);
hard.addEventListener('click', hardGame);
function randomGame(e){
    e.preventDefault();
    fetch(baseUrl+randomUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });            
}
function easyGame(e){
    e.preventDefault();
    fetch(baseUrl+easyUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });            
}
function mediumGame(e){
    e.preventDefault();
    fetch(baseUrl+mediumUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });            
}
function hardGame(e){
    e.preventDefault();
    fetch(baseUrl+hardUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            
            });            
}
function game(){
    i=0;
    turn();
}
function turn(){
    console.log(i)
    questionText.innerHTML = questions[i].question;
    answersContent.push(questions[i]["correct_answer"], ...questions[i]["incorrect_answers"]);
    correctAnswer.innerHTML = questions[i]["correct_answer"];
    for(let j=0; j<answers.length; j++){
        answersContentFinal.push(...answersContent.splice(Math.floor(Math.random()*answersContent.length)));    
        answers[j].innerHTML = answersContentFinal[j]
    }
    answers.forEach(answer=>{
        answer.addEventListener('click', checkCorrect)
    })
    nextButton.addEventListener('click', newQuestion)
}
function checkCorrect(e){
    e.preventDefault();
    modal.classList.add('modalOpen')
    if(e.target.innerHTML == correctAnswer.innerHTML){
        modalText.innerHTML = "Good job!";
        modalText.style.color = 'green';
    } else{
        modalText.innerHTML = "Nice try, but the correct answer was " + correctAnswer.innerHTML;
        modalText.style.color = 'red';
        }
}  
function newQuestion(e){
    e.preventDefault();
    modal.classList.add('modalClose');
    modal.addEventListener('animationend', closed);
    // correctAnswer.innerHTML = '';
    answersContentFinal = [];
    answersContent = [];
    i += 1;
    turn();
    if(i===9){
        nextButton.style.display = 'none';
        gameOver.style.display = 'flex';
        gameStatus.innerHTML = "Game Over!";
        gameOver.addEventListener('click', endgame);
    }

}
function endgame(e){
    e.preventDefault();
    questionText.innerHTML = '';
    for(let j=0; j<answers.length; j++){
        answers[j].innerHTML = '';
    }
    questionBox.classList.remove('questionBoxOpen');
    modal.classList.add('modalClose')
    modal.addEventListener('animationend', closed);
    questions = [];
    gameStatus.innerHTML = '';
    gameOver.style.display = 'none';
    nextButton.style.display = 'flex';
    correctAnswer.innerHTML = '';
    answersContentFinal = [];
    answersContent = [];
}
function closed(e){
    if(e.target == modal){
        modal.classList.remove('modalOpen');
        modal.classList.remove('modalClose');
        modal.removeEventListener('animationend', closed)
    }
    // correctAnswer.innerHTML = '';
    answersContentFinal = [];
    answersContent = [];
}