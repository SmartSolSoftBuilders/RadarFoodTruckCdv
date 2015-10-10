var folderName = 'imagenesTrucks';
var fileName;
var root = null; // File System root variable
var currentDir = null; // Current DirectoryEntry listed
var parentDir = null; // Parent of the current directory

var activeItem = null; // The clicked item
var activeItemType = null; // d-directory, f-file
var clipboardItem = null; // file or directory for copy or move 
var clipboardAction = null; // c-copy, m-move
$(document).ready(function () {
    "use strict";
        // Handle the Cordova pause and resume events
        //Se busca la versión de json
    console.log("EN MAIN");                
});

function openMenu(id) {
    if (id == 1)
        window.location = "mapa/mapa.html";
    if (id == 2)
        window.location = "trucks/trucks.html";
    if (id == 3)
        window.location = "eventos/eventos.html";
    if (id == 4)
        window.location = "estaciones/estaciones.html";
    if (id == 5)
        window.location = "promociones/promociones.html";
    if (id == 6)
        window.location = "conantojode/conantojode.html";
    if (id == 7)
        window.location = "magazine/magazine.html";        
}