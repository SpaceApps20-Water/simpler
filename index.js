import 'ol/ol.css';
import { Map, View } from 'ol';
import ImageWMS from 'ol/source/ImageWMS';
import { Image as ImageLayer, Tile as TileLayer } from 'ol/layer';
// import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

var layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new ImageLayer({
    extent: [-13884991, 2870341, -7455066, 6338219],
    source: new ImageWMS({
      url:
        'https://data.aadnc-aandc.gc.ca/geomatics/services/Donnees_Ouvertes-Open_Data/Community_Well_Being_Index_E/MapServer/WMSServer?request=GetCapabilities&service=WMS&layers=1&legend_format=image/png&feature_info_type=text/html',
      params: { LAYERS: '1' },
      ratio: 1,
      serverType: 'geoserver',
    }),
  }),
];
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [-10997148, 4569099],
    zoom: 4,
  }),
});
