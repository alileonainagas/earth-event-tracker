import '../src/styles/app.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

//Assets
import favIcon from './assets/favicon.ico';
import logo192 from './assets/logo192.png';

//Components
import MapViewEONET from './views/mapeonet/MapViewEONET';
import MapViewISS from './views/mapiss/MapViewISS';
import Home from './components/Home';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

	return (
		<HelmetProvider>
			<Router>
				<Helmet>
					{/* Public Metadata implementation */}
					<title>Earth Event Tracker</title>
					<link rel="icon" type="image/png" href={favIcon} sizes="32x32" />
					<link rel="apple-touch-icon" href={logo192} />
					<meta name="description" content="React Web App created to events taking place in real time in the world." />
				</Helmet>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/trackers' component={Menu} />
					<Route path='/wilfire-map' component={MapViewEONET} />
					<Route path='/iss-map' component={MapViewISS} />
				</Switch>
				<Footer />
			</Router>
		</HelmetProvider>
	);
}

export default App;
