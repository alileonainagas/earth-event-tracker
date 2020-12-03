import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import MapContainer from './MapContainer';

const MapViewISS = () => {

    const [issData, setISSData] = useState({});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);

    useEffect(() => {

        const fetchInterval = setInterval(() => {
            const getISSData = async () => {
                try {
                    setLoading(true);
                    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
                    const allData = await response.json();
                    setISSData(allData);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setErrors(true);
                }
            }
            getISSData();
        }, 4500);


        return () => {
            clearInterval(fetchInterval);
        }
    }, []);

    const mapPosition = {
        currentLocation: {
            lat: issData.latitude,
            lng: issData.longitude,
        },
        zoom: 5,
    };

    return (
        <div className='map-iss'>
            <Helmet>
                {/* Public Metadata implementation */}
                <title>International Space Station Tracker</title>
                <meta name="description" content="ISS Real Time Position provided by Where IS The ISS AT? API" />
            </Helmet>
            <div className="animation-box">
                {!loading ? <p className="loading-animation-iss">Calculating ISS position</p> : <p className="loading-animation-iss-ghost">Space</p>}
            </div>
            {issData.velocity !== undefined ?
                <p className='iss-info'><strong>ISS Velocity</strong>: {issData.velocity}km</p>
                : <span></span>}
            {errors ? <p className="error-warning-iss">Something went wrong, try refreshing the page.</p> : <span></span>}
            <MapContainer
                coordinates={issData}
                center={mapPosition.currentLocation}
                zoom={mapPosition.zoom}
                lat={issData.latitude}
                lng={issData.longitude}
            />
        </div>
    );
}

export default MapViewISS;