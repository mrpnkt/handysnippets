Mostrar todos los ficheros de tamaño igual o superior a 25MB. También se mostrará la ruta completa del fichero.

forfiles /S /M * /C "cmd /c if @fsize GEQ 26214400 echo @path"
