const myarray=["rock","paper","scissor"]
function computerplay(){
    const random=Math.floor(Math.random()*myarray.length)
    return myarray[random];
}

let playerScore=0;
let computerScore=0;

function playround(playerselection,computerselection){
    if(playerselection==computerselection){
        return "tie";
    }else if(playerselection=="rock" && computerselection=="paper"){
        return "lose"
    }else if(playerselection=="rock" && computerselection=="scissor"){
        return "Win"
    }else if(playerselection=="paper" && computerselection=="rock"){
        return "Win"
    }else if(playerselection=="paper" && computerselection=="scissor"){
        return "lose"
    }else if(playerselection=="scissor" && computerselection=="rock"){
        return "lose"
    }else if(playerselection=="scissor" && computerselection=="paper"){
        return "Win"
    }else{
        return "Make a selection first"
    }
}

function game(){
    for(let i=0;i<5;i++){
        const firstplayerselection=prompt("Enter anyone of the following: Rock, Paper, Scissor?")
        const playerselection=firstplayerselection.toLowerCase();
        const computerselection=computerplay();
        let result=playround(playerselection,computerselection);
        if (result=="tie"){
            console.log("It's a Tie.Both of you have selected "+(playerselection.toUpperCase()))
        }else if(result=="Win"){
            playerScore++
            console.log("You have Won this Round. "+(playerselection.toUpperCase())+" beats "+(computerselection.toUpperCase()))
        }else if(result=="lose"){
            computerScore++
            console.log("Computer have Won this Round. "+(computerselection.toUpperCase())+" beats "+(playerselection.toUpperCase()))
        }
    }
    if(playerScore>computerScore){
        console.log("Congratulation!!..You have Won this match.Your Score was "+playerScore+" and Computer Score was "+computerScore)  
    }else if(computerScore>playerScore){
        console.log("You have Lost this match.Your Score was "+playerScore+" and Computer Score was "+computerScore)  
    }else{
        console.log("The Match was a Draw.Your Score "+playerScore+" as well as Computer's Score "+computerScore+" was the same.")
    }  
}
game()