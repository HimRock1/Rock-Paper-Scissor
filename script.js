const myarray=["rock","paper","scissor"]
function computerplay(){
    const random=Math.floor(Math.random()*myarray.length)
    return myarray[random];
}

function playround(playerselection,computerselection){
    if(playerselection==computerselection){
        return ("It\'s a tie.You both selected "+playerselection);
    }else if(playerselection=="rock" && computerselection=="paper"){
        return ("You lose.Paper beat Rock.")
    }else if(playerselection=="rock" && computerselection=="scissor"){
        return ("You Win.Rock beat Scissor.")
    }else if(playerselection=="paper" && computerselection=="rock"){
        return ("You Win.Paper beat Rock.")
    }else if(playerselection=="paper" && computerselection=="scissor"){
        return ("You lose.Scissor beat Paper.")
    }else if(playerselection=="scissor" && computerselection=="rock"){
        return ("You Lose.Rock beat Scissor.")
    }else if(playerselection=="scissor" && computerselection=="paper"){
        return ("You Win.Scissor beat Paper.")
    }else{
        return ("Make a selection first")
    }
}
const firstplayerselection="ROck";
const playerselection=firstplayerselection.toLowerCase();
const computerselection=computerplay();
console.log(playround(playerselection,computerselection));