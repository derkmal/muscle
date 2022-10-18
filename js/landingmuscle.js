
function myFunction(x) {
    if(x.matches) {
        let image = document.createElement('img');
        image.src = "images/Muscle-1.png";
        // image.style.opacity = 0.5;   
        image.style.width = "50%";
        image.style.display = "block";
        image.style.margin = "0 auto";
        document.querySelector("#myH3").insertAdjacentElement("beforeend", image);
    } else {
        document.querySelector("#myH3").removead("beforeend", image);
    }
}

var x = window.matchMedia('(max-width: 700px)');
myFunction(x);
x.addEventListener(myFunction);