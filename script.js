let img=document.querySelector("#img")
let body=document.querySelector(".input").addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        main();
    }
})
img.addEventListener("click",main);
async function main(){
    weather=document.querySelector(".weather");
    container1=document.querySelector(".container1");
    if(weather.classList.contains("open")==false){
        weather.style.transitionDelay="0.4s"
        await finddweather()
        weather.classList.toggle("open");
        container1.classList.toggle("trans");
    }
    else if(weather.classList.contains("open")) {
        weather.style.transitionDelay="0s"
        weather.classList.toggle("open");
        container1.classList.toggle("trans");
        finddweather();
        setTimeout(function(){
            weather.classList.toggle("open");
            container1.classList.toggle("trans");
        },600);
        
    }
}

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

async function finddweather(){
    var apikey="edd892fa5ac640ffb5e101714231311"
    var url="https://api.weatherapi.com/v1/current.json?"
    var q=document.querySelector(".input").value
    await fetch(`${url}key=${apikey}&q=${q}`)
    .then(data=>data.json())
    .then((data)=>{
        findandshow(data);
    }
)
    
}

function findandshow(data){
    console.log(data.error)
    if(data.error){
        customalert();
    }
    else{
    console.log(data);
    document.querySelector(".mainweatherimg").src=data.current.condition.icon;
    document.querySelector(".comment").innerHTML=data.current.condition.text;
    document.querySelector(".temp").innerHTML=Math.round(data.current.temp_c) + " °C";
    document.querySelector(".humval").innerHTML=data.current.humidity+ " %";
    document.querySelector(".winval").innerHTML=data.current.wind_kph+ " Km/hr";
    }
}

let input=document.querySelector(".input");
input.addEventListener("input",function(){
    let inval=input.value;
     fir=inval.charAt(0);
     fir=fir.toUpperCase();
     rest=inval.slice(1);
     rest=rest.toLowerCase();
     input.value=fir+rest;
})