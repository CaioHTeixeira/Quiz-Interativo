const form = document.querySelector('.quiz-form')
const button = document.querySelector('.btn')
const scorePopup = document.querySelector('.popup-wrapper')
const paragraphFeedback = document.querySelector('.paragraphFeedback')

const correctAnswers = ['B', 'B', 'D', 'C', 'A']

const shouldClosePopup = (classNames, clickedElementClassName) => 
    classNames.some(className => clickedElementClassName === className)

const getRightAnswersFromUser = () => {
    const rightAnswersFromUser = correctAnswers.filter((correctAnswer, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value

        return userAnswer === correctAnswer 
    })

    return rightAnswersFromUser
}

const showScorePopup = (rightAnswers, totalQuestions) => {
    const feedbackQuizMessage = `Você acertou ${rightAnswers} de ${totalQuestions} perguntas!`
    paragraphFeedback.textContent = feedbackQuizMessage
    scorePopup.style.display = 'block'
}

const handleFeedbackQuiz = event => {
    event.preventDefault()

    const rightAnswers = getRightAnswersFromUser().length
    const totalQuestions = correctAnswers.length

    showScorePopup(rightAnswers, totalQuestions) 
}

const handlePopupClose = event => { 
    const classNames = ['popup-wrapper', 'popup-close', 'popup-link']
    const clickedElementClassName = event.target.classList.value
    
    const closePopup = shouldClosePopup(classNames, clickedElementClassName)

    if (closePopup) {  
        scorePopup.style.display = 'none'  
        
        scrollTo({
            top: 0, 
            left: 0,
            behavior: 'smooth'
        })
    }
}

form.addEventListener('submit', handleFeedbackQuiz)
scorePopup.addEventListener('click', handlePopupClose)