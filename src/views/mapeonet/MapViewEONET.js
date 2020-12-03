import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import MapContainer from './MapContainer';
import L from 'leaflet';

//Assets
import Item from '../../assets/FireIcon.svg';


const MapViewEONET = () => {

    const [eonetData, setEonetData] = useState({});
    const [eoDescription, setEoDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpMap data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)enStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
    const url = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';

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

    const position = {
        currentLocation: {
            lat: 0,
            lng: 0,
        },
        zoom: 2,
    }

    /* Call to the EONET NASA API to obtain coordinates on the closest wildfires in real time. */
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const getEONETData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events', { signal: signal });
                const allData = await response.json();
                setEonetData(allData);
                setEoDescription(allData.description);
                setLoading(false);
            } catch (error) {
                //console.log(error);
                setErrors(true);
            }
        }
        getEONETData();

        return () => {
            abortController.abort();
        }

    }, []);

    return (
        <div className="map-eonet">
            <Helmet>
                {/* Public Metadata implementation */}
                <title>Wildfire Tracker</title>
                <meta name="description" content="World wildfires locations provided by EONET's NASA API" />
            </Helmet>
            {errors ? <p className="error-warning-eonet">Something went wrong, try refreshing the page.</p> : <span></span>}
            {eoDescription !== '' ? <p className="event-description"><strong>World Wide Wildfires by</strong>: {eoDescription}</p> : <span></span>}
            {loading ?
                <p className="loading-animation-eonet">Loading...</p>
                : <MapContainer
                    data={eonetData}
                    center={position.currentLocation}
                    zoom={position.zoom}
                    attribution={attribution}
                    url={url}
                    icon={fireIcon}
                />}
        </div>
    )
}

export default MapViewEONET;