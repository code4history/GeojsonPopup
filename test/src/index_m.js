import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

const defaultCenter = [-77.050176, 38.889269];
const defaultZoom = 14;
mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZXdpbGxpYW1zb24iLCJhIjoibzRCYUlGSSJ9.QGvlt6Opm5futGhE5i-1kw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
    center: defaultCenter, // starting position
    zoom: defaultZoom // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());
