let displayScreen = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn")
let string = "";


buttons.forEach( function(elem){
    elem.addEventListener("click", function(){
        if(elem.innerHTML == "="){
            string = eval(string);
            displayScreen.innerHTML = string;
        }
        else if(elem.innerHTML == "RESET"){
            string = "";
            displayScreen.innerHTML = string;
        }
        else if( elem.innerHTML == "x"){
            string += "*";
            displayScreen.innerHTML = string;
        }
        else if( elem.innerHTML == "DEL"){
            string = string.slice(0, -1);
            displayScreen.innerHTML = string;
        }
        else{

            string += elem.innerHTML;
            displayScreen.innerHTML = string;
        }
    })
})





// theme Change Section.

let themeChangeBtn = document.querySelectorAll(".theme-number div")
let bg = document.getElementById("main")
let calcFrame =document.querySelector(".calculatorFrame")
let themeBallContainer = document.querySelector(".theme-ball-container");

// themes
function theme1(){
    bg.style.background = `url("img/background elem1.png"), linear-gradient(#FFE77A, #2C5F2D)`;
            bg.style.backgroundPosition = "center";
            bg.style.backgroundRepeat = "no-repeat";
            bg.style.backgroundSize = "contain";
            calcFrame.style.backgroundColor = "rgba(200, 200, 200, 0.314)"
        
        
        
            themeBallContainer.style.justifyContent = "start"
};
function theme2(){
    bg.style.background = `url("img/background elem1.png"), linear-gradient(rgb(0, 123, 148), rgb(8, 0, 63))`;
            bg.style.backgroundPosition = "center";
            bg.style.backgroundRepeat = "no-repeat";
            bg.style.backgroundSize = "contain";
            calcFrame.style.backgroundColor = "rgba(0, 0, 0, 0.314)"
            
            
            
            themeBallContainer.style.justifyContent = "center"
};
function theme3(){bg.style.background = `url("img/background elem1.png"), linear-gradient(#FF69B4, #00FFFF)`;
bg.style.backgroundPosition = "center";
bg.style.backgroundRepeat = "no-repeat";
bg.style.backgroundSize = "contain";
calcFrame.style.backgroundColor = "rgba(150, 150, 150, 0.314)"



themeBallContainer.style.justifyContent = "end"}

themeChangeBtn.forEach(function(elem){
    elem.addEventListener("click", function(){
        if(elem.innerHTML == "1"){
            theme1();
        }
        else if(elem.innerHTML == "2"){
            theme2();
        }
        else{
            theme3();
        }
    })
})


themeBallContainer.addEventListener("click", function(dets){
    
    let positionVal = gsap.utils.mapRange(themeBallContainer.getBoundingClientRect().left, 
    themeBallContainer.getBoundingClientRect().left + themeBallContainer.getBoundingClientRect().width, 
    1, 
    100, 
    dets.x);

    if(positionVal <= 33){
        theme1();
    }
    else if( positionVal > 33 & positionVal < 66){
        theme2();
    }
    else{
        theme3();
    }


})