import { createApp } from 'vue'
import App from './App.vue'
import { registerApplication, start } from 'single-spa'

registerApplication(
	'navbar',
	() => import('../microapps/navbar/app'),
	location => location.pathname.startsWith('/')
)

start()

// import { declareChildApplication, start } from 'single-spa';

// declareChildApplication('navbar', () => import('../microapps/navbar/app'), () => true);
// start();


createApp(App).mount('#app')


