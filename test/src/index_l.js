import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const map = L.map('map');
const defaultCenter = [38.889269, -77.050176];
const defaultZoom = 15;
const basemap = L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
});

map.setView(defaultCenter, defaultZoom);

basemap.addTo(map);