
var tictacbox = {

    currentBoard : ['','','','','','','','',''],

    //Holds 1 or 2 players
    playerMode : 1,

    //True for game in progress
    gameInProgress : false,

    drawBoard : function(){
        $(".box").each(function(i) {
            $(this).html(currentBoard[i]);
        });
    },

    //Resets board (to '') and title
    resetGame : function(){
        for(var i = 0; i < tictacbox.length; i++){
            tictacbox[i] = '';
        }
        $("h1").html("Tic-Tac-Toe");
    },

    //Returns true if board empty
    isEmpty : function(){
        for(var i = 0; i < tictacbox.length; i++){
            if(tictacbox[i] !== ''){
                return false;
            }
        }
        return true;
    },

    //Reset title with winner
    gameOver : function(){
        $("h1").html("Player " + winner.toUpperCase() + " Wins!");
    },

    //Return true if winner, false if not
    endGameCheck : function(){
        for(var i = 0; i < tictacbox.length; i++){
            if(tictacbox[i] !== ''){

                //Vertical condition
                if(tictacbox[i] === tictacbox[i+3] && tictacbox[i] === tictacbox[i+6]){
                    console.log("vertical");
                    return true;
                }
                //Horizontal condition
                else if(i === 0 || i === 3 || i === 6){
                    if(tictacbox[i] === tictacbox[i+1] && tictacbox[i] === tictacbox[i+2]){
                        console.log(tictacbox[i]);
                        console.log("horizontal");
                        return true;
                    }
                }
                //Diagonal condition 1 (top left, bottom right)
                if(i === 0){
                    if(tictacbox[i] === tictacbox[i+4] && tictacbox[i] === tictacbox[i+8]){
                        console.log(tictacbox[i]);
                        console.log("diagonal 1");
                        return true;
                    }
                }
                //Diagonal condition 2 (top right, bottom left)
                else if(i === 2){
                    if(tictacbox[i] === tictacbox[i+2] && tictacbox[i] === tictacbox[i+4]){
                        console.log(tictacbox[i]);
                        console.log("diagonal 2");
                        return true;
                    }
                }
            }
            return false;
        }
    }
};

var computer;

var human;


$(document).ready(function(){

    var value;

    $(".box").click(function(){

        value = $(this).attr("value");

        //ensure no boxes overwritten
        if(tictacbox[value] === ''){
            //single-player
            if(tictacbox.playerMode === 1){
                //player pick box
                //endgameCheck
                //computer pick box
                //endgameCheck
            }

            //two-player
            else if (tictacbox.playerMode === 2){

            }
        }

    });

    $("#1-player, #2-player").click(function(){

        if(tictacbox.gameInProgress === true){
            tictacbox.resetGame();
        }

        if(this.id === "1-player"){
            tictacbox.playerMode = 1;
            $("h1").html("Tic-Tac-Toe vs Computer");
        }
        else if(this.id === "2-player"){
            tictacbox.playerMode = 2;
            $("h1").html("2 Player Tic-Tac-Toe vs Friend");
        }
    });

});