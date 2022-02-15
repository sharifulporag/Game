
let number = document.querySelector(".number");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let guess = document.querySelector(".guess");
let btn = document.querySelector(".btn1");
let body = document.querySelector("body");

number.textContent = Math.trunc(Math.random()*100)+1;

console.log(number);

let a = 5;

btn.addEventListener("click",function(){
    let secretNumber =  Number(guess.value);

    if(!guess.value){
    message.textContent = "😫 No Number!";
    }else if(guess.value === number.textContent){
        message.textContent = "😎 Correct Number!";
        body.style.backgroundColor = "green";
        document.querySelector(".unknown-Number").style.opacity = "1";
        
    }else if(guess.value > number.textContent){
        if(score.textContent > 1){
            message.textContent = "🙄Too High!";
            a--;
            score.textContent = a;
        }else{
            message.textContent = "😪you lost the game!";
            score.textContent = 0;
        }
        
    }else if(guess.value < number.textContent){
        if(score.textContent > 1){
            message.textContent = "🥱Too Low!";
            a--;
            score.textContent = a;
        }else{
            message.textContent = "😪you lost the game!";
            score.textContent = 0;
        }
    }
})




let again = document.querySelector(".again");

function refreshPage(){
    window.location.reload();
}



