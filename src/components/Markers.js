import { Marker } from 'react-leaflet';
import { MainMark } from './IconMarks';

const Markers = ({lat, lng}) => {
    return (
        <Marker position={{ lat: `${lat}`, lng: `${lng}` }} icon={MainMark} />
    )
}

export default Markers;
