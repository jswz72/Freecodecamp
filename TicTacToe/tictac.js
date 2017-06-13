
var tictacbox = {

    currentBoard : ['','','','','','','','',''],

    //Holds 1 or 2 players
    playerMode : 1,

    //Holds current player
    playerXO : 'X',

    //True for game in progress
    gameInProgress : false,

    winningCombos : [
        //Horizontal
        [0,1,2],
        [3,4,5],
        [6,7,8],
        //Vertical
        [0,3,6],
        [1,4,7],
        [2,5,8],
        //Diagonal
        [0,4,8],
        [2,4,6]
    ],

    winString : '',

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

        $("h2").fadeOut(800);   //opacity?

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
        $("h1").html(this.winString);
        $("h2").html("Choose Mode or Click Tile To Begin");
        $("h2").fadeIn(800);
    },

    //Return true if winner, false if not
    endGameCheck : function() {

        //Returns list containing indices of either x/o
        function findIndices(player){

            //Holds found indices of x/o
            var indices = [];
            var i = -1;
            while((i = tictacbox.currentBoard.indexOf(player, i+1)) != -1){
                indices.push(i);
            }
            return indices;
        }

        var xIndices = findIndices('X');
        var oIndices = findIndices('O');
        var openIndices = findIndices('');

        console.log(openIndices);

        if(openIndices.length === 0){
            this.winString = "Draw!";
            return true;
        }

        //console.log(xIndices);
        //console.log(oIndices);
        //Boolean, false if winning condition not met
        var xendGame;
        var oendGame;

        //Compare all winningCombos to the xIndices
        for(var i = 0; i < this.winningCombos.length; i++){
            xendGame = true;
            for(var j = 0; j < 3; j++){
                //If current winning combo not found --> false
                if(xIndices.indexOf(this.winningCombos[i][j]) === -1){
                    xendGame = false;
                }
            }
            if(xendGame){
                this.winString = "Player X Wins!";
                return true;
            }
        }

        //Compare all winningCombos to the oIndices
        for(i = 0; i < this.winningCombos.length; i++){
            oendGame = true;
            for(j = 0; j < 3; j++){
                //If current winning combo not found --> false
                if(oIndices.indexOf(this.winningCombos[i][j]) === -1){
                    oendGame = false;
                }
            }
            if(oendGame){
                this.winString = "Player O Wins!"
                return true;
            }
        }
        console.log("no win");
    },

    //Adds 10 if player wins and subtracts if opposite player wins
    score : function(player) {

        if (this.endGameCheck()) {
            if (player.assignment === this.playerXO) {
                player.score += 10;
            }
            else if (player.assignment !== this.playerXO) {
                player.score -= 10;
            }
        }
    },

    findOpenBoxes : function(){

        var openIndices= [];
        var i = -1;
        while((i = tictacbox.currentBoard.indexOf('', i+1)) != -1){
            openIndices.push(i);
        }

        return openIndices;
        //.....
    }
};

var computer = {

    //X or O depending on player choice
    assignment : '',

    score : 0
}

var human = {

    assignment : '',

    score : 0
}

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
            console.log("Failed to recognize playerMode");
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