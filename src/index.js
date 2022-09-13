import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import App from "./app";
import {BrowserRouter} from "react-router-dom";
import './i18next';

ReactDOM.render(
	<Suspense fallback="...">
	<React.StrictMode>
		<BrowserRouter>
			<App/>
		</BrowserRouter>,
	 </React.StrictMode>,
	</Suspense>,
	document.getElementById('root')
)
