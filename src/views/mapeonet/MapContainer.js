import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker } from 'react-leaflet';

const MapContainer = ({ data, center, zoom, url, attribution, icon }) => {

    const { events } = data;

    return (
        <>
            <Map center={center} zoom={zoom} scrollWheelZoom={true}>
                <TileLayer url={url} attribution={attribution} />
                {
                    events === undefined ?
                        <Marker position={center} icon={icon} />
                        : events.map((ev, key) => {
                            if (ev.categories[0].id === 8) {
                                return <Marker key={key} position={{ lat: `${ev.geometries[0].coordinates[1]}`, lng: `${ev.geometries[0].coordinates[0]}` }} icon={icon} />
                            }
                            return null
                        })
                }
            </Map>
        </>
    );
}

export default MapContainer;