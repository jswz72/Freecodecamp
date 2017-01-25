$(document).ready(function(){
 // console.log("ready");
  var afterOp = false;
  //console.log("button success");
  var expression;   //collect button input
  var a;
  var operatorVal;
  var operatorArr = ['/','*','-','+']
  var opScan = true;
  var b;
  var answer = false;
  
  $("button").click(function(){
    
    var btnVal = $(this).attr('value');   //html value of button pressed
    // console.log("a");
    // console.log(btnVal);
    
    if(answer == true){
      $("#history").html('');
      $("#input").html('');
      answer = false;
    }
    
    //if equals button was pushed, move input--> history and calculate
    if(btnVal === '='){
      console.log("b");
      b = $("#input").html();
      $("#history").html(a + operatorVal + b);
      console.log(a + operatorVal + b);
      $("#input").html(math.eval(a + operatorVal + b));
      answer = true;
     
    }
    //if operator pressed, make sure no other operator stored until cleared by '='
    else if(btnVal === '/' || btnVal === '*' || btnVal === '-' || btnVal === '+'){
      // console.log("c");
      // console.log($("#input").html().indexOf(btnVal));
      for(var i = 0; i < operatorArr.length; i++){
        if($("#input").html().indexOf(operatorArr[i]) != -1){
          opScan = false;
        }
      }
      
      if(opScan){
       console.log("d");
        a = $("#input").html();   //store first operand in 'a'
        $("#input").html(btnVal);
        $("#history").html(a);
        
        operatorVal = btnVal;
        afterOp = true;
        opScan = true;
      }
    }
    //ac pushed --> clear input and history, reset operator
    else if(btnVal === 'ac'){
      console.log("e");
      $("#input").html(' ');
      $("#history").html(' ');
    }
    //ce pushed --> clear input, reset operator
    else if(btnVal === 'ce'){
      console.log("f");
      $("#input").html('  ');
      
    }
    else if(afterOp === true){
      console.log("g");
      $("#history").append(operatorVal);
      $("#input").html(btnVal);
      afterOp = false;
      }    
     else {
       console.log("h");
         $("#input").append(btnVal);
      }
  });
  
});
