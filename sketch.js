var weather , city, temp, min_temp, max_temp

function setup() {
  createCanvas(600,500);
  city = prompt("Enter City:")
  //console.log("City is "+city)

  getWeather(city)
}

function draw() {
  background(255,255,255); 
  textSize(20) ;
  textStyle("bold")
  //console.log(temp)
  if(!temp){
    
    text("Loading temperature of "+city + "....",200,200);
 
  }
  else{
    text("Maximum temperature at "+city+" is "+max_temp, 200,200)
    text("Minimum temperature at "+city+" is "+min_temp, 200,300)
    text("Current Temperature at "+city+" is "+temp, 200,400)
  }
  
}
async function getWeather(_city){
  
  var link = "http://api.positionstack.com/v1/forward?access_key=7990f16b1591cace53933a68b6f5d786&query="+_city
  console.log("URI is "+link)
  var response=await fetch(link);
  var responseJSON=await response.json();
  var latitude = responseJSON.data[0].latitude;
  var longitude = responseJSON.data[0].longitude;
  //console.log(responseJSON.data[0].latitude)
  //console.log(responseJSON.data[0].longitude)
  var url = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
  console.log("URI is "+url)
  var response1 = await fetch(url);
  var responseJSON1 = await response1.json()
  //console.log(responseJSON1)
  
  temp = responseJSON1.main.temp;
  //console.log(temp)
  min_temp = responseJSON1.main.temp_min;

  max_temp = responseJSON1.main.temp_max;


}