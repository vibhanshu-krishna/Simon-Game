let level=0;
let started=false;

let gameSeq=[];
let userSeq=[];

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
    userSeq=[];
    level++;
    for(let i=0;i<level;i++){
        let randColor=choose[getRandom()];
        const randGlow= await glow(randColor);
        userSeq.push(randColor);
    }
    console.log(userSeq);
};

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





