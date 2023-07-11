/*botao para clicar e fazer o sorteio*/
const raffleButton = document.querySelector (".raffle");




function generateNumber (){

    const min = Math.ceil (document.querySelector(".left-input").value)
    const max = Math.floor (document.querySelector(".right-input").value)

   const result = Math.floor(Math.random() * (max - min + 1)) + min;

   alert(result)
}

/*chama a funçao quando o usuario CLICAR o botao SORTEAR*/
raffleButton.addEventListener("click", generateNumber)

