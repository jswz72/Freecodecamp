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
      //console.log("b");
      b = $("#input").html();
      $("#history").html(a + operatorVal + b);
      console.log(a + operatorVal + b);
      $("#input").html(math.eval(a + operatorVal + b));
      answer = true;
      opScan = false;

    }
    //if operator pressed, make sure no other operator stored until cleared by '='
    else if (btnVal === '/' || btnVal === '*' || btnVal === '-' || btnVal === '+') {
      
      if(opScan){
        a = a.append($("#input").html());
        //console.log("asdf");
      }else{
        a = $("#history").html();
        //console.log("qwerty");
      }
      operatorVal = btnVal;
      //console.log(operatorVal);
      //console.log($("#history").html());
      $("#input").html(operatorVal);
      $("#history").append(operatorVal);
      opScan = true;

    }
    //ac pushed --> clear input and history, reset operator
    else if (btnVal === 'ac') {
      $("#input").html('');
      $("#history").html('');
      
    }
    //ce pushed --> clear input, reset operator
    else if (btnVal === 'ce') {
      console.log("f");
      $("#input").html('  ');

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
