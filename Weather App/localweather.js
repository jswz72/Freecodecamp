function convertTimestamp(timestamp) {
  var date = new Date(timestamp * 1000);	// Convert the passed timestamp to milliseconds
	var hours = date.getHours();
  var h = hours;
  var min = ('0' + date.getMinutes()).slice(-2);		// Add leading 0.
	var ampm = 'AM';
	var localTime = 0;
			
	if (hours > 12) {
		h = hours - 12;
		ampm = 'PM';
	} else if (hours === 12) {
		h = 12;
		ampm = 'PM';
	} else if (hours == 0) {
		h = 12;
	}
	
	localTime = h + ':' + min + ' ' + ampm;
		
	return localTime;
}

$(document).ready(function(){
  console.log("start success");
  var lat;
  var long;
  
  $.getJSON("http://ip-api.com/json",function(coordsData){
    //Get user's lat and long
    console.log("coordsAPI success");
    lat = coordsData.lat;   
    long = coordsData.lon;
    //Unique API address for user's lat/long
    var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=92c40985b0db5734eab07f2f11f23c34";
 
    //JSON call for Open Weather API
    $.getJSON(api,function(weatherData){
      console.log("weatherDataAPI success")
      //Vars holding weather info
      var weatherType = weatherData.weather[0].description;
      var ktemp = weatherData.main.temp;
      var ctemp = (ktemp - 273.15).toFixed(2);
      var ftemp = ((ktemp*(9/5)) - 459.67).toFixed(2);
      var switchTemp = true;
      var windSpeed = weatherData.wind.speed;
      var USwindSpeed = windSpeed * 2.237;
      //Make 1 decimal place in both vars
      windSpeed = windSpeed.toFixed(1);
      USwindSpeed = USwindSpeed.toFixed(1);
      var switchWind = true;
      var city = weatherData.name;
      var icon = weatherData.weather[0].icon;
      var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
      var sunrise = weatherData.sys.sunrise;
      var sunset = weatherData.sys.sunset;
      
      sunrise = convertTimestamp(sunrise);
      sunset = convertTimestamp(sunset);
 
      
      console.log(city);
      //console.log(weatherType);
      //console.log(ktemp);
      //console.log(ctemp);
      //console.log(ftemp);
      //console.log(windSpeed);
      
      $("#city").html(city);
      $("#weather-type").html(weatherType);
      $("#icon").html("<image src ='" + iconUrl + "' width = '100px'>");
      $("#sunrise").html("Sunrise: " + sunrise)
      $("#sunset").html("Sunset: " + sunset)
      
      $("#temp").html(ftemp + "<span id = 'highlight'> °F</span>");
      //Switch btwn fahrenheit and celsius at button click
      $("#temp").on("click",function(){
        
        if(switchTemp){
          $("#temp").html(ctemp + "<span id = 'highlight'> °C</span>");
          switchTemp = false;
        }
        else{
          $("#temp").html(ftemp  + "<span id = 'highlight'> °F</span>");
          switchTemp = true;
        }
  
      });
      $("#wind-speed").html(windSpeed + "<span id = 'highlight2'> m/s</span>");
      $("#wind-speed").on("click",function(){
        
        if(switchWind){
          $("#wind-speed").html(USwindSpeed + "<span id = 'highlight2'> mph</span>");
          switchWind = false;
        }
        else{
          $("#wind-speed").html(windSpeed  + "<span id = 'highlight2'> m/s</span>");
          switchWind = true;
        }
  
      });
        
  });
  });
 
});
