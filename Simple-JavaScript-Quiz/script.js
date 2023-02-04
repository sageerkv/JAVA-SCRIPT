const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// start section
function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

// next sextion
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// question section
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text
        button.classList.add('btn');
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

// restart section
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// answer section
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach( button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

// evaluate section
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

// clear section
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// question section
const questions = [
    {
      question: '1. Javascript is an _______ language?',
      answers: [
        { text: 'Object-oriented', correct: true },
        { text: 'Object-based', correct: false },
        { text: 'Procedural', correct: false },
        { text: 'None of the above', correct: false }
      ]
    },
    {
      question: '2. Which of the following keywords is used to define a variable in Javascript?',
      answers: [
        { text: 'var', correct: false },
        { text: 'let', correct: false },
        { text: 'Both A and B', correct: true},
        { text: 'None of the above', correct: false }
      ]
    },
    {
      question: '3. Which of the following methods is used to access HTML elements using Javascript?',
      answers: [
        { text: 'getElementById()', correct: false },
        { text: 'getElementsByClassName()', correct: false },
        { text: 'Both A and B', correct: true },
        { text: 'None of the above', correct: false }
      ]
    },
    {
      question: '4. Upon encountering empty statements, what does the Javascript Interpreter do?',
      answers: [
        { text: 'Throws an error', correct: false },
        { text: 'Ignores the statements', correct: true },
        { text: 'Gives a warning', correct: false },
        { text: 'None of the above', correct: false }
      ]
    }
  ]