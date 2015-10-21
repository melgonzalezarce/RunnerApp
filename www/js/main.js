var pictureSource;
var destinationType;
var bruWatchID = null;
var acelWatchID = null;

var pasos;
var kcal;
var ejeXanterior;
var ejeXactual;

var ejeYanterior;
var ejeYactual;

var ejeZanterior;
var ejeZactual;

var sensibilidadX;
var sensibilidadY;

var valorCaloriaxPaso;

document.addEventListener("deviceReady", onDeviceReady, false);

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
    empezarBrujula();
    empezarAcelerometro();

    pasos = 0;
    kcal = 0;

    ejeXanterior = 0;
    ejeXactual = 0;

    ejeYanterior = 0;
    ejeYactual = 0;

    ejeZanterior = 0;
    ejeZactual = 0;

    sensibilidadX = 1.5;
    sensibilidadY = 1.0;

    valorCaloriaxPaso = 0.039;

    if (window.localStorage.getItem('path_foto')) {
        var portada = document.getElementById('portada_img');
        portada.src = window.localStorage.getItem('path_foto');
    }
}


//Calorias
function mostrarInfoCaloriasPasos() {
    $('#pasos').text(pasos);
    $('#kcal').text(kcal.toFixed(2));
}

