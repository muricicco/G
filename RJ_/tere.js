//Este é o mapa onde os parametros de programação estão armazenadas
//Este mapa foi Desenvolvido pelo Eng. Murian R. C. Cicco.
// Murian.caetano@gmail.com
//##22/03/2018##
window.onload = function(){
//Define qual será a localização do mapa utilizando o OpenStreetMap com as coodenadas
//definidas pelo setView e o zoom pelo ultimo número
var mapa = L.map("terezo").setView([-22.42,-43.03],11);

var oms = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mapa);

// var mapbox=L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
// {
// id: "mapbox.pirates",
// accessToken: "pk.eyJ1IjoibXVyaWFuIiwiYSI6ImNpeTYzZnEwODAwNmozM3FoN3p5ZTM4bjUifQ.o4VkjZ3JdYSOdWsKuK462g"
// });


  //Fim do código
}
