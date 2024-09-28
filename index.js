var buttonColors = ["red", "blue", "green", "yellow"]
gamePattern= []
userClickedPattern = []
var level = 0;

$(document).on("keydown", function (){
    if(level==0)
    {
        nextSequence();
    }
})
var click = 0;


function playSound(named)
{
    var audio = new Audio('/'+named+'.mp3');
    audio.play()
}


function nextSequence()
{
    $("h1").text("Level "+level);
    userClickedPattern = []
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    $("."+randomChosenColor).addClass("hidden");
    playSound(randomChosenColor)
    setTimeout(function() {$("."+randomChosenColor).removeClass("hidden")}, 500)
    gamePattern.push(randomChosenColor);

}

$("button").on("click", function (){console.log(this);
    if(gamePattern[0]==undefined)
    {
        return;
    }
    click++
    userClickedPattern.push(this.id);
    playSound(this.id);
    $(this).addClass("pressed");
    var x = this
    setTimeout(function(){$(x).removeClass("pressed")},100);
    checkAnswer(click)
})

playSound(named)
{
    var audio = new Audio(''+named+'.mp3');
    audio.play()
}

function checkAnswer(currentlevel)
{
    if(userClickedPattern[currentlevel-1]==gamePattern[gamePattern.length - 1])
    {
        console.log("correct");
        setTimeout(nextSequence,1000);
        click = 0;
    }
    else {
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(function (){$("body").removeClass("game-over"),100});
        playSound("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        gameOn=0;
        level = 0;
        click=0;
        gamePattern=[]
        userClickedPattern=[]
    }
}
