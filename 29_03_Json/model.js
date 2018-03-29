// Criado por Murian R Cicco
window.onload = function () {

var mapa =L.map("meumapa",{
center: [-25.5,-49.25],
zoom: 11
});

var OmsPreto = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  	maxZoom: 17,
  	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var OmsPretobranco = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapa);

// Evento para criar a localização
mapa.locate({
  setView: true,
  maxZoom: 18,
  timeout: 100000,

});

// mapa.on("locationfound", function(evento){
//   L.marker(evento.latlng).addTo(mapa);
//   L.circle(evento.latlng,evento.accuracy).addTo(mapa)
// });

var Simbolo = L.Icon.extend({
  options:{
    iconSize:[30,30],
    iconAnchor:[15,15],
    poupupAnchor:[0,-15]
}});

var simbolo = [];
for(var i=0; i<=174; i++) {
  simbolo[i] = new Simbolo( {iconUrl: "simbolos/" + i + ".svg"});
};

L.marker([-25.5,-49.25],{icon: simbolo[50]}).addTo(mapa).bindPopup("Ca");

//Ponto
// var ponto = {
// type: "Feature",
// properties: {
// descricao: "Meu primeiro ponto em GeoJSON!"
// },
// geometry: {
// type: "Point",
// coordinates: [-49.2, -25.5]
// }
// };

var pontos = [{
type: "Feature",
  properties: {
    id:1,
  descricao: "Meu primeiro ponto em GeoJSON!"
  },
  geometry: {
  type: "Point",
  coordinates: [-49.2, -25.5]
  }

},
  {type: "Feature",
  properties: {
    id:2,
  descricao: "Meu Segundo ponto em GeoJSON!"
  },
  geometry: {
  type: "Point",
  coordinates: [-49.3, -25.46]
}}
];

L.geoJSON(pontos,{

pointToLayer:function(feicao, posicao) {
    return L.marker(posicao,{icon:simbolo[79]})
},
onEachFeature: function(feicao, camada){
  camada.bindPopup("Id " + feicao.properties.id + "<br/> " +"Este a feicao é : " + feicao.geometry.type);
}
}).addTo(mapa)

// Adiciona a camada GeoJson dos bairros_cwb

L.geoJSON(bairros,{
    style: function(feicao){
      cores=["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
    return {
      weight: 0.2,
      color: "#000",
      fillColor: cores[feicao.properties.CD_REGIONA-1],
      fillOpacity: 0.5
  }},
    onEachFeature: function(feicao, camada){
    camada.bindPopup("NOME " + feicao.properties.NOME);
  }

}).addTo(mapa);

var miniMap = new L.Control.MiniMap(OmsPreto).addTo(mapa);







// adiciona um ponto ou multiplos
// L.geoJSON(ponto).addTo(mapa).bindPopup(ponto.properties.descricao);

// mapa.on("locationerror", function(evento){
//   alert("Não foi possível obter a sua localização");
// });

}
