const form = document.querySelector('.quiz-form')
const button = document.querySelector('.btn')
const scorePopup = document.querySelector('.popup-wrapper')
const paragraphFeedback = document.querySelector('.paragraphFeedback')

const correctAnswers = ['B', 'B', 'D', 'C', 'A']

const shouldClosePopup = (classNames, clickedElementClassName) => classNames.some(className => clickedElementClassName === className)

const rightAnswersFromUser = userAnswers => {
    let rightAnswers = 0
    
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            rightAnswers++
        }
    })
    return rightAnswers
} 

const showScorePopup = (rightAnswers, totalQuestions) => {
    const feedbackQuizMessage = `Você acertou ${rightAnswers} de ${totalQuestions} perguntas!`
    paragraphFeedback.textContent = feedbackQuizMessage
    scorePopup.style.display = 'block'
}

const handleFeedbackQuiz = event => {
    event.preventDefault()

    const userAnswers = [   
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value
    ]

    const rightAnswers = rightAnswersFromUser(userAnswers)
    showScorePopup(rightAnswers, userAnswers.length) 
}

const handlePopupClose = event => { 
    const classNames = ['popup-wrapper', 'popup-close', 'popup-link']
    const clickedElementClassName = event.target.classList.value
    
    const closePopup = shouldClosePopup(classNames, clickedElementClassName)

    if (closePopup) {  
        scorePopup.style.display = 'none'  
    }
}

form.addEventListener('submit', handleFeedbackQuiz)
scorePopup.addEventListener('click', handlePopupClose)