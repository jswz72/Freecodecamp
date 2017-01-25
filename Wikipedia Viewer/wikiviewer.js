$(document).ready(function(){
  
  $("#search").click(function(){
    //Gets search input
    var searchTerm = $("#search-term").val();
    var searchURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchTerm + "&callback=?";
    
    
    $.ajax({
      type:"GET",
      url: searchURL,
      async:false,
      dataType:"json",
      success: function(data){
        //console.log(data[1][0]);
        //console.log(data[2][0]);
        //console.log(data[3][0]);
        console.log(data[1].length);
        
        if(data[1].length < 1){
          $("#output").html("<li> No entries found </li>");
        }
        else{
           for(var i = 0; i < data[1].length; i ++){
          if(i == 1){
            $("#output").html("<div class = 'result'><a href='" + data[3][0] + "' target = 'blank'><li>" + data[1][0] + "</li></a><li >" + data[2][0] + "</li></div><hr>");
          }
          else{
           $("#output").append("<div class = 'result'</div> <a href='" + data[3][i] + "' target = 'blank'><li>" + data[1][i] + "</li></a><li >" + data[2][i] + "</li></div><hr>"); 
          }
        }
        }
       
        $("#search-term").val("");
      },
      error: function(errorMessage){
        alert("Error");
      }
      
    });
  
  });
  
  $("#search-term").keypress(function(enter){
      
      if(enter.which == 13){
        $("#search").click();
      }
    
  });
  
});
