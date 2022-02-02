import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './global.css'
import App from './App'
import { ResultContextProvider } from './contexts/ResultContextProvider'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

ReactDOM.render(
	<React.StrictMode>
		<ResultContextProvider>
			<Router>
				<App />
			</Router>
		</ResultContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
