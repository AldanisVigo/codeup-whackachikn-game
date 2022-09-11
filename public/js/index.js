//Main container for the game buttons
const container = document.getElementById("whackachicken")

//The winning score
let winningScore = 8

//The losing score
let losingScore = 0

//The score tracking variable
let score = 0

//Container where the score will be displayed
const score_container = document.getElementById('score')

//Array to store the chicken buttons
let whackabuttons = []

//Placeholder for the setInterval timer
let timer = null;

/*
    Function to check for win or increase the score
*/
const increaseScore = () => {
    //If the score is the winning score minus one
    if(score == winningScore - 1){
        //Clear the randomizer timer
        clearInterval(timer)
        
        //Confirm wether the user wants to restart the game and let them know they won
        let confirmRestart = confirm("Youz a weener Yaayyyy! Would you like to play again?")
        
        //If they choose to restart the game
        if(confirmRestart){
            //Clear the score back to 0
            score = 0;

            //And display it
            score_container.innerText = "Score : 0"

            //Start the chicken randomizer timer again
            startChickenRandomizer()
        }else{ //Otherwise

            //Say goodbye burger!
            alert("Alrighty. Goodbye burger!")
        }
    }else{ //Otherwise
        score++ //Increase the score by 1
        
        //And display the new score
        score_container.innerText = `Score : ${score}`
    }
}


/*
    Function to check for loss or decrease the score
*/
const decreaseScore = () => {
    //If the score is less than or equal to the losing score
    if(score <= losingScore){
        //Stop the timer
        clearInterval(timer)
        //Ask the user if he/she wants to restart the game and let them know they lost
        let confirmRestart = confirm("You lost! Would you like to play again?")
        
        //If they choose to restart the game
        if(confirmRestart){
            //Clear the score back to 0
            score = 0;
            //And start the chicken randomizer again
            startChickenRandomizer()
        }else{
            //Otherwise, just say goodbye
            alert("Alrighty. Goodbye burger!")
        }
    }else{
        //Otherwise decrease the score
        score--

        //Display the new score
        score_container.innerText = `Score : ${score}`
    }
}


/*
    Function to create the 9 buttons
*/
const createButtons = () => {
    //Iterate through the nine buttons
    for(let i = 0; i < 9; i++){
        //Create the button element
        const btn = document.createElement('button')
        //Add the css class name so we can target it with css
        btn.className = "whackabutton"
        //And add an ID in case we need to access the button directly
        btn.id = "whackabutton_" + i
        //Append the button to the button container div
        container.appendChild(btn)

        //Add a click event listener to the button
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

        //Push this button into the buttons array
        whackabuttons.push(btn)
    }
}


/*
    Function starts a timer every 900ms and randomizes which button
    the chicken will appear in
*/
const startChickenRandomizer = () => {
    //The interval for switching the chicken
    const interval_time = 900

    //Set the timer to an interval function
    timer = setInterval(()=>{
        //Select a random button from 0-9
        let selectedButton = Math.floor(Math.random() * 10)

        //Iterate through all the available buttons
        for(let i = 0; i < 9; i++){
            //Get the current button
            const s = document.getElementById('whackabutton_' + i)

            //Check if the current button is the selected button
            if(i !== selectedButton){ //If it's not the selected button
                //Remove chicken off this button if it's there
                s.classList.remove(['chicken'])
            }else{ //Otherwise
                //Add the chicken to this button
                s.classList.add(['chicken'])
            }
        }

    },interval_time)
}

//Create all the chicken buttons
createButtons()

//Start the randomizer timer
startChickenRandomizer()



