//Draw gameboard using array tictacbox
function drawBoard(tictacbox){
    "use strict";
    var i = 0;
    $(".box").each(function(i) {
        $(this).html(tictacbox[i]);
    });
}

function endGameCheck(tictacbox){
    "use strict";

    for(var i = 0; i < tictacbox.length; i++){
        if(tictacbox[i] !== ''){

            //Vertical condition
            if(tictacbox[i] === tictacbox[i+3] && tictacbox[i] === tictacbox[i+6]){
                gameOver(tictacbox, tictacbox[i]);
                console.log("vertical");
                return;
            }
            //Horizontal condition
            else if(i === 0 || i === 3 || i === 6){
                if(tictacbox[i] === tictacbox[i+1] && tictacbox[i] === tictacbox[i+2]){
                    console.log(tictacbox[i]);
                    console.log("horizontal");
                    gameOver(tictacbox, tictacbox[i]);
                    return;
                }
            }
            //Diagonal condition 1 (top left, bottom right)
            if(i === 0){
                if(tictacbox[i] === tictacbox[i+4] && tictacbox[i] === tictacbox[i+8]){
                    console.log(tictacbox[i]);
                    console.log("diagonal 1");
                    gameOver(tictacbox, tictacbox[i]);
                    return;
                }
            }
            //Diagonal condition 2 (top right, bottom left)
            else if(i === 2){
                if(tictacbox[i] === tictacbox[i+2] && tictacbox[i] === tictacbox[i+4]){
                    console.log(tictacbox[i]);
                    console.log("diagonal 2");
                    gameOver(tictacbox, tictacbox[i]);
                    return;
                }
            }
        }
    }
}

function gameOver(tictacbox, winner){
    "use strict";
    for(var i = 0; i < tictacbox.length; i++){
        tictacbox[i] = '';
    }
    drawBoard(tictacbox);
    $("h1").html("Player " + winner.toUpperCase() + " Wins!");
}

function isEmpty(tictacbox){
    //checks to see if empty array and if so, reverts to original heading
    for(var i = 0; i < tictacbox.length; i++){
        if(tictacbox[i] !== ''){
            return;
        }
    }

    $("h1").html("Tic-Tac-Toe");
}

$(document).ready(function(){

    var tictacbox = ['','','','','','','','',''];
    var value;
    var player = '';

    $(".box").click(function(){

        isEmpty(tictacbox);

        //Store value of div representing clicked box
        value = $(this).attr("value");
        //console.log(value);

        if(tictacbox[value] === ''){
            //Switch player
            if(player === 'x'){
                player = 'o';
            }else{
                player ='x';
            }

            tictacbox[value] = player;

            //Draw array on board
            drawBoard(tictacbox);
            endGameCheck(tictacbox);
        }


    });
});