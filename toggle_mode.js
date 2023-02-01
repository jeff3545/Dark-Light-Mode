function darkorlightmode() {
    if (document.getElementById("darkmode").checked) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("navigation").style.backgroundColor = "darkgray";
        document.getElementById("main").style.backgroundColor = "darkgray";
        document.getElementById("modebox").style.backgroundColor = "darkgray";
        }
    else { (document.getElementById("lightmode").checked) 
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("navigation").style.backgroundColor = "lightgray";
        document.getElementById("main").style.backgroundColor = "lightgray";
        document.getElementById("modebox").style.backgroundColor = "lightgray";
    }
    }