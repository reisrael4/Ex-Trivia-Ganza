let baseTenUrl = 'https://opentdb.com/api.php?amount=10&';
let baseFifteenUrl = 'https://opentdb.com/api.php?amount=15&';
let baseTwentyUrl = 'https://opentdb.com/api.php?amount=20&';
let randomUrl = 'type=multiple';
let easyUrl = 'difficulty=easy&type=multiple';
let mediumUrl = 'difficulty=medium&type=multiple';
let hardUrl = 'difficulty=hard&type=multiple';
let difficultyButtons = document.querySelector('.difficultyButtons');
let numberButtons = document.querySelector('.numberButtons')
let numberQuestion = document.querySelector('.numberQuestion');
let ten = document.querySelector('.ten');
let tenButtons = document.querySelector('.tenButtons');
let fifteenButtons = document.querySelector('.fifteenButtons');
let twentyButtons = document.querySelector('.twentyButtons');
let fifteen = document.querySelector('.fifteen');
let twenty = document.querySelector('.twenty');
let tenDifficulty = document.querySelectorAll('.tenDifficulty');
let fifteenDifficulty = document.querySelectorAll('.fifteenDifficulty');
let twentyDifficulty = document.querySelectorAll('.twentyDifficulty');
let questionBox = document.querySelector('.questionBox');
let questionText = document.querySelector('.questionText');
let answers = document.querySelectorAll('.answer');
let modal = document.querySelector('.modal');
let modalText = document.querySelector('.modalText');
let nextButton = document.querySelector('.nextQuestion');
let gameStatus = document.querySelector('.gameStatus');
let gameOver = document.querySelector('.gameOver');
let scoreAddress = document.querySelector('.js-score');
let body = document.querySelector('body');
let answersContentFinal = [];
let i=0;
score = 0;
let answersContent = [];
let correctAnswer = document.querySelector('.correctAnswer')
let questions = [];
ten.addEventListener('click', tenButtonsOn);
fifteen.addEventListener('click', fifteenButtonsOn);
twenty.addEventListener('click', twentyButtonsOn);
tenDifficulty.forEach(button=>{
    button.addEventListener('click', tenGame)
});
fifteenDifficulty.forEach(button=>{
    button.addEventListener('click', fifteenGame)
});
twentyDifficulty.forEach(button=>{
    button.addEventListener('click', twentyGame)
});
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
function tenGame(e){
    e.preventDefault();
    if(e.target.innerHTML='Easy'){
        fetch(baseTenUrl+easyUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });
        body.classList.add('easyBackground')
    } else if(e.target.innerHTML='Medium'){
        fetch(baseTenUrl+mediumUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });            
        body.classList.add('mediumBackground')
    } else if(e.target.innerHTML='Hard'){
        fetch(baseTenUrl+hardUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            
            }); 
        body.classList.add('hardBackground') 
    } else if(e.target.innerHTML='Random'){
        fetch(baseTenUrl+randomUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });
        body.classList.add('randomBackground')
    }
}
function fifteenGame(e){
    e.preventDefault();
    if(e.target.innerHTML='Easy'){
        fetch(baseFifteenUrl+easyUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });
        body.classList.add('easyBackground')
    } else if(e.target.innerHTML='Medium'){
        fetch(baseFifteenUrl+mediumUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });            
        body.classList.add('mediumBackground')
    } else if(e.target.innerHTML='Hard'){
        fetch(baseFifteenUrl+hardUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            
            }); 
        body.classList.add('hardBackground') 
    } else if(e.target.innerHTML='Random'){
        fetch(baseFifteenUrl+randomUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });
        body.classList.add('randomBackground')
    }
}
function twentyGame(e){
    e.preventDefault();
    if(e.target.innerHTML='Easy'){
        fetch(baseTwentyUrl+easyUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });
        body.classList.add('easyBackground')
    } else if(e.target.innerHTML='Medium'){
        fetch(baseTwentyUrl+mediumUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });            
        body.classList.add('mediumBackground')
    } else if(e.target.innerHTML='Hard'){
        fetch(baseTwentyUrl+hardUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            
            }); 
        body.classList.add('hardBackground') 
    } else if(e.target.innerHTML='Random'){
        fetch(baseTwentyUrl+randomUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            });
        body.classList.add('randomBackground')
    }
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
    removeEasy();
    removeMedium();
    removeHard();
    removeRandom();
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
}
function removeEasy(){
    body.classList.remove('.easyBackground');
}
function removeMedium(){
    body.classList.remove('.mediumBackground');  
}
function removeHard(){
    body.classList.remove('.hardBackground');
}
function removeRandom(){
    body.classList.remove('.randomBackground');
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