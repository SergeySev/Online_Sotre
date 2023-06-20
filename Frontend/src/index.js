import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// import { createHashRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';

// const router = createHashRouter([
// 	{
// 		path: '/*',
// 		element: <App />
// 	}
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		{/* <RouterProvider router={router} /> */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
		{/* </RouterProvider> */}
	</Provider>
);

