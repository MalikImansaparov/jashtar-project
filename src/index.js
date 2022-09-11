import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import App from "./app";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App/>
		</BrowserRouter>,
	 </React.StrictMode>,
	document.getElementById('root')
)
