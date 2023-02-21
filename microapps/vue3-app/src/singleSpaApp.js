import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';
// import { mountParcel } from 'single-spa';
import App from "./App.vue"

const vueLifecycles = singleSpaVue({
	createApp,
	appOptions: {
		render () {
			const { mountParcel, singleSpa, name } = this
			console.log(this)
			return h(App, {
				// https://single-spa.js.org/docs/building-applications#lifecycle-props
				name: name,
				mountParcel: mountParcel,
				singleSpa: singleSpa,
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
export const name = 'vue-app';
