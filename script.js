let level=0;
let started=false;
let i=0;

let gameSeq=[];
let userSeq=[];

const buttons=document.querySelectorAll(".Square");

buttons.forEach(button=>{
    button.disabled=true;
});

const choose=["redSq","greenSq","blueSq","yellowSq"];

const startBtn=document.querySelector("#start");
const resetBtn=document.querySelector("#reset");

const getRandom=()=>{
    let randomVal=Math.floor(Math.random()*4);
    return randomVal;
};


startBtn.addEventListener("click", ()=>{
    if(started)
        return;
    started=true;
    nextLevel();
});

const nextLevel= async ()=>{
    gameSeq=[];
    level++;
    for(let i=0;i<level;i++){
        let randColor=choose[getRandom()];
        const randGlow= await glow(randColor);
        gameSeq.push(randColor);
    }
    matchUserSeq(gameSeq);
};

const matchUserSeq= async (gameSeq)=>{
    buttons.forEach(button=>{
        button.disabled=false;
    });
    for(let i=0;i<level;i++){
       await getId();
    }
    
}

buttons.forEach(button=>{
    if(i>=level){
            buttons.forEach(button=>{
            button.disabled=true;
        });
    }
    addEventListener("click",()=>{
        if(!started)
            return;
        let clikedBtn=this.id;
        userSeq.push(clikedBtn);
        i++;
        check(userseq[i-1]);
    });
});

const glow=(randColor)=>{
    return new Promise((resolve)=>{
    let choice=document.getElementById(randColor);
    choice.style.opacity="0.5";
    setTimeout(()=>{
        choice.style.opacity="1";
        resolve();
    }, 300);
    });
    
};





