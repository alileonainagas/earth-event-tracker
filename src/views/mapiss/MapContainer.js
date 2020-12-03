import { Map, TileLayer } from 'react-leaflet';
import { DriftMarker } from 'leaflet-drift-marker';
import L from 'leaflet';

//Assets
import Item from '../../assets/ISSIcon.svg';

const MapContainer = ({
    coordinates, center, zoom, lat, lng }) => {

    const settings = {
        map: {
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        },
        lines: {
            url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}',
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
    };

    const IssIcon = L.icon({
        iconUrl: Item,
        iconRetinaUrl: Item,
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: [60, 60],
        className: 'leaflet-mark-icon',
    });

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
                        <TileLayer url={settings.map.url} attribution={settings.map.attribution} />
                        <TileLayer url={settings.lines.url} attribution={settings.lines.attribution} ext='png' />
                        <DriftMarker
                            position={{ lat: `${lat}`, lng: `${lng}` }}
                            duration={4500}
                            keepAtCenter={true}
                            icon={IssIcon}
                        />
                    </Map>
            }
        </>
    );
}

export default MapContainer;