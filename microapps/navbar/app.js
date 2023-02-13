import { h, createApp } from 'vue';
// import './set-public-path';
import singleSpaVue from 'single-spa-vue';
import App from "./App.vue"

const vueLifecycles = singleSpaVue({
	createApp,
	appOptions: {
		// el: '#vue-app',
		render () {
			const { mountParcel, singleSpa, name } = this
			console.log(this, mountParcel, singleSpa, name)
			return h(App, {
				// single-spa props are available on the "this" object. Forward them to your component as needed.
				// https://single-spa.js.org/docs/building-applications#lifecycle-props
				// name: name,
				// mountParcel: mountParcel,
				// singleSpa: singleSpa,
			});
		},
	},
	// handleInstance (app) {
	// 	app.use(router);
	// },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
