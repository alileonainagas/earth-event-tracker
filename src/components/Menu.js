import { Link } from 'react-router-dom';
import eonet from '../assets/MenuEONET.svg';
import iss from '../assets/MenuISS.svg';

const Menu = () => {
    return (
        <div className='eet-menu'>
            <h1>SELECT A TRACKER</h1>
            <ul className='option-views'>
                <li>
                    <Link to='/wilfire-map'>
                        <img src={eonet} alt='wilfire' />
                    </Link>
                    <p className='description'>Wildfires</p>
                </li>
                <li>
                    <Link to='/iss-map'>
                        <img src={iss} alt='iss' />
                    </Link>
                    <p className='description'>International Space Station</p>
                </li>
            </ul>
        </div>
    );
}

export default Menu;