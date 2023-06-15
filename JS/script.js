window.addEventListener("load", function(){
    console.log("tuki");

    var imagenes = [];
    imagenes[0] ="../IMG/intox1.jpg";
    imagenes[1] ="../IMG/intox2.jpg";
    imagenes[2] ="../IMG/intox3.jpg";
    imagenes[3] ="../IMG/intox4.jpg";

    var indiceImagenes = 0;
    var tiempo = 1000;
    function cambiarImagenes(){
        document.getElementsByName("carrusel")[0].src = imagenes [indiceImagenes];

        if (indiceImagenes < 3) {
            indiceImagenes++;
        } else {
            indiceImagenes = 0;
        }
    }
this.setInterval(cambiarImagenes, tiempo);
});