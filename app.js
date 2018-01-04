var resetButton = document.querySelector(".reset");
var p1Display = document.querySelector(".p1Display");
var p2Display = document.querySelector(".p2Display");
var p1Button = document.querySelector(".player1button");
var p2Button = document.querySelector(".player2button");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 3;
var inputNum = document.querySelector("input");
var winScore = document.querySelector(".winningScore")
var carOne = document.querySelector(".one")
var carTwo = document.querySelector(".two")
var winningPosition = "100%"


    carOne.style.left = "0%";
    carTwo.style.left = "0%";


inputNum.addEventListener("change", function(){
    winScore.textContent = this.value;
    winningScore = Number(inputNum.value);
});

resetButton.addEventListener("click", function(){
    resetTotal();
});

function resetTotal(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}

function autoReset(){
    carOne.style.left = "0%";
    carTwo.style.left = "0%";
}

function moveCar(carElement){
    if(!gameOver){
        var carPosition = parseInt(carElement.style.left);
        carPosition += 20
        carElement.style.left = carPosition + "%";
    if(carPosition + "%" === winningPosition)
        gameOver = true;
        checkIfCarWon();
    }
}

function checkIfCarWon (){
    if(carOne.style.left === "100%"){
        p1Display.textContent ++
    }
    if(carTwo.style.left === "100%"){
        p2Display.textContent ++
    }
}

document.addEventListener("keypress", function(event){
    var keyPress = event.keyCode
    if(keyPress === 100){
        moveCar(carOne);
    } 
    if(keyPress === 107){
        moveCar(carTwo);
    }
})

