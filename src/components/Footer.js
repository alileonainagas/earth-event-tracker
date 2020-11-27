import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/FooterLogo.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <img src={FooterLogo} alt="ALA" />
                <ul className="contact-info">
                    <li><Link to={{ pathname: "https://github.com/alileonainagas" }} target="_blank" aria-label="Github">
                        <span className="github"></span>
                    </Link></li>
                    <li><Link to={{ pathname: "https://www.linkedin.com/in/alí-león-ainagas-943333190/" }} target="_blank" aria-label="LinkedIn">
                        <span className="linked"></span>
                    </Link></li>
                    <li><Link to={{ pathname: "https://www.facebook.com/ali.leon.ainagas/" }} target="_blank" aria-label="Facebook">
                        <span className="facebook"></span>
                    </Link></li>
                </ul>
                <article className="api-info">
                    <h3>Earth Event Tracker is powered by</h3>
                    <ul className="api-links">
                        <li><Link to={{ pathname: "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events" }} target="_blank" aria-label="EONET">
                            <span className="nasa"></span>
                        </Link></li>
                    </ul>
                </article>
            </div>
        </footer>
    );
}

export default Footer;
