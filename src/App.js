import React from 'react';
import styles from "./App.css";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import MainBlock from './Components/Mainblock';
import CatalogBlock from './Components/Catalog';


function App() {
	return (
		<>
			<NaviBar />
			<MainBlock endpoints={[{ placeholder: 'Endpoint_name_1' }, { placeholder: 'Endpoint_name_2' }, { placeholder: 'Endpoint_name_3' }, { placeholder: 'Endpoint_name_4' }]} />
			<CatalogBlock items={[{}, {}, {}, {}, {}, {}, {}, {}, {}]} />
		</>
	);
}

export default App;


