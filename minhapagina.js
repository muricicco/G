  // document.write("Hello World 1!");
// setview é a centragem do mapa precisa de coodenadas sempre que nao for declarado é wgs84
// o 11 equivale ao zoom. 1= mundo e 18 menor escala 1/2000.
window.onload= function (){
  var mapa = L.map('meumapa').setView([-25.45,-49.27],13);
//Mapbox
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mapa);
}

var = ponto = L.marke([-24.45,-49.27])
