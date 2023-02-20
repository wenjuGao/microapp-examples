import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import {
	registerApplication,
	start
} from 'single-spa'

// console.log(process);


registerApplication(
	'react-app',
	// eslint-disable-next-line no-undef
	() => import(/* webpackIgnore: true */'http://localhost:8080/react-app.js'),
	// () => import('microapps/react-app/src/singleSpaApp'),
	location => location.hash.startsWith('#/react-app'),
	{
		domElement: document.getElementById('react-app'),
		// 	domElementGetter: function () {
		// 		return document.getElementById('react-app')
		// 	}
	}
)

// registerApplication(
// 	'vue-app',
// 	() => import('microapps/vue-app/app'),
// 	location => location.pathname.startsWith('/vue-app')
// )

// registerApplication(
// 	'vue-app',
// 	() => import('microapps/vue-app/app'),
// 	location => location.pathname.startsWith('/vue-app')
// )

// registerApplication(
// 	'vue-app',
// 	() => import('microapps/vue-app/app'),
// 	location => location.pathname.startsWith('/vue-app')
// )

start({ urlRerouteOnly: true, })


createApp(App).use(router).use(ElementPlus).mount('#app')



