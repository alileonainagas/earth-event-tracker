import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    return (
        <div className="homepage">
            <Helmet>
                {/* Public Metadata implementation */}
                <title>Earth Event Tracker | Home</title>
            </Helmet>
            <h1>EARTH EVENT TRACKER GEOLOCALIZATION</h1>
            <p className="site-description">
                Track all events in the world taking place in real time. Earth Event Tracker
                will display all data available in a interactive map for you.
            </p>
            <Link className="start-button" to={{
                pathname: '/trackers',
            }} >START NOW</Link>
        </div>
    );
}

export default Home;
