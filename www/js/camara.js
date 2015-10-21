function onPhotoDataSuccess(media) {
    var portada = document.getElementById('portada_img');
    portada.src = media[0].fullPath;
    // To store a value

    var value = media[0].fullPath;
    window.localStorage.setItem('path_foto', value);


    $('#dialogPage').dialog('close');
}

function onPhotoLibrarySuccess(imageURI) {
    var portada = document.getElementById('portada_img');
    portada.src = imageURI;

    var path_image = decodeURIComponent(imageURI);
    if(path_image.indexOf("providers") > -1) {
        path_image = "content://media/external/images/media/"+path_image.split(":")[2];
    }

    window.localStorage.setItem('path_foto', path_image);

    $('#dialogPage').dialog('close');
}

function onFail() {
    alert('Falló al iniciar la camara ' + message);
}

//Funciones de los botones popup
function capturePhoto() {
    navigator.device.capture.captureImage(onPhotoDataSuccess, onFail, {limit: 1})
}

function getPhoto(source) {
    navigator.camera.getPicture(onPhotoLibrarySuccess, onFail, {
        quality: 50, destinationType: destinationType.FILE_URI, sourceType: source, saveToPhotoAlbum: true
    });

}
