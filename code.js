function playCraps() {
    //This is a one line comment
    /*this is the function to play craps in game.html
    rules for craps
    Roll 2 dice
        add up to 7 or 11, you lose
        If they are doubles and even, you win!
        Everything else is a push
        Michael Mattos
        30May2024
    */
    console.log("playCraps() started");
    //roll the dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;

    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;
    //look for loss
    if (sum == 7 || sum == 11) {
        console.log("lose")
        document.getElementById("gameRes").innerHTML = "you lost to Handsome Jack"; 
    } else if(die1 == die2 & die1 % 2 == 0){ //look for win 2%2 = 0
        console.log("Win") 
        document.getElementById("gameRes").innerHTML = "you beat Handsome Jack, push your luck some more to win big"; 
    
         
    }else{ //everything else is push
        console.log("Tie") 
    document.getElementById("gameRes").innerHTML = "you did not win or lose, but who wins against Jack in the end?";}

    
     

    


}