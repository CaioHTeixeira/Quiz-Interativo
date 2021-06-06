const form = document.querySelector('.quiz-form')
const button = document.querySelector('.btn')
const scorePopup = document.querySelector('.popup-wrapper')
const paragraphFeedback = document.querySelector('.paragraphFeedback')

const correctAnswers = ['B', 'B', 'D', 'C', 'A']

const shouldClosePopup = (classNames, clickedElementClassName) => classNames.some(className => clickedElementClassName === className)

const getUserAnwers = () => {
    let userAnswers = []

    correctAnswers.forEach((_, index) => { 
        const userAnswer = form[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)
    })

    return userAnswers
}

const rightAnswersFromUser = userAnswers => {
    let rightAnswers = 0
    
    userAnswers.forEach((userAnswer, index) => {
        const isUserAnswerCorrect = userAnswer === correctAnswers[index]
        
        if (isUserAnswerCorrect) {
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

    const userAnswers = getUserAnwers()

    const rightAnswers = rightAnswersFromUser(userAnswers)
    showScorePopup(rightAnswers, userAnswers.length) 
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