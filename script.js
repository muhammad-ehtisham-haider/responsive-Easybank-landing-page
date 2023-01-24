function show(){
    document.getElementById("show").classList.toggle("toggle");
    document.getElementById("close").style.display = "block";
    document.getElementById("navbar").style.display = "block";
    document.getElementById("mobile").style.opacity = "20%"
}

function abc(){
    document.getElementById("navbar").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("show").classList.toggle("toggle");
    document.getElementById("mobile").style.opacity = "100%"
}