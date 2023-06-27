
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


