$(document).ready(function () {
    //Se busca la versi�n de json
    var paramFecha = "";
    console.log("Buscando localmente antes de petici�n en main")
    var versionJSON = JSON.parse(localStorage.getItem('version'));
    console.log(versionJSON.version);
    //alert("Se buscar�n los datos de los trucks");
    paramFecha = "versionJSON.version";
    if (versionJSON != null) {
        $.each(versionJSON, function (key, value) {
            console.log(key + ' = ' + value);
        });
    }
});
