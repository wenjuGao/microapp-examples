import { createRouter, createWebHashHistory } from 'vue-router'


// 路由配置
const routes = [
	{
		path: '/',
		title: 'home',
		name: 'home',
		meta: {},
		component: () => import('@/views/home/main-desk.vue')
	},
	{
		path: '/vue3-app',
		title: 'load vue3 App',
		name: 'load vue3 App',
		meta: {},
		component: () => import('@/views/load-vue3-app.vue')
	},
	{
		path: '/vue2-app',
		title: 'load vue2 App',
		name: 'load vue2 App',
		meta: {},
		component: () => import('@/views/load-vue2-app.vue')
	},
	{
		path: '/react-app',
		title: 'react-app',
		name: 'react-app',
		meta: {},
		component: () => import('@/views/load-react-app.vue')
	},
	{
		path: '/preact-app',
		title: 'load preact App',
		name: 'load preact App',
		meta: {},
		component: () => import('@/views/load-preact-app.vue')
	},
	{
		path: '/svelte-app',
		title: 'load svelte App',
		name: 'load svelte App',
		meta: {},
		component: () => import('@/views/load-svelte-app.vue')
	},
	{
		path: '/angularjs-app',
		title: 'load angularjs App',
		name: 'load angularjs App',
		meta: {},
		component: () => import('@/views/load-angularjs-app.vue')
	},
]

// createRouter:创建路由
const router = createRouter({
	// createWebHashHistory：路由模式  hash 参数：指定根地址base 默认/
	history: createWebHashHistory(),
	// createWebHashHistory：路由模式  history 参数：指定根地址base 默认/
	// history: createWebHistory(),
	strict: true,
	routes: routes,
})



export default router