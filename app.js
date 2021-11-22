const diceScore = document.getElementById("score");
let total = 0;

//click button:
document.querySelector(".btn").addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random()*6)+1;
            
    let diceImageSource = "images/dice" + randomNumber + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", diceImageSource);
      
    total += randomNumber;

    diceScore.innerHTML = `Your Score: ${total}`;

    //check scores and outcome:
    if (randomNumber == 1) {
        diceScore.innerHTML = "You lost!<br>Refresh to replay";
        document.getElementsByClassName("btn").disabled = true;
    } 

    else if (total == 21) {
        diceScore.innerHTML = "You win!<br>Refresh to replay!";
        document.getElementsByClassName("btn").disabled = true;
    }

    else if (total > 21) {
        diceScore.innerHTML = "You win!<br>Refresh to replay!";
        document.getElementsByClassName("btn").disabled = true;
    }
});

