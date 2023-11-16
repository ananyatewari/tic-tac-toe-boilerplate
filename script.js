const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const boxElement = document.querySelectorAll(".box");
var click = 0;
var Xattempts = []
var Oattempts = []

let wonTheGame = 0

boxElement.forEach( (box) => {
    box.addEventListener ("click", function(event){
        var i = event.target.getAttribute("Id");
        // console.log(i);
        var p = document.createElement("p");
        // p.innerHTML = "x";
        p.setAttribute("id", "text")
        boxElement[i].append(p);

        if (click % 2 == 0){
            p.innerHTML = "X";
            Xattempts.push(parseInt(i));
            result(Xattempts,"X")
        }
        else {
            p.innerHTML = "O";
            Oattempts.push(parseInt(i));
            result(Oattempts,"O")
        }
        click++;
        console.log(click)
        if (click == 9 && wonTheGame == 0){
            gameResult.style.visibility = "visible"
            message.innerHTML = "It's a tie"
        }
    })
} )


let gameResult = document.getElementById("result")
let message = document.getElementById("message")

function result(attempts,winner){

    for(let i = 0; i < winningCombinations.length; i++){

        var areAllElementsPresent = winningCombinations[i].every(element => attempts.includes(element));
        if(areAllElementsPresent){
            gameResult.style.visibility = "inherit"
            message.innerHTML = "'" + winner + "' " + "Won the Game !"
            wonTheGame = 1;
            break;
        }
    }
}

const playAgain = document.getElementById("button")
playAgain.addEventListener ("click", () => {
    window.location.href = "./index.html"
})
