import '../src/styles/app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

//Assets
import favIcon from './assets/favicon.ico';
import logo192 from './assets/logo192.png';

//Components
import MapView from './components/MapView';
import Home from "./components/Home";
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
				<Switch>
					<Route exact path='/'>
						<Header />
						<Home />
						<Footer />
					</Route>
					<Route path='/map'>
						<Header />
						<MapView />
						<Footer />
					</Route>
				</Switch>
			</Router>
		</HelmetProvider>
	);
}

export default App;
