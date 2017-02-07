$(document).ready(function() {
  var afterOp = false;
  var operatorArr = ['/', '*', '-', '+']
  var answer = false; //Flag: True if answer to calculation displayed on screen

  $("button").click(function() {

    var btnVal = $(this).attr('value'); //html value of button pressed

    //After answer displayed, clear out window before continuing
    if (answer) {
      $("#history").html('');
      $("#input").html('');
      answer = false;
    }

    //Calculate if '=' pushed
    if (btnVal === '=') {
      
      if(math.eval($("#history").html()).toString().length > 18){
        $("#input").html("Digit Limit Met :(");
    }else{
      $("#input").html(math.eval($("#history").html()));
    }
      answer = true;
      afterOp = false;

    }
    //ac pushed --> clear input and history
    else if (btnVal === 'ac') {
      $("#input").html('');
      $("#history").html('');
      afterOp = false;
      
    }
    //ce pushed --> clear input & last operand
    else if (btnVal === 'ce') {
      $("#input").html('__');
      
      var historyArr = $("#history").html().split('');
      for(var i = historyArr.length; i >= 0; i--){
        for(var j = 0; j < operatorArr.length; j++){
          if(historyArr[i] === operatorArr[j]){
            historyArr = historyArr.slice(0,i+1);
            var end = true;
            break;
          }
          }
        if(end){
          i = -1;
        }
      }
      
      historyArr = historyArr.join('');
      console.log(historyArr);
      $("#history").html(historyArr);
      afterOp = false;
      
      //All normal button presses
    }else if(btnVal === '/' || btnVal === '*' || btnVal === '+' || btnVal === '-' || btnVal === '.'){
        if(!afterOp){
           $("#input").html('');
           $("#input").html(btnVal);
           $("#history").append(btnVal);
          afterOp = true;
        }
      } else {
      $("#input").html('');
      $("#input").html(btnVal);
      $("#history").append(btnVal);
      afterOp = false;
    }
  });

});
