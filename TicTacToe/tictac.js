$(document).ready(function(){
  
  var tictacbox = ['','','','','','','','','']
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
    var i = 0;
    $(".box").each(function(i) {
      $(this).html(tictacbox[i]);
    });
  });
});
