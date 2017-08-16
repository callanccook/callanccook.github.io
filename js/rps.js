var compare = function() {
        var userChoice = prompt("Do you choose rock, paper or scissors?");
        while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
          userChoice = prompt("FOLLOW DIRECTIONS! Choose rock, paper, or scissors, please.")
         }
        var computerChoice = Math.random();
        if (computerChoice <= 0.33) {
          computerChoice = "rock";
        } else if (computerChoice <= 0.66) {
          computerChoice = "paper";
        } else {
          computerChoice = "scissors";
        }
        if (userChoice  === computerChoice) {
            window.alert("The result is a tie!");
        } else if(userChoice === "rock") {
            if (computerChoice === "scissors") {
                alert("Rock wins!");
            } else {
                alert("Paper wins");
            }
        } else if(userChoice === "paper") {
            if(computerChoice === "rock") {
                alert("paper wins!");
            } else {
                alert("scissors wins!");
            }
        } else if(userChoice === "scissors") {
            if (computerChoice === "rock") {
                alert("Rock wins");
            } else {
                alert("scissors wins");
            }
        }
    };