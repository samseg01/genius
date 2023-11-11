const btnAzul = document.getElementById("box1");
const btnVermelho = document.getElementById("box2");
const btnVerde = document.getElementById("box3");
const btnAmarelo = document.getElementById("box4");

const btnStart = document.getElementById("start");
const telaMenu = document.querySelector(".menu");
const telaGame = document.querySelector(".game");

btnStart.addEventListener('click', function() {
    telaMenu.style.display = "none"
    telaGame.style.display = "flex";
    animations();
})

var count = 0;
var sequencia = [];
sequencia.push(randomButtons());

btnAzul.addEventListener('click', function() {
    clickButton(1);
})
btnVermelho.addEventListener('click', function() {
    clickButton(2);
})
btnVerde.addEventListener('click', function() {
    clickButton(3);
})
btnAmarelo.addEventListener('click', function() {
    clickButton(4);
})

function clickButton(btn){
    if(verificaTecla(btn, count)){
        count++;
        if(count==sequencia.length){
            sequencia.push(randomButtons());
            animations();
            count=0;
        }
    }else{
        alert("ERROI!!!");
        sequencia[0];
        count= 0;
        sequencia.push(randomButtons());
        sequenceButtons();
    }
}

function sequenceButtons(){
    for(let i=0; i<sequencia.length; i++){
        setTimeout(() => {
            let a = sequencia[i];

            if(a==1){
                animationButton(btnAzul);
            }else if(a==2){
                animationButton(btnVermelho);
            }else if(a==3){
                animationButton(btnVerde);
            }else if(a==4){
                animationButton(btnAmarelo);
            }
        },(i*1000));
    }
}

function randomButtons(){
    var num = 0;
    while(num==0){
        num = Math.floor(Math.random() * 5);
    }
    return num;
}

function animationButton(btn){
    for(let i = 100 ; i>=50; i--){
        setTimeout(() => {
            btn.style.opacity = i/100;
        },(i*20));
    }
    for(let i = 50 ; i<=100; i--){
        setTimeout(() => {
            btn.style.opacity = i/100;
        },(i*20));
    }
}
