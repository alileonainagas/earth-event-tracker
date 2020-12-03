import FooterLogo from '../assets/FooterLogo.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <img src={FooterLogo} alt="ALA" />
                <ul className="contact-info">
                    <li><a href="https://github.com/alileonainagas" rel="noreferrer" target="_blank" aria-label="Github"><span className="github"></span></a></li>
                    <li><a href="https://www.linkedin.com/in/alí-león-ainagas-943333190/" rel="noreferrer" target="_blank" aria-label="LinkedIn"><span className="linked"></span></a></li>
                    <li><a href="https://www.facebook.com/ali.leon.ainagas/" rel="noreferrer" target="_blank" aria-label="Facebook"><span className="facebook"></span></a></li>
                </ul>
                <article className="api-info">
                    <h3>Earth Event Tracker is powered by</h3>
                    <ul className="api-links">
                        <li><a href="https://eonet.sci.gsfc.nasa.gov/api/v2.1/events" rel="noreferrer" target="_blank" aria-label="EONET">
                            <span className="nasa"></span>
                        </a></li>
                        <li><a href="https://wheretheiss.at/w/developer" rel="noreferrer" target="_blank" aria-label="EONET">
                            <span className="where"></span>
                        </a></li>
                    </ul>
                </article>
            </div>
        </footer>
    );
}

export default Footer;
