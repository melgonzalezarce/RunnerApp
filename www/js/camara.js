function onPhotoDataSuccess(imageData) {
    var portada = document.getElementById('portada_img');
    portada.src = "data:image/jpeg;base64," + imageData;
    $('#dialogPage').dialog('close');
}

function onPhotoLibrarySuccess(imageURI) {
    var portada = document.getElementById('portada_img');
    portada.src = imageURI;
    $('#dialogPage').dialog('close');
}

function onFail() {
    alert('Falló al iniciar la camara ' + message);
}

//Funciones de los botones popup
function capturePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50, destinationType: destinationType.DATA_URL
    });
}

function getPhoto(source) {
    navigator.camera.getPicture(onPhotoLibrarySuccess, onFail, {
        quality: 50, destinationType: destinationType.FILE_URI, sourceType: source
    });

}
