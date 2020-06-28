(function (hello) {
    var usuarioSaludador = {};
    var names = ["Pepe","Carlos","Maria","Diana"];
    console.log(names);
    var saludo = "Hola";
    for(var i=0; i<names.length; i++){
        usuarioSaludador.sayHola = function () {
            console.log(saludo + usuarioSaludador.name[i]);
        }
    }

    hello.usuarioSaludador = usuarioSaludador;
})(hello);
