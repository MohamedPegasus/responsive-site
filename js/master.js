var mybtnll = document.getElementById("cl"),
    myulll = document.getElementById("ul");
    mybtnll.onclick = function() {
        if(myulll.style.display == "inline-block"){
            myulll.style.display = "none";
        }else{
            myulll.style.display = "inline-block";  
        }
    };

window.addEventListener("scroll" , function() {
    if(window.scrollY > 150){
        document.querySelector(".header").style.opacity = 0.9 ;
    }else{
        document.querySelector(".header").style.opacity = 1 ; 
    }
});

window.addEventListener("scroll" , function() {
    if(window.scrollY > 150){
        document.querySelector(".header").style.opacity = 0.9 ;
    }else{
        document.querySelector(".header").style.opacity = 1 ; 
    }
});