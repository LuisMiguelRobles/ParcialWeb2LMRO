var express = require('express'), path = require('path');  // se crea express y el path 
let app = express(); // se inicializa express

app.set("views", path.join(__dirname, "views")); // se coloca la carpeta views como el directorio
app.set('port', process.env.PORT || 3000); // se establece el puerto para la recepcion del servidor 

var server = require("./server"); // se crea una instancia de la clase. 
server.iniciar(app); // se inicia el metodo que se tiene en la clase server y se le envia la configuracion de app 



