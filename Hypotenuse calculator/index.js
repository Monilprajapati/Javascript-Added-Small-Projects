

function calc() {
    var edge1 = Number(document.getElementById("edge1").value),
        edge2 = Number(document.getElementById("edge2").value);

    let clc = Math.floor(Math.sqrt(Math.pow(edge1, 2) + Math.pow(edge2, 2)));
    // alert(clc)
    document.getElementById("cLabel").innerHTML = "Edge 3: " + clc;
}

