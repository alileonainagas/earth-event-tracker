import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Helmet } from 'react-helmet-async';

//Components
import Markers from './Markers';

const MapView = () => {

    const [eonetData, setEonetData] = useState([]);
    const [eoDescription, setEoDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);

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
                const { events, description } = await response.json();
                setEonetData(events);
                setEoDescription(description);
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

    /* Iterating through the coordinates to render all events marks */
    const markers = eonetData.map((ev, i) => {
        if (ev.categories[0].id === 8) {
            return <Markers key={i} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />;
        }
        return null;
    });


    return (
        <div className="map-container">
            <Helmet>
                {/* Public Metadata implementation */}
                <title>Wildfire Tracker</title>
                <meta name="description" content="Wildfires map rendering taking EONET's NASA API as source" />
            </Helmet>
            {!loading ? <span></span> : <p className="loading-animation">Loading...</p>}
            {errors ? <p className="error-warning">Something went wrong, try refreshing the page.</p> : <span></span>}
            {eoDescription !== '' ? <p className="event-description"><strong>World Wide Wildfires by</strong>: {eoDescription}</p> : <span></span>}
            <MapContainer center={position.currentLocation} zoom={position.zoom} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {markers}
            </MapContainer>
        </div>
    )
}

export default MapView;