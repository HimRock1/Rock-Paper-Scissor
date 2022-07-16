
// <-----------------------------------Working with DOM Manipulation----------------------------------------->

const myarray=["rock","paper","scissor"]
function computerplay(){
    const random=Math.floor(Math.random()*myarray.length)
    return myarray[random];
}


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
        para.textContent="It's a Tie.Both of you have selected "+playerselection.toUpperCase();

    }else if(result=="Win"){
        playerScore++
        para.textContent="You have won this Round.Your Selection was "+playerselection.toUpperCase()+" and Computer's selection was "+computerselection.toUpperCase();
    }else if(result=="lose"){
        computerScore++
        para.textContent="Computer have Won this Round.Your Selection was "+playerselection.toUpperCase()+" and Computer's selection was "+computerselection.toUpperCase()
    }
    div.appendChild(para);
    container.appendChild(div);
}
function Score(){
    const results=document.querySelector('.results')
    const para=document.querySelector('.results > .para')
    para.classList.remove("para");
    para.classList.add("para")
    if(playerScore>computerScore){
        para.textContent="Congratulation!!..You have Won this match.Your Score was "+playerScore+" and Computer Score was "+computerScore;  
    }else if(computerScore>playerScore){
        para.textContent="You have Lost this match.Your Score was "+playerScore+" and Computer Score was "+computerScore;  
    }else{
        para.textContent="The Match was a Draw.Your Score "+playerScore+" as well as Computer's Score "+computerScore+" was the same.";
    }
    const para2=document.createElement('p');
    para2.classList.toggle("para-2")
    para2.textContent="Click any Mouse Key to Clear the Screen"
    results.appendChild(para);
    results.appendChild(para2);
    
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
    }
    if(count>5){
        count=0;
        const container=document.querySelector('.container');
        const results=document.querySelector('.results')
        const para=document.querySelector('.results > .para')
        const para2=document.querySelector('.results > .para-2')
        para.classList.remove("para");
        para2.remove();
        para.classList.add("para")
        container.textContent="Well Done.You Played Well.";
        para.textContent="Press Again to Play the Game Again"
        return;
    }
    count++;
    
}

const buttons=Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => {
    button.addEventListener('click',game); 
});


