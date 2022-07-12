const myarray=["rock","paper","scissor"]
function computerplay(){
    const random=Math.floor(Math.random()*myarray.length)
    return myarray[random];
}
//const computerselection=computerplay();


let playerScore=0;
let computerScore=0;
let count=0;

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

function gameresult(event){
    const playerselection=event.srcElement.textContent.toLowerCase();
    const computerselection=computerplay();
    let result=playround(playerselection,computerselection);
    const container=document.querySelector('.container');
    const div=document.createElement('div');
    div.classList.remove('content-1')
    div.classList.add('content-1')
    const para=document.createElement('p')
    if (result=="tie"){
        //console.log("It's a Tie.")
        para.textContent="It's a Tie.Both of you have selected "+playerselection;

    }else if(result=="Win"){
        playerScore++
        //console.log("You have Won this Round. ")
        para.textContent="You have won this Round.Your Selection was "+playerselection+" and Computer's selection was "+computerselection;
    }else if(result=="lose"){
        computerScore++
        //console.log("Computer have Won this Round. ")
        para.textContent="Computer have Won this Round.Your Selection was "+playerselection+" and Computer's selection was "+computerselection
    }
    div.appendChild(para);
    container.appendChild(div);
}
function Score(){
    const results=document.querySelector('.results')
    const para=document.querySelector('.results > .para')
    //const para=document.createElement('p');
    para.classList.toggle(".para");
    if(playerScore>computerScore){
        para.textContent="Congratulation!!..You have Won this match.Your Score was "+playerScore+" and Computer Score was "+computerScore;  
    }else if(computerScore>playerScore){
        para.textContent="You have Lost this match.Your Score was "+playerScore+" and Computer Score was "+computerScore;  
    }else{
        para.textContent="The Match was a Draw.Your Score "+playerScore+" as well as Computer's Score "+computerScore+" was the same.";
    }
    results.appendChild(para);
    
}

// <--------------------------Working with DOM Manipulation----------------------------------------->

// const Rock=document.querySelector('.btn-R');
// Rock.addEventListener('click',playround('rock', computerselection));

// const Paper=document.querySelector('.btn-P');
// Paper.addEventListener('click',playround('paper',()=> computerselection));

// const Scissor=document.querySelector('.btn-S');
// Scissor.addEventListener('click',playround('scissor',()=> computerselection));


function removegame(){
    const container=document.querySelector('.container');
    const para=document.querySelector('.results > .para')
    // const div=container.querySelectorAll('.content-1');
    container.textContent="Well Done";
    para.textContent="You Played Well."
    count=0;
    return;
    //console.log(e)
}

function game(event){
   console.log(count)
    if(count<5){
        const container=document.querySelector('.container');
        const para=document.querySelector('.results > .para');
        container.textContent="";
        para.textContent="";   
        gameresult(event);
    }
    if(count==5){
        const container=document.querySelector('.container');
        container.textContent="";
        Score();
        playerScore=0;
        computerScore=0;
        // buttons.forEach((button)=>{
        //     //button.addEventListener('click',removegame);
        //     count=0;
        //     button.removeEventListener('click',game)
        //     return;
        // })
    }
    if(count>5){
        count=0;
        const container=document.querySelector('.container');
        const para=document.querySelector('.results > .para');
        container.textContent="Well Done.You Played Well.";
        para.textContent="Press Again to Play the Game Again"
    //  buttons.forEach((button)=>{
    //     // button.addEventListener('click',removegame);
    //     button.removeEventListener('click',game)
    //  })
    }
    count++;
//console.log(event) 
}

const buttons=Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => {
    button.addEventListener('click',game); 
});



