import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj';
import 'ol/ol.css';

const defaultCenter = [-77.050176, 38.889269];
const defaultZoom = 15;
new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; OpenStreetMap contributors'
      })
    })
  ],
  view: new View({
    center: fromLonLat(defaultCenter, 'EPSG:3857'),
    zoom: defaultZoom
  })
});
