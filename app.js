/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/
const correctAnswers = ['B', 'B', 'B', 'B', 'A']

const form = document.querySelector('.quiz-form')
const button = document.querySelector('.btn')
const popup = document.querySelector('.popup-wrapper')
const paragraphFeedback = document.querySelector('.paragraphFeedback')
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