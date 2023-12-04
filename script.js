let img=document.querySelector("#img")
img.addEventListener("click",function(){
    weather=document.querySelector(".weather");
    container1=document.querySelector(".container1");
    if(weather.classList.contains("open")==false){
        document.querySelector(".weather").style.transitionDelay="1s";
        weather.classList.toggle("open");
        container1.classList.toggle("trans");
    }
    else if(weather.classList.contains("open")){
        document.querySelector(".weather").style.transitionDelay="0s";
        container1.classList.toggle("trans");
        weather.classList.toggle("open");
    }
});