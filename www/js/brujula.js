//Brujula
function rotarImagen(d) {
    d = parseInt(d);
    var imagen = $("#img_brujula");
    imagen.rotate({
        angle: -d,
        duration: 500
    });
}

function successBrujula(heading) {
    var orientacion;
    var valor = heading.magneticHeading;
    rotarImagen(valor);

    if (valor == 0) {
        orientacion = "N";
    } else if (valor < 90) {
        orientacion = "NE";
    } else if (valor == 90) {
        orientacion = "E";
    } else if (valor < 180) {
        orientacion = "SE";
    } else if (valor == 180) {
        orientacion = "S";
    } else if (valor < 270) {
        orientacion = "SO";
    } else if (valor == 270) {
        orientacion = "O";
    } else if (valor < 360) {
        orientacion = "NO";
    }


    $('#angulo').html(heading.magneticHeading + ' °' + orientacion);

}

function empezarBrujula() {
    var options = {frequency: 250};
    if (!bruWatchID) {
        bruWatchID = navigator.compass.watchHeading(successBrujula, falloBrujula, options);
    }
}

function detenerBrujula() {
    if (bruWatchID) {
        navigator.compass.clearWatch(bruWatchID);
        bruWatchID = null;

    }
}

function falloBrujula(compassError) {
    alert('Error de brujula:' + compassError.code);
}