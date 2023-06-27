
function colorchange() {
    if (document.getElementById("col").style.backgroundColor == "red") {
        document.getElementById("col").style.backgroundColor = "blue";
        document.getElementById("target").setAttribute("color", 'blue');
    }
    else {
        document.getElementById("col").style.backgroundColor = "red";
        document.getElementById("target").setAttribute("color", 'red');
    }


}
function rotchange() {
    if (document.getElementById("rot").innerHTML == "RotateX") {
        document.getElementById("anim").setAttribute("to", '0 360 0');
        document.getElementById("rot").innerHTML = "RotateY";
    }
    else {
        document.getElementById("anim").setAttribute("to", '360 0 0');
        document.getElementById("rot").innerHTML = "RotateX";
    }

}

function sp() {


    // if (document.getElementById("sphere").innerHTML == "Sphere") {
    //     document.getElementById("target").style.display = "none";
    //     document.getElementById("targets").style.display = "block";
    //     document.getElementById("sphere").innerHTML = "Box";
    // }
    // else {
    //     document.getElementById("target").style.display = "block";
    //     document.getElementById("targets").style.display = "none";
    //     document.getElementById("sphere").innerHTML = "Sphere";
    // }

}
