/* ==========================================================================
   Dipeshpuri Goswami - 300984229
   custom Javascript
   ========================================================================== */
 var soundID = "chime";

      function loadSound () {
        createjs.Sound.registerSound("sounds/chime.mp3", soundID);
      }

      function playSound () {
        createjs.Sound.play(soundID);
      }
   
var userBalance = 1000;
var playerBet = 10;
var jackpot = 5000;
var randomNumber = 0;
var no1, no2, no3, no4, no5;
var reelImages = ["images/cherry.png", "images/orange.png", "images/lemon.png", "images/blueberry.png", "images/watermelan.png"];
var displayReelNo = [];
var cnt1 = cnt2 = cnt3 = cnt4 = cnt5 = 0;
var turn = 0;
var winNumber = 0;
var lossNumber = 0;
var Jackpot = 0;
$('#userBalance').text(userBalance);

// Instruction 
alert("Hello Guest,\nWelcome to Gossi Casino,\nLearn Some Rules before Trying Luck, \n\n 1.You will get $1000 Balance. \n\n 2.You can not Play without betting. \n\n 3.If you win Jackpot then you will get $5000.");

// Spin Function
$("#btnSpin").click(function() {
	//playSound();
	createjs.Sound.play('song1',createjs.Sound.INTERRUPT_NONE,1 * 1000);
	playerBet = document.getElementById('userBet').value;
	playerBet = parseInt(playerBet);
    if (userBalance !== 0 && userBalance >= playerBet ) {
        reelPlay();
        declearResult();
        userStates();
        turn++;
    } else {
        if (confirm("Hello Guest! You are Running Out Of Balance")) {
            resetAll();
            userStates();
        }
        //alert("Hello Guest! You are Running Out Of Balance");
    }

});

// Reset Function
$("#btnReset").click(function() {
	resetAll();
    userStates();
})

// Quit Function
$("#btnQuit").click(function() {
	 window.open('','_parent','');
window.close();
})
function reelPlay() {


    no1 = random_ReelImage();
    no2 = random_ReelImage();
    no3 = random_ReelImage();
    no4 = random_ReelImage();
    no5 = random_ReelImage();

    displayReelNo.push(no1);
    displayReelNo.push(no2);
    displayReelNo.push(no3);
    displayReelNo.push(no4);
    displayReelNo.push(no5);

    for (var i = 0; i < displayReelNo.length; i++) {
        console.log(displayReelNo[i]);
    }
    document.getElementById('userBetLocked').Text
    document.getElementById('img1').src = reelImages[no1 - 1];
    document.getElementById('img2').src = reelImages[no2 - 1];
    document.getElementById('img3').src = reelImages[no3 - 1];
    document.getElementById('img4').src = reelImages[no4 - 1];
    document.getElementById('img5').src = reelImages[no5 - 1];
    console.log(checkForDuplicates(displayReelNo));
}
function random_ReelImage() {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
    //reelImages[Math.floor(Math.random()*reelImages.length)];    
}
function checkForDuplicates(displayReelNo) {
    var x;
    for (var i = 0; i < displayReelNo.length; i++) {
        x = displayReelNo[i];
        for (var j = i + 1; j < displayReelNo.length; j++) {
            if (x == displayReelNo[j]) {

                if (1 == displayReelNo[j]) {
                    cnt1++;
                } else if (2 == displayReelNo[j]) {
                    cnt2++;
                } else if (3 == displayReelNo[j]) {
                    cnt3++;
                } else if (4 == displayReelNo[j]) {
                    cnt4++;
                } else if (5 == displayReelNo[j]) {
                    cnt5++;
                }
                //return 'at least one duplicate found';
            }
        }
    }
    //console.log("1 -" + cnt1);
    //console.log("2 -" + cnt2);
    //console.log("3 -" + cnt3);
    //console.log("4 -" + cnt4);
    //console.log("5 -" + cnt5);
    return 'no Identical found';
}
function declearResult() {
    if (cnt1 == 3 || cnt2 == 3 || cnt3 == 3 || cnt4 == 3 || cnt5 == 3) {
        $("#userResult").text("Congratulations Guest you won $" + playerBet);
        this.userBalance = userBalance + playerBet;
        winNumber++;
    } else if (cnt1 == 6 || cnt2 == 6 || cnt3 == 6 || cnt4 == 6 || cnt5 == 6) {
        $("#userResult").text("Wow..! Guest you won" + jackpot);
        this.userBalance = userBalance + jackpot;
        winNumber++;
    } else if (cnt1 == 10 || cnt2 == 10 || cnt3 == 10 || cnt4 == 10 || cnt5 == 10) {
        $("#userResult").text("Unbelievable Guest you won $10,000 ");
        this.userBalance = userBalance + 10000;
        winNumber++;
    } else {
        $("#userResult").text("You Lose: $" + playerBet);
        this.userBalance = userBalance - playerBet;
        lossNumber++;
    }
    reset();
}
function reset() {
    cnt1 = cnt2 = cnt3 = cnt4 = cnt5 = 0;
    no1 = no2 = no3 = no4 = no5 = 0;
    displayReelNo.length = 0;
}
function resetAll() {
    userBalance = 1000;
    playerBet = 0;
    Jackpot = 5000;
    turn = 0;
    winNumber = 0;
    lossNumber = 0;
	
}
function userStates() {
    $("#userTurn").text("Turn: " + turn);
    $("#userWinning").text("Wins: " + winNumber);
    $("#userLose").text("Losses: " + lossNumber);
    $('#userBetLocked').text(playerBet);
    $('#userBalance').text(userBalance);
}