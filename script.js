let img=document.querySelector("#img")
img.addEventListener("click",function(){
    weather=document.querySelector(".weather");
    container1=document.querySelector(".container1");
    if(weather.classList.contains("open")==false){
        weather.style.transitionDelay="0.4s"
        finddweather()
        weather.classList.toggle("open");
        container1.classList.toggle("trans");
    }
    else if(weather.classList.contains("open")) {
        weather.style.transitionDelay="0s"
        weather.classList.toggle("open");
        container1.classList.toggle("trans");
        setTimeout(function(){
            finddweather();
            weather.classList.toggle("open");
            container1.classList.toggle("trans");
        },500);
        
    }
});

// No city found alert
function customalert(){
    document.querySelector(".container3").classList.toggle("show");
    document.querySelector(".layover").classList.toggle("show");
}

// Alter close function
let close=document.querySelector(".close");
close.addEventListener("click",function(){
    customalert();
})

function finddweather(){
    var apikey="edd892fa5ac640ffb5e101714231311"
    var url="https://api.weatherapi.com/v1/current.json?"
    async function findandshow(){
        var q=document.querySelector(".input").value
        const response= await fetch(`${url}key=${apikey}&q=${q}`);
        if(response.status==400){
            customalert();
        }
        else{
        const data = await response.json();
        console.log(data);
        document.querySelector(".mainweatherimg").src=data.current.condition.icon;
        document.querySelector(".comment").innerHTML=data.current.condition.text;
        document.querySelector(".temp").innerHTML=Math.round(data.current.temp_c) + " °C";
        document.querySelector(".humval").innerHTML=data.current.humidity+ " %";
        document.querySelector(".winval").innerHTML=data.current.wind_kph+ " Km/hr";
        }
        
    }
    findandshow();
}