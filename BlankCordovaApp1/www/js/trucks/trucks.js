$(document).ready(function () {
    //Se busca la versión de json
    var paramFecha = "";
    console.log("Buscando localmente antes de petición en main")
    var versionJSON = JSON.parse(localStorage.getItem('version'));
    console.log(versionJSON.version);
    //alert("Se buscarán los datos de los trucks");
    paramFecha = "versionJSON.version";
    if (versionJSON != null) {
        $.each(versionJSON, function (key, value) {
            console.log(key + ' = ' + value);
        });
    }
});
