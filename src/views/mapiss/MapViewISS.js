import { useState, useEffect } from 'react';
import MapContainer from './MapContainer';
import L from 'leaflet';
import Item from '../../assets/ISSIcon.svg';

const MapViewISS = () => {

    const [issData, setISSData] = useState({});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);

    const url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
    const attribution = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

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
            <div className="animation-box">
                {!loading ? <p className="loading-animation-iss">Calculating ISS position</p> : <p className="loading-animation-iss-ghost">Space</p>}
            </div>
            <p className='iss-info'>If you see the target on plain gray layer... it might be above the ocean!</p>
            {errors ? <p className="error-warning-iss">Something went wrong, try refreshing the page.</p> : <span></span>}
            <MapContainer
                coordinates={issData}
                center={mapPosition.currentLocation}
                zoom={mapPosition.zoom}
                url={url}
                attribution={attribution}
                lat={issData.latitude}
                lng={issData.longitude}
                icon={IssIcon}
            />
        </div>
    );
}

export default MapViewISS;