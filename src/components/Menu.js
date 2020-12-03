import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import eonet from '../assets/MenuEONET.svg';
import iss from '../assets/MenuISS.svg';

const Menu = () => {
    return (
        <div className='eet-menu'>
            <Helmet>
                {/* Public Metadata implementation */}
                <title>Earth Event Tracker | Trackers</title>
            </Helmet>
            <h1>SELECT A TRACKER</h1>
            <ul className='option-views'>
                <li>
                    <Link to='/wilfire-map' className='map-link'>
                        <img src={eonet} alt='wilfire' />
                        <p className='description'>Wildfires</p>
                    </Link>
                </li>
                <li>
                    <Link to='/iss-map' className='map-link'>
                        <img src={iss} alt='iss' />
                        <p className='description'>International Space Station</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;