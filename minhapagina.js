// setview é a centragem do mapa precisa de coodenadas sempre que nao for declarado é wgs84
// o 11 equivale ao zoom. 1= mundo e 18 menor escala 1/2000.
// window.onload = function () {
//   var mapa = L.map('meumapa').setView([-25.45,-49.27],13);

//document.write("Murian");

window.onload = function(){
var mapa =L.map("meumapa").setView([-25.45,-49.27],11);
//open street Map
var osm = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
//MapBox street
var mapbox=L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
{
id: "mapbox.pirates",
accessToken: "pk.eyJ1IjoibXVyaWFuIiwiYSI6ImNpeTYzZnEwODAwNmozM3FoN3p5ZTM4bjUifQ.o4VkjZ3JdYSOdWsKuK462g"
}).addTo(mapa);


var wms = L.tileLayer.wms("http://localhost:8082/geoserver/wms",{
layers:"tasmania",
transparent: "true",
format:"image/png"}).addTo(mapa);

//Ponto cria dois pontos mas nao adiciona este no mapa
var ponto1 = L.marker([-25.45, -49.27]);//.addTo(mapa);
    ponto2 = L.marker([-25.43, -49.29]);//.addTo(mapa);

//Linha duas linhas mas nao adiciona no Mapa
var linha1 = L.polyline([[-25.4, -49.2],[-25.5, -49.1]]);//.addTo(mapa);
    linha2 = L.polyline([[-25.4, -49.1],[-25.5, -49.2]]);//.addTo(mapa);

//Agrupar Camadas
var pontos = L.layerGroup([ponto1, ponto2]);//.addTo(mapa);
var linhas = L.layerGroup([linha1, linha2]);//.addTo(mapa);


var baseCartografia = {
  "Base OpenStreetMap" : osm,
  "Base Mapbox Streets": mapbox,
  "Base WMS":wms
}

//Mapas de sobreposiçao
var informacaoTematica = {
"Pontos": pontos,
"Linhas": linhas,
// "Poligono": poligono,
// "Geoserver": dadosbanco
}

//Adicionar objetos ao controle de camadas
L.control.layers(baseCartografia, informacaoTematica).addTo(mapa);

//Escala gráfica
L.control.scale({position: 'bottomright'}).addTo(mapa);

//Fim do código
}


// var combinacao = L.LayerGroup([ponto1, ponto2, linha1, linha2, osm]).addTo(mapa);
//  mapa
// var ponto1 = L.marker([-25.45, -49.27]);//.addTo(mapa);
//     ponto2 = L.marker([-25.43, -49.29]);
//
// //Linha duas linhas mas nao adiciona no Mapa
// var linha1 = L.polyline([[-25.4, -49.2],[-25.5, -49.1]]); //.addTo(mapa);
//     linha2 = L.polyline([[-25.4, -49.1],[-25.5, -49.2]]); //.addTo(mapa);
//

// var informacaoTematica = {
//   "Pontos":pontos,
//   "Linhas":linhas
// }
//
//   // "Poligono"=poligono mapa
// var ponto1 = L.marker([-25.45, -49.27]);//.addTo(mapa);
//     ponto2 = L.marker([-25.43, -49.29]);
//
// //Linha duas linhas mas nao adiciona no Mapa
// var linha1 = L.polyline([[-25.4, -49.2],[-25.5, -49.1]]); //.addTo(mapa);
//     linha2 = L.polyline([[-25.4, -49.1],[-25.5, -49.2]]); //.addTo(mapa);
// //
//
// L.control.layers(baseCartografia,informacaoTematica).addTo(mapa);
// L.control.scale({position: "bottomleft"}).addTo(mapa);



// var baseCartografia = {
//   "Base OpenStreetMap" : osm,
//   "Base Mapbox Streets": mapbox
// }
//
// var informacaoTematica = {
//   "Pontos"=pontos,
//   "Linhas"=linhas,
//   "Poligono"=poligono
// }

// L.control.layers(baseCartografia,informacaoTematica).addTo(mapa);
// var combinacao = L.LayerGroup([ponto1, ponto2, linha1, linha2, osm]).addTo(mapa);



//  //Círculo
// var circulo = L.circle(
// [-25.47, -49.35],
// {
// color: "red",
// fillColor: "#f03",
// fillOpacity: 0.5,});


// });
//Anexar popups
// ponto.bindPopup("Eu sou um ponto!");
// linha.bindPopup("Eu sou uma linha!");
// poligono.bindPopup("Eu sou um polígono!");
// circulo.bindPopup("Eu sou um círculo");

// //Abrir popus
// ponto.openPopup();streets
// linha.openPopup();
// poligono.openPopup();
// circulo.openPopup();

//Popup em local específico do mapa
// var popup = L.popup()// });var informacaoTematica   // "Pontos":pts,
  // "Linhas":lns= {
  // "Pontos":pts,
  // "Linhas":lns
//  "Poligono":poligono
// }

// .setLatLng([-25.44, -49.51])
// .setContent("Eu sou uma popup!")
// .openOn(mapa);
//


// //Evento disparado após o clique do usuário
// mapa.on("dblclick", function (evento) {
// alert("Você clicou em: " + evento.latlng);
// });
// //Evento disparado após arrastar o mapa
// mapa.on("dragend", moverMapa);

// //Funçao acionada pelo evento criado
// function moverMapa (evento) {
// alert("Você moveu o mapa por : " + evento.distance.toFixed() + " pixels");
 // });
//// L.tileLayer.wms("http://localhost:8082/geoserver/wms",{
// layers:"tasmania",
// transparent: "true",
// format:"image/png"}).addTo(mapa);


//Adicionar legenda WMS
// var uri = "http://localhost:8082/geoserver/wms?REQUEST=GetLegendGraphic&FORMAT=image/jpeg&LAYER=topp:states";
