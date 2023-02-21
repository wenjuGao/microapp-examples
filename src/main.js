import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import {
	registerApplication,
	start
} from 'single-spa'


registerApplication(
	'react-app',
	// eslint-disable-next-line no-undef
	() => System.import("@single-spa/react-app"),
	location => location.hash.startsWith('#/react-app'),
	{
		domElementGetter: function () {
			return document.getElementById('react-app')
		}
	}
)


start({ urlRerouteOnly: true, })


createApp(App).use(router).use(ElementPlus).mount('#app')



