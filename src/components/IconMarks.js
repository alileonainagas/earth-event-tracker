import L from 'leaflet';
import markIcon from '../assets/markIcon.svg';

const MainMark = L.icon({
    iconUrl: markIcon,
    iconRetinaUrl: markIcon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [40, 40],
    className: 'leaflet-mark-icon',
});

export { MainMark };