var mymap = L.map('mapid').setView([-21.759238, -41.335992], 15);



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    minZoom: 13,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiaG9sa2tzIiwiYSI6ImNrMDRnNmdzcDE3bm4zbXA0MnJ4M2l3dWIifQ.UB9jmBVbM35cR0hB1Fo1Zw'
}).addTo(mymap);