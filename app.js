let userscore=0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");
const getcomputerchoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randidx= Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame = () => {
    // console.log("game was draw");
    msg.innerText="game was draw,play again";
    msg.style.backgroundColor = "black";
}
const showwinner =(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        // console.log("you win");
        msg.innerText = `you win! Your ${userchoice} beats ${compchoice}`;
       msg.style.backgroundColor = "green";
     }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        // console.log("you lose");
        msg.innerText =`you lose! ${compchoice} beats yours ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame=(userchoice)=>{
    // console.log("User choice = ",userchoice);
    //generate small functions which are reusable-modular
    const compchoice = getcomputerchoice();
    // console.log("comp choice = ",compchoice);
  if(userchoice==compchoice){
    //draw choice
    drawgame();
  }
  else{
    let userwin = true;
    if(userchoice==="rock"){
        //scissors or paper
        userwin = compchoice === "paper" ? false : true;
    }
    else if(userchoice==="paper"){
        //rock,scissor
        userwin = compchoice === "scissors" ? false : true;
    }
    else{
        //rock or paper
        userwin=compchoice==="rock" ? false : true;
    }
    showwinner(userwin,userchoice,compchoice);
  }
}
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
})