import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

//Assets
import Item from '../../assets/FireIcon.svg';

const MapContainer = ({ data, center, zoom }) => {

    const { events } = data;

    const settings = {
        map: {
            url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpMap data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)enStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
    };

    const fireIcon = L.icon({
        iconUrl: Item,
        iconRetinaUrl: Item,
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: [40, 40],
        className: 'leaflet-mark-icon',
    });

    return (
        <>
            <Map center={center} zoom={zoom} scrollWheelZoom={true}>
                <TileLayer url={settings.map.url} attribution={settings.map.attribution} />
                {
                    events === undefined ?
                        <Marker position={center} icon={fireIcon} />
                        : events.map((ev, key) => {
                            if (ev.categories[0].id === 8) {
                                return <Marker key={key} position={{ lat: `${ev.geometries[0].coordinates[1]}`, lng: `${ev.geometries[0].coordinates[0]}` }} icon={fireIcon} />
                            }
                            return null
                        })
                }
            </Map>
        </>
    );
}

export default MapContainer;