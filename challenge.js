let baseTenUrl = 'https://opentdb.com/api.php?amount=10&';
let baseFifteenUrl = 'https://opentdb.com/api.php?amount=15&';
let baseTwentyUrl = 'https://opentdb.com/api.php?amount=20&';
let randomUrl = 'type=multiple';
let easyUrl = 'difficulty=easy&type=multiple';
let mediumUrl = 'difficulty=medium&type=multiple';
let hardUrl = 'difficulty=hard&type=multiple';
let numberButtons = document.querySelector('.numberButtons');
let numberQuestion = document.querySelector('.numberQuestion');
let answers = document.querySelectorAll('.answer');
let ten = document.querySelector('.ten');
let fifteen = document.querySelector('.fifteen');
let twenty = document.querySelector('.twenty');
let tenButtons = document.querySelectorAll('.tenButtons');
let fifteenButtons = document.querySelectorAll('.fifteenButtons');
let twentyButtons = document.querySelectorAll('.twentyButtons');
class game{
    constructor(url){
        this.url = url;
        let questions = [];
        fetch(this.url)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            questionBox.classList.add('questionBoxOpen');
            game();
            }); 
    }
    game(){
        i = 0
        turn();
    }
    turn(){
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
    answerMouse(e){
        e.preventDefault();
        e.target.style.backgroundColor = 'darkgrey';
    }
    answerMouseLeave(e){
        e.preventDefault();
        e.target.style.backgroundColor = '#fefefe';
    }
    checkCorrect(e){
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
    newQuestion(e){
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
    endgame(e){
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
    removeEasy(){
        body.classList.remove('.easyBackground');
    }
    removeMedium(){
        body.classList.remove('.mediumBackground');  
    }
    removeHard(){
        body.classList.remove('.hardBackground');
    }
    removeRandom(){
        body.classList.remove('.randomBackground');
    }
    closed(e){
        if(e.target == modal){
            modal.classList.remove('modalOpen');
            modal.classList.remove('modalClose');
            modal.removeEventListener('animationend', closed)
        }
        answersContentFinal = [];
        answersContent = [];
    }
}
let easyTen = new game(baseTenUrl+easyUrl)