var Wins = 0;
var Losses = 0;
var totalClicks = 0;
var userTotal; 
var targetNum; 
var numClicks; 






function startGame () {
    targetNum =  Math.floor(Math.random() * 120) + 19;
    numClicks = 0;
    $("#Target-Number").html("Number to Guess: " + targetNum);

    userTotal = 0;
    $("#User-Number").html("Total Score: ");





    
    
    
    

    document.getElementById("amber").value= Math.floor(Math.random() * 12) + 1;
    document.getElementById("ruby").value= Math.floor(Math.random() * 12) + 1;
    document.getElementById("gemstone").value= Math.floor(Math.random() * 12) + 1;
    document.getElementById("sapphire").value= Math.floor(Math.random() * 12) + 1;


    
}


function reset () {
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $("#Target-Number").text(Random);
    num1= Math.floor(Math.random()*12+1);
    num2= Math.floor(Math.random()*12+1);
    num3= Math.floor(Math.random()*12+1);
    num4= Math.floor(Math.random()*12+1);
    userTotal= 0;
    $("#User-Number").html(userTotal);
} 



$(document).ready(function() {
    

    startGame();

    //Trigger event once button clicked
    $(".btn").click(function() {

        //Get value and convert to int
        var clickedVal = $(this).attr("value");
        var valNum = parseInt(clickedVal);

        numClicks++;
        totalClicks++;
        $("#totalClicks").html("Total Clicks: " + totalClicks);
        $("#gameClicks").html("Game Clicks: " + numClicks);

        userTotal = userTotal + valNum;
        $("#User-Number").html("Total Score: " + userTotal);


        //Create conditional statements to update game status

            //Add one to win or loss
            
            
            
            if (userTotal===targetNum) {
                Wins++;
                $("#Wins").html("Wins:" + Wins);
                startGame();
                
            

            } else if (userTotal>targetNum) {
                Losses++;
                $("#Losses").html("Losses:" + Losses);
                startGame();
            }
    }

)

});