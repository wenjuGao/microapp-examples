import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import singleSpaReact from 'single-spa-react';


const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: App,
	errorBoundary (err, info, props) {
		// Customize the root error boundary for your microfrontend here.
		return null;
	},
})

export const name = 'react-app'
export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount