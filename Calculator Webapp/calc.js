//Draw gameboard using array tictacbox
function drawBoard(tictacbox){
  var i = 0;
    $(".box").each(function(i) {
      $(this).html(tictacbox[i]);
    });
  return;
}

function gameOver(tictacbox){
  tictacbox = ['', '', '', '', '', '', '', '', ''];
  drawBoard(tictacbox);
  $("h1").html("YOU LOSE");
}

$(document).ready(function(){
  
  var tictacbox = ['','','','','','','','',''];
  var value;
  var player = '';
  
  $(".box").click(function(){
    if(player === 'x'){
      player = 'o';
    }else{
      player ='x';
    }
    value = $(this).attr("value");
    //console.log(value);
    tictacbox[value] = player;
    //Draw array on board
    drawBoard(tictacbox);
    
    //Game ending conditions
     for(var i = 0; i < tictacbox.length; i++){
       if(tictacbox[i] !== ''){
         //Vertical condition
         if(tictacbox[i] === tictacbox[i+3] && tictacbox[i] === tictacbox[i+6]){
           gameOver(tictacbox);
         }
         //Horizontal condition
         if(i == 0 || i == 3 || i == 6){
           if(tictacbox[i] === tictacbox[i+1] && tictacbox[i] === tictacbox[i+2]){
             gameOver(tictacbox);
           }
         }
         //Diagonal condition 1 (top left)
         if(i == 0){
           if(tictacbox[i] === tictacbox[i+4] && tictacbox[i] === tictacbox[i+8]){
             gameOver(tictacbox);
           }
         }
         //Diagonal condition 2 (top right)
         if(i == 2){
           if(tictacbox[i] === tictacbox[i+2] && tictacbox[i] === tictacbox[i+4]){
             gameOver(tictacbox);
           }
         }
       }
     }
  });
});
