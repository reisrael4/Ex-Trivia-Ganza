let baseTenUrl = 'https://opentdb.com/api.php?amount=10&';
let baseFifteenUrl = 'https://opentdb.com/api.php?amount=15&';
let baseTwentyUrl = 'https://opentdb.com/api.php?amount=20&';
let randomUrl = 'type=multiple';
let easyUrl = 'difficulty=easy&type=multiple';
let mediumUrl = 'difficulty=medium&type=multiple';
let hardUrl = 'difficulty=hard&type=multiple';
let difficultyButtons = document.querySelectorAll('.difficultyButtons');
let numberButtons = document.querySelector('.numberButtons')
let numberQuestion = document.querySelector('.numberQuestion');
let ten = document.querySelector('.ten');
let tenButtons = document.querySelector('.tenButtons');
let fifteenButtons = document.querySelector('.fifteenButtons');
let twentyButtons = document.querySelector('.twentyButtons');
let fifteen = document.querySelector('.fifteen');
let twenty = document.querySelector('.twenty');
let randomTen = document.querySelector('.randomTen');
let easyTen = document.querySelector('.easyTen');
let mediumTen = document.querySelector('.mediumTen');
let hardTen = document.querySelector('.hardTen');
let randomFifteen = document.querySelector('.randomFifteen');
let easyFifteen = document.querySelector('.easyFifteen');
let mediumFifteen = document.querySelector('.mediumFifteen');
let hardFifteen = document.querySelector('.hardFifteen');
let randomTwenty = document.querySelector('.randomTwenty');
let easyTwenty = document.querySelector('.easyTwenty');
let mediumTwenty = document.querySelector('.mediumTwenty');
let hardTwenty = document.querySelector('.hardTwenty');
let questionBox = document.querySelector('.questionBox');
let questionText = document.querySelector('.questionText');
let answers = document.querySelectorAll('.answer');
let modal = document.querySelector('.modal');
let modalText = document.querySelector('.modalText');
let nextButton = document.querySelector('.nextQuestion');
let gameStatus = document.querySelector('.gameStatus');
let gameOver = document.querySelector('.gameOver');
let scoreAddress = document.querySelector('.js-score');
let scoreContainer = document.querySelector('.score')
let background = document.querySelector('.startBackground');
let header = document.querySelector('h1');
let answersContentFinal = [];
let i=0;
score = 0;
let answersContent = [];
let correctAnswer = document.querySelector('.correctAnswer')
let questions = [];
ten.addEventListener('click', tenButtonsOn);
fifteen.addEventListener('click', fifteenButtonsOn);
twenty.addEventListener('click', twentyButtonsOn);
randomTen.addEventListener('click', randomTenGame);
easyTen.addEventListener('click', easyTenGame);
mediumTen.addEventListener('click', mediumTenGame);
hardTen.addEventListener('click', hardTenGame);
randomFifteen.addEventListener('click', randomFifteenGame);
easyFifteen.addEventListener('click', easyFifteenGame);
mediumFifteen.addEventListener('click', mediumFifteenGame);
hardFifteen.addEventListener('click', hardFifteenGame);
randomTwenty.addEventListener('click', randomTwentyGame);
easyTwenty.addEventListener('click', easyTwentyGame);
mediumTwenty.addEventListener('click', mediumTwentyGame);
hardTwenty.addEventListener('click', hardTwentyGame);
function tenButtonsOn(e){
    e.preventDefault();
    tenButtons.style.display = 'flex';
    numberButtons.style.display = 'none';
    numberButtons.style.margin = '0';
    numberQuestion.style.display = 'none';
}
function fifteenButtonsOn(e){
    e.preventDefault();
    fifteenButtons.style.display = 'flex';
    numberButtons.style.display = 'none';
    numberButtons.style.margin = '0';
    numberQuestion.style.display = 'none';
}
function twentyButtonsOn(e){
    e.preventDefault();
    twentyButtons.style.display = 'flex';
    numberButtons.style.display = 'none';
    numberButtons.style.margin = '0';
    numberQuestion.style.display = 'none';
}
function randomTenGame(e){
    e.preventDefault();
    fetch(baseTenUrl+randomUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });
    background.classList.add('randomBackground');
    header.classList.add('randomHeader');
    scoreContainer.classList.add('randomScore');
    difficultyButtons[0].style.display = 'none';
}
function easyTenGame(e){
    e.preventDefault();
    fetch(baseTenUrl+easyUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });
    background.classList.add('easyBackground');
    header.classList.add('easyHeader');
    scoreContainer.classList.add('easyScore')
    difficultyButtons[0].style.display = 'none';
}
function mediumTenGame(e){
    e.preventDefault();
    fetch(baseTenUrl+mediumUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });            
    background.classList.add('mediumBackground');
    header.classList.add('mediumHeader');
    scoreContainer.classList.add('mediumScore');
    difficultyButtons[0].style.display = 'none';
}
function hardTenGame(e){
    e.preventDefault();
    fetch(baseTenUrl+hardUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            
            }); 
    background.classList.add('hardBackground');            
    header.classList.add('hardHeader');
    scoreContainer.classList.add('hardScore');
    difficultyButtons[0].style.display = 'none';
}
function randomFifteenGame(e){
    e.preventDefault();
    fetch(baseFifteenUrl+randomUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });
    background.classList.add('randomBackground');
    header.classList.add('randomHeader');
    scoreContainer.classList.add('randomScore');
    difficultyButtons[1].style.display = 'none';
}
function easyFifteenGame(e){
    e.preventDefault();
    fetch(baseFifteenUrl+easyUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });
    background.classList.add('easyBackground');
    header.classList.add('easyHeader');
    scoreContainer.classList.add('easyScore')
    difficultyButtons[1].style.display = 'none';
}
function mediumFifteenGame(e){
    e.preventDefault();
    fetch(baseFifteenUrl+mediumUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });            
    background.classList.add('mediumBackground');
    header.classList.add('mediumHeader');
    scoreContainer.classList.add('mediumScore');
    difficultyButtons[1].style.display = 'none';
}
function hardFifteenGame(e){
    e.preventDefault();
    fetch(baseFifteenUrl+hardUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            
            }); 
    background.classList.add('hardBackground');           
    header.classList.add('hardHeader');
    scoreContainer.classList.add('hardScore');
    difficultyButtons[1].style.display = 'none';
}
function randomTwentyGame(e){
    e.preventDefault();
    fetch(baseTwentyUrl+randomUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });
    background.classList.add('randomBackground');
    header.classList.add('randomHeader');
    scoreContainer.classList.add('randomScore');
    difficultyButtons[2].style.display = 'none';
}
function easyTwentyGame(e){
    e.preventDefault();
    fetch(baseTwentyUrl+easyUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });
    background.classList.add('easyBackground');
    header.classList.add('easyHeader');
    scoreContainer.classList.add('easyScore');
    difficultyButtons[2].style.display = 'none';
}
function mediumTwentyGame(e){
    e.preventDefault();
    fetch(baseTwentyUrl+mediumUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });            
    background.classList.add('mediumBackground');
    header.classList.add('mediumHeader');
    scoreContainer.classList.add('mediumScore');
    difficultyButtons[2].style.display = 'none';
}
function hardTwentyGame(e){
    e.preventDefault();
    fetch(baseTwentyUrl+hardUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            
            }); 
    background.classList.add('hardBackground');           
    header.classList.add('hardHeader');
    scoreContainer.classList.add('hardScore');
    difficultyButtons[2].style.display = 'none';
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
        answer.addEventListener('click', checkCorrect);
        answer.addEventListener('mouseenter', answerMouse);
        answer.addEventListener('mouseleave', answerMouseLeave)
    })
    nextButton.addEventListener('click', newQuestion)
}
function answerMouse(e){
    e.preventDefault();
    e.target.style.backgroundColor = 'darkgrey';
}
function answerMouseLeave(e){
    e.preventDefault();
    e.target.style.backgroundColor = '#fefefe';
}
function checkCorrect(e){
    e.preventDefault();
    modal.classList.add('modalOpen')
    if(e.target.innerHTML == correctAnswer.innerHTML){
        modalText.innerHTML = "Good job!";
        modalText.style.color = 'green';
        score += 10;
        scoreAddress.innerText = score;
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
    difficultyButtons.style.display = 'none';
    numberButtons.style.display = 'flex';
    numberButtons.style.margin = '5px auto';   
    numberQuestion.style.display = 'block'; 
    questions = [];
    gameStatus.innerHTML = '';
    gameOver.style.display = 'none';
    nextButton.style.display = 'flex';
    correctAnswer.innerHTML = '';
    answersContentFinal = [];
    answersContent = [];
    background.classList.remove('easyBackground');
    header.classList.remove('easyHeader');
    scoreContainer.classList.remove('easyScore')
    background.classList.remove('mediumBackground');  
    header.classList.remove('mediumHeader');
    scoreContainer.classList.remove('mediumScore');
    background.classList.remove('hardBackground');
    header.classList.remove('hardHeader');
    scoreContainer.classList.remove('hardScore');
    background.classList.remove('randomBackground');
    header.classList.remove('randomHeader');
    scoreContainer.classList.remove('randomScore');
}
function closed(e){
    if(e.target == modal){
        modal.classList.remove('modalOpen');
        modal.classList.remove('modalClose');
        modal.removeEventListener('animationend', closed)
    }
    answersContentFinal = [];
    answersContent = [];
}