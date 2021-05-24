const form = document.querySelector('.quiz-form')
const button = document.querySelector('.btn')
const popup = document.querySelector('.popup-wrapper')
const paragraphFeedback = document.querySelector('.paragraphFeedback')

const correctAnswers = ['B', 'B', 'B', 'B', 'A']

// console.log(form.inputQuestion1.value)

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
            rightAnswers ++
        }
    })
    
    const feedbackQuizMessage = `Você acertou ${rightAnswers} de ${userAnswers.length} perguntas!`
    paragraphFeedback.textContent = feedbackQuizMessage
    popup.style.display = 'block' //faz o popup aparecer, colocando display como 'block'.
}

const handlePopupClose = event => { 
    const classNames = ['popup-wrapper', 'popup-close', 'popup-link']
    const clickedElementClassName = event.target.classList.value
    const shouldClosePopup = classNames.some(className => clickedElementClassName === className)
    // const shouldClosePopup = classNames.includes(clickedElementClassName) //poderia fazer com includes tbm em vez do some().

    if (shouldClosePopup) { //se ele clicar no x, ou no botão ok, ou fora do popup, faz o popup desaparecer. 
        popup.style.display = 'none'  
    }

    document.location.reload(true) //atualizar a página
}

form.addEventListener('submit', handleFeedbackQuiz)
popup.addEventListener('click', handlePopupClose)