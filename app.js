var resetButton = document.querySelector(".reset");
var p1Display = document.querySelector(".p1Display");
var p2Display = document.querySelector(".p2Display");
var p1Score = 0;
var p2Score = 0;
var inputNum = document.querySelector("input");
var winScore = document.querySelector(".winningScore")
var carOne = document.querySelector(".one")
var carTwo = document.querySelector(".two")
var winningPosition = "100%"
var winningScore = 0;


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

function resetAuto(){
    carOne.style.left = "0%"
    carTwo.style.left = "0%"
}


function moveCar(carElement){
    if(carElement.style.left !== winningPosition){
        var carPosition = parseInt(carElement.style.left);
        carPosition += 5
        carElement.style.left = carPosition + "%";
    }
    checkIfCarWon();
    checkTotalWin();
}

function checkIfCarWon (){
    if(carOne.style.left === "100%"){
        p1Display.textContent ++;
        resetAuto()
    }
    if(carTwo.style.left === "100%"){
        p2Display.textContent ++;       
        resetAuto()
    }
}

function checkTotalWin (){
    var updatedScore1 = document.querySelector(".p1Display").innerHTML;
    var updatedScore2 = document.querySelector(".p2Display").innerHTML;
    if(parseInt(updatedScore1) === winningScore){
        alert("Player One won");
    } 
    if(parseInt(updatedScore2) === winningScore){
        alert("player Two won");
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


