import {Map, View, Feature} from 'ol';
import {Point} from 'ol/geom';
import {Style, Icon} from 'ol/style';
import {Vector as sourceVector} from 'ol/source';
import {Vector as layerVector} from 'ol/layer';
import TileLayer from 'ol/layer/Tile';
import {defaults as defaultControls, Attribution} from 'ol/control';
import XYZ from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj';
import 'ol/ol.css';

const defaultCenter = [-77.050176, 38.889269];
const defaultZoom = 15;
const centerCoordinate = fromLonLat(defaultCenter, 'EPSG:3857');

const iconFeature = new Feature({
  geometry: new Point(centerCoordinate)
});

const iconStyle = new Style({
  image: new Icon(({
    anchor: [17, 48],
    anchorXUnits: 'pixels',
    anchorYUnits: 'pixels',
    src: 'assets/jizo.png'
  }))
});

iconFeature.setStyle(iconStyle);

const vectorSource = new sourceVector({
  features: [iconFeature]
});

const vectorLayer = new layerVector({
  source: vectorSource
});

const attribution = new Attribution({
  collapsible: false
});

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attributions: '&copy; OpenStreetMap contributors'
      })
    }),
    vectorLayer
  ],
  controls: defaultControls({attribution: false}).extend([attribution]),
  view: new View({
    center: fromLonLat(defaultCenter, 'EPSG:3857'),
    zoom: defaultZoom
  })
});
