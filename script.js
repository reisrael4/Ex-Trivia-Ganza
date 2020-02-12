let random = document.querySelector('.random');
let questionBox = document.querySelector('.questionBox');
let questionContainer = document.querySelector('.question');
let answers = document.querySelectorAll('.answer');
let modal = document.querySelector('.modal');
let modalText = document.querySelector('.modalText');
let nextButton = document.querySelector('.nextQuestion');
let answersContent = [];
let correctAnswer = [];
let questions = [];
let randomUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';
random.addEventListener('click', randomGame);
function randomGame(e){
    e.preventDefault();
    fetch(randomUrl)
        .then(res=>{
            return res.json()
        })
        .then(res=>{ 
            questions.push(...res.results);
            // console.log(questions);
            let i=0;
            turn();
            function turn(){
                questionContainer.innerHTML = questions[i].question;
                answersContent.push(questions[i]["correct_answer"], ...questions[i]["incorrect_answers"]);
                correctAnswer.push(questions[i]["correct_answer"]);
                // console.log(answersContent);
                let answersContentFinal = [];
                for(let j=0; j<answers.length; j++){
                    answersContentFinal.push(...answersContent.splice(Math.floor(Math.random()*answersContent.length)));    
                    answers[j].innerHTML = answersContentFinal[j]
                }
                // console.log(answersContentFinal)
            }
            answers.forEach(answer=>{
                answer.addEventListener('click', checkCorrect)
            })
            function checkCorrect(e){
                e.preventDefault();
                // console.log(e.target)
                modal.classList.add('modalOpen')
                if(e.target.innerHTML == correctAnswer[0]){
                    modalText.innerHTML = "Good job!";
                    modalText.style.color = 'green';
                } else{
                    modalText.innerHTML = "Nice try, but the correct answer was " + correctAnswer[0];
                    modalText.style.color = 'red';
                }
                nextButton.addEventListener('click', newQuestion)
                function newQuestion(e){
                    e.preventDefault();
                    modal.classList.add('modalClose');
                    modal.addEventListener('animationend', closed);
                    function closed(e){
                        if(e.target == modal){
                            modal.classList.remove('modalOpen');
                            modal.classList.remove('modalClose');
                            modal.removeEventListener('animationend', closed)
                        }
                        let gameStatus = document.querySelector('.gameStatus');
                        
                        if(i===10){
                            gameStatus.innerHTML = "Game Over!";
                            nextButton.addEventListener('click', endgame);
                            function endgame(e){
                                e.preventDefault();
                                questionContainer.innerHTML = '';
                                for(let j=0; j<answers.length; j++){
                                    answers[j].innerHTML = '';
                                }
                                questionBox.classList.remove('questionBoxOpen');
                                modal.classList.add('modalClose')
                                modal.addEventListener('animationend', closed);
                                function closed(e){
                                    if(e.target == modal){
                                        modal.classList.remove('modalOpen');
                                        modal.classList.remove('modalClose');
                                        modal.removeEventListener('animationend', closed)
                                }
                            }
                            }
                        }
                    }
                    turn();
                }
                i+=1;
                correctAnswer = [];
            }
            questionBox.classList.add('questionBoxOpen');
            });
}