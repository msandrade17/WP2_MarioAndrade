const hbs = require('hbs');

var fs = require('fs');
var dir = JSON.parse(fs.readFileSync('./data/datas.json','utf-8'));

hbs.registerHelper('getProducCerveza', function(){
    var cerveza="";
    dir.forEach(cervezas => {

        cerveza += '<div class="desarrollo">';
        cerveza += '<img src="'+cervezas.url+'" width="400px"> <br>';
        cerveza += '<h1 class="TitulosPro">'+cervezas.nombre+'</h1>';
        cerveza += '<p>Precio: $'+cervezas.costo+'</p>';
        cerveza += '</div>';
    });

    return new hbs.SafeString(cerveza);

});

