//Acelerómetro
function successAcelerometro(acceleration) {

    ejeXactual = acceleration.x;
    ejeYactual = acceleration.y;
    ejeZactual = acceleration.z;

    if (Math.abs(ejeXanterior - ejeXactual) > sensibilidadX && (ejeYactual - ejeYanterior) > sensibilidadY) {
        pasos++;
        kcal += valorCaloriaxPaso;
    }

    ejeXanterior = ejeXactual;
    ejeYanterior = ejeYactual;
    ejeZanterior = ejeZactual;

    mostrarInfoCaloriasPasos();
}

function empezarAcelerometro() {
    var opciones = {frequency: 500};
    if (!acelWatchID) {
        acelWatchID = navigator.accelerometer.watchAcceleration(successAcelerometro, falloAcelerometro, opciones);
    }
}

function falloAcelerometro() {
    alert('onError!');
}

function reiniciarContadores() {
    pasos = 0;
    kcal = 0;
    mostrarInfoCaloriasPasos();
    empezarAcelerometro();
}

function detenerAcelerometro() {
    if (acelWatchID) {
        navigator.accelerometer.clearWatch(acelWatchID);
        acelWatchID = null;
    }
}