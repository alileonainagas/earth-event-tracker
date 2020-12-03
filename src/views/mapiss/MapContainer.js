import { Map, TileLayer } from 'react-leaflet';
import { DriftMarker } from 'leaflet-drift-marker';

const MapContainer = ({
    coordinates, center, zoom, url, attribution, lat, lng, icon }) => {

    let coords = false;
    if (Object.keys(coordinates).length !== 0) {
        coords = true;
    }

    return (
        <>
            {
                !coords ?
                    <span></span> :
                    <Map center={center} zoom={zoom} scrollWheelZoom={true}>
                        <TileLayer url={url} attribution={attribution} />
                        {/* <Marker position={{ lat: `${lat}`, lng: `${lng}` }} icon={icon} /> */}
                        <DriftMarker
                            position={{ lat: `${lat}`, lng: `${lng}` }}
                            duration={4500}
                            keepAtCenter={true}
                            icon={icon}
                        />
                    </Map>
            }
        </>
    );
}

export default MapContainer;