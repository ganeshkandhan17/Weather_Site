
var apikey=""
var url="https://api.weatherapi.com/v1/current.json?"
// var q="ooty"
async function checkweather(){
    var q=document.getElementById("inputcity").value
    const response= await fetch(`${url}key=${apikey}&q=${q}`);
    if(response.status==400){
        alert("Enter valid City Name");
    }
    else{
    const data = await response.json();
    console.log(data);
    var mainweasthericon=document.querySelector(".mainweathericon");
    mainweasthericon.src=data.current.condition.icon
    var temp=document.getElementById("temp");
    temp.innerHTML=data.current.temp_c+" °C"
    var tempcmt=document.getElementById("temcmt")
    tempcmt.innerText=data.current.condition.text;
    document.getElementById("humidityval").innerText=data.current.humidity+" %"
    document.getElementById("windval").innerText=data.current.wind_kph+" Km/hr"
    document.getElementById("weather").style.display="block";
    }
    
}
// checkweather();
