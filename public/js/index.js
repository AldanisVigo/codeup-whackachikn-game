const container = document.getElementById("whackachicken")
let winningScore = 8
let losingScore = 0
let score = 0
const score_container = document.getElementById('score')

let whackabuttons = []
let timer = null;

const increaseScore = () => {
    if(score == winningScore - 1){
        clearInterval(timer)
        let confirmRestart = confirm("Youz a weener Yaayyyy! Would you like to play again?")
        if(confirmRestart){
            score = 0;
            score_container.innerText = "Score : 0"
            startChickenRandomizer()
        }else{
            alert("Alrighty. Goodbye burger!")
        }
    }else{
        score++
        score_container.innerText = `Score : ${score}`
    }
}

const decreaseScore = () => {
    if(score <= losingScore){
        clearInterval(timer)
        let confirmRestart = confirm("You lost! Would you like to play again?")
        if(confirmRestart){
            score = 0;
            startChickenRandomizer()
        }else{
            alert("Alrighty. Goodbye burger!")
        }
    }else{
        score--
        score_container.innerText = `Score : ${score}`
    }
}

const createButtons = () => {
    for(let i = 0; i < 9; i++){
        const btn = document.createElement('button')
        btn.className = "whackabutton"
        btn.id = "whackabutton_" + i
        container.appendChild(btn)
        btn.onclick = (e) => {
            // Check if the chicken class is there
            let b = e.target;
            if(b.classList.contains('chicken')){
                //If it is, add 1 to the score
                increaseScore()
            }else{
                //If it's not decrease one from the score
                decreaseScore()
            }
        }
        whackabuttons.push(btn)
    }
}

const startChickenRandomizer = () => {
    const interval_time = 900
    timer = setInterval(()=>{
        
        let selectedButton = Math.floor(Math.random() * 10)
        for(let i = 0; i < 9; i++){
            const s = document.getElementById('whackabutton_' + i)
            if(i !== selectedButton){
                //Take the chicken off this button
                s.classList.remove(['chicken'])

            }else{
                //Add the chicken to this button
                s.classList.add(['chicken'])
            }
        }

    },interval_time)
}


// createTitle()
createButtons()
startChickenRandomizer()



