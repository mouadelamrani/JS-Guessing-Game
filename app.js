var randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);

var attemptsNum = 10;
console.log("attempts is " + attemptsNum);

var attemptsNumP = document.getElementById("attempts").innerHTML = attemptsNum;

function play() {
    var userInput = parseInt( document.getElementById("userInput").value);
    console.log("user input is " + userInput);

    var numIsBigger = "The number is bigger :/";
    var numIsSmaller = "The number is smaller :/";

    var winMessage = "Congrats you won in";
    var loseMessage = "You lost :/";

    // if (userInput < 0 || userInput > 100){
    //     console.log("Value should be between 0 - 100");
    //     alert("Value should be between 0 - 100");
    // }

// if (userInput === undefined){
if (isNaN(userInput)){
    // If the field is empty
    alert("Enter a valid number");
} else {
        if(randomNum < userInput){
            if (userInput > 100){
                // Value Should be less than 100
                console.log("Value should be less than 100");
                alert("Value should be less than 100");
            } else{
                alert (numIsBigger)
                attemptsNumP = document.getElementById("attempts").innerHTML = attemptsNum-=1;
                console.log("bigger == attempts is " + attemptsNum);
            }
        }
        
        if(randomNum > userInput ){
            if (userInput < 0 ){
                // Value Should be more than 0
                console.log("Value should be more than 0");
                alert("Value should be more than 0");
            } else{
                alert (numIsSmaller)
                attemptsNumP = document.getElementById("attempts").innerHTML = attemptsNum-=1;
                console.log("smaller == attempts is " + attemptsNum);
            }
        }

        if(userInput === randomNum){
            console.log("Won == attempts is " + attemptsNum);
            if(attemptsNum >= 8){
                // if achieved in 2 steps
                alert ("you are genius, you guessed it in " + attemptsNum + " attempts")                        
            } else if (attemptsNum <= 7){
                alert (winMessage + " " + attemptsNum + " attempts")
            }
        }

        if (attemptsNum <= 0){
            alert(loseMessage);
            location.reload();
            // var randomNum = Math.floor(Math.random() * 100);
            // console.log(randomNum);

            // var attemptsNum = 10;
            //  console.log("attempts is " + attemptsNum);
        }                  
}
 //Else
}