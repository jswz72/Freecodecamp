$(document).ready(function() {
  // console.log("ready");
  var afterOp = false;
  //console.log("button success");
  var expression; //collect button input
  var a;
  var operatorVal;
  var operatorArr = ['/', '*', '-', '+']
  var opScan = false;
  var b;
  var answer = false; //Flag: True if answer to calculation displayed on screen

  $("button").click(function() {

    var btnVal = $(this).attr('value'); //html value of button pressed

    //After answer displayed, clear out window before continuing
    if (answer) {
      $("#history").html('');
      $("#input").html('');
      answer = false;
    }

    //if equals button was pushed, move input--> history and calculate
    if (btnVal === '=') {
      
      $("#input").html(math.eval($("#history").html()));
      answer = true;
      opScan = false;

    }
    //if operator pressed, make sure no other operator stored until cleared by '='
    else if (btnVal === '/' || btnVal === '*' || btnVal === '-' || btnVal === '+') {
      
      operatorVal = btnVal;
      $("#input").html(operatorVal);
      $("#history").append(operatorVal);

    }
    //ac pushed --> clear input and history, reset operator
    else if (btnVal === 'ac') {
      $("#input").html('');
      $("#history").html('');
      
    }
    //ce pushed --> clear input, reset operator
    else if (btnVal === 'ce') {
      $("#input").html('__');
      
      var historyArr = $("#history").html().split('');
      //console.log(historyArr.length);
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
      //console.log(historyArr);
      historyArr = historyArr.join('');
      console.log(historyArr);
      $("#history").html(historyArr);
      
    } else if (afterOp === true) {
      $("#history").append(operatorVal);
      $("#input").html(btnVal);
      
      afterOp = false;
    } else {
      $("#input").html('');
      $("#input").html(btnVal);
      $("#history").append(btnVal);
    }
  });

});
