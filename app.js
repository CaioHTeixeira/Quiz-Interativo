const form = document.querySelector('.quiz-form')
const button = document.querySelector('.btn')
const scorePopup = document.querySelector('.popup-wrapper')
const paragraphFeedback = document.querySelector('.paragraphFeedback')

const correctAnswers = ['B', 'B', 'B', 'B', 'A']

const handleFeedbackQuiz = event => {
    event.preventDefault()

    let rightAnswers = 0
    const userAnswers = [   
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value
    ]

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            rightAnswers++
        }
    })
    
    const feedbackQuizMessage = `Você acertou ${rightAnswers} de ${userAnswers.length} perguntas!`
    paragraphFeedback.textContent = feedbackQuizMessage
    scorePopup.style.display = 'block' 
}

const handlePopupClose = event => { 
    const classNames = ['popup-wrapper', 'popup-close', 'popup-link']
    const clickedElementClassName = event.target.classList.value
    const shouldClosePopup = classNames.some(className => clickedElementClassName === className)

    if (shouldClosePopup) {  
        scorePopup.style.display = 'none'  
    }
}

form.addEventListener('submit', handleFeedbackQuiz)
scorePopup.addEventListener('click', handlePopupClose)