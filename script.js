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
    userSeq=[];
    level++;
    for(let i=0;i<level;i++){
        let randColor=choose[getRandom()];
        gameSeq.push(randColor);
        const randGlow= await glow(randColor);
    }
    console.log(gameSeq);
    matchUserSeq(gameSeq);
};

const matchUserSeq= async (gameSeq)=>{
    buttons.forEach(button=>{
        button.disabled=false;
    });
}

buttons.forEach(button=>{
    if(i>=level){
            buttons.forEach(button=>{
            button.disabled=true;
        });
    }
    button.addEventListener("click",()=>{
        if(!started)
            return;
        button.style.opacity="0.5"
        setTimeout(()=>{
            button.style.opacity="1"
        },300);
        let clickedBtn=this.id;
        console.log(clickedBtn);//check
        userSeq.push(clickedBtn);
        i++;
        check(clickedBtn);
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

const check=(btn)=>{
    if(btn===gameSeq[i-1]){
        console.log("correct");
        if(userSeq.length===gameSeq.length){
            setTimeout(()=>{
                nextLevel();
            },1000);
        }
    }
    else{
        gameOver();
    }
};

const gameOver=()=>{
    alert(`GAME OVER Your Score ${level-1}`);
    userSeq=[];
    gameSeq=[];

    level=0;
    started=false;
};

resetBtn.addEventListener("click",()=>{
    userSeq=[];
    gameSeq=[];

    level=0;
    started=false;
});





