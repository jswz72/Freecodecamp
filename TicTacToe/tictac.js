
var tictacbox = {

    currentBoard : ['','','','','','','','',''],

    //Holds 1 or 2 players
    playerMode : 1,

    //Holds x or o for 2-player mode
    playerXO : 'X',

    //True for game in progress
    gameInProgress : false,

    winningCombos : [
        //Horizontal
        [0,1,2],
        [3,4,5],
        [4,5,6],
        //Vertical
        [0,3,5],
        [1,4,7],
        [2,5,8],
        //Diagonal
        [0,4,8],
        [2,4,6]
    ],

    drawBoard : function(){
        $(".box").each(function(i) {
            $(this).html(tictacbox.currentBoard[i]);
        });
    },

    //Resets board (to '') and title
    resetGame : function(){
        for(var i = 0; i < tictacbox.currentBoard.length; i++){
            tictacbox.currentBoard[i] = '';
            this.drawBoard();

        }
        if(this.playerMode === 1){
            $("h1").html("Tic-Tac-Toe vs Computer");
        }
        else if(this.playerMode === 2){
            $("h1").html("Tic-Tac-Toe vs Friend");
        }
        else{
            $("h1").html("Tic-Tac-Toe");
        }
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
        $("h1").html("Player " + this.playerXO +  " Wins!");
    },

    //Return true if winner, false if not
    endGameCheck : function() {

        //Returns list containing indices of either x/o
        function findIndices(xo){

            //Holds found indices of x/o
            var indices = [];
            var i = -1;
            while((i = tictacbox.currentBoard.indexOf(xo, i+1)) != -1){
                indices.push(i);
            }
            return indices;
        }

        var xIndices = findIndices('X');
        var oIndices = findIndices('O');
        var endGame = false;

        //Compare all winningCombos to the x/oIndices

    }
};

var computer;

var human;

$(document).ready(function(){

    var value;
    $("#tictactoe").hide();
    $(".box").click(function(){

        value = $(this).attr("value");

        if(tictacbox.endGameCheck()){
            tictacbox.resetGame();
        }
        //ensure no boxes overwritten
        if(tictacbox.currentBoard[value] === ''){

            //single-player
            if(tictacbox.playerMode === 1){
                //player pick box
                //endgameCheck
                //computer pick box
                //endgameCheck
            }

            //two-player
            else if (tictacbox.playerMode === 2){

                //Switch players
                if(tictacbox.playerXO === 'X'){
                    tictacbox.playerXO = 'O';
                }
                else if(tictacbox.playerXO === 'O'){
                    tictacbox.playerXO = 'X';
                }

                //Place x/o on board
                tictacbox.currentBoard[value] = tictacbox.playerXO;
                tictacbox.drawBoard();

                if(tictacbox.endGameCheck()){
                    tictacbox.gameOver();
                    tictacbox.gameInProgress = false;
                }
            }
        }else{
            console.log("Failed to recognize gametype");
        }

    });

    $("#1-player, #2-player").click(function(){

        /*
        Button choice needed to start game
        When game in progress, clicking on button of same game type will do nothing,
        clicking button of opposite game type will reset game to opposite game type
         */
        if(this.id === "1-player"){
            if(tictacbox.gameInProgress === true && tictacbox.playerMode === 2){
                tictacbox.resetGame();
            }
            tictacbox.playerMode = 1;
            tictacbox.gameInProgress = true;
            $("h1").html("Tic-Tac-Toe vs Computer");
            $("h2").fadeOut(400);
            $("#tictactoe").delay(450).fadeIn(400);
        }
        else if(this.id === "2-player"){
            if(tictacbox.gameInProgress === true && tictacbox.playerMode === 1){
                tictacbox.resetGame();
            }
            tictacbox.resetGame();
            tictacbox.playerMode = 2;
            tictacbox.gameInProgress = true;
            $("h1").html("Tic-Tac-Toe vs Friend");
            $("button").slideDown();
            $("h2").fadeOut(400);
            $("#tictactoe").delay(450).fadeIn(800);

        }
    });

});