<template>
	<el-affix :offset="0">
		<p class="page-title">microapp-examples</p>
	</el-affix>
	<div class="menu-card">
		<el-space wrap>
			<el-card v-for="(item,index) in buttons"
				:key="item.path"
				:class="['custom-page',active === index ? 'active':'']"
				shadow="hover"
				@click="handleClick(item)">
				<img :src="item.image"
					class="image" />
				<div style="padding: 14px">
					<span>{{item.label}}</span>
				</div>
			</el-card>
		</el-space>
	</div>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>load child app</span>
				<el-button class="button"
					text>Refresh</el-button>
			</div>
		</template>
		<div class="card-body-box">
			<router-view v-slot="{ Component }">
				<transition name="el-zoom-in-center">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
	</el-card>
</template>

<script setup>
	import vueLogo from "./assets/logo.png"
	import reactLogo from "./assets/react.png"
	import preactLogo from "./assets/preact.jpeg"
	import svelteLogo from "./assets/svelte.png"
	import angularLogo from "./assets/angular.png"
	import { computed } from "vue"
	import { useRouter, useRoute } from "vue-router"

	const router = useRouter()
	const route = useRoute()



	const buttons = [
		{
			label: "main App",
			value: "vue",
			path: "/",
			image: vueLogo
		},
		{
			label: "load vue App",
			value: "vue",
			path: "/vue-app",
			image: vueLogo
		},
		{
			label: "load react App",
			value: "react",
			path: "/react-app",
			image: reactLogo
		},
		{
			label: "load preact App",
			value: "preact",
			path: "/preact-app",
			image: preactLogo
		},
		{
			label: "load svelte App",
			value: "svelte",
			path: "/svelte-app",
			image: svelteLogo
		},
		{
			label: "load angularjs App",
			value: "angularjs",
			path: "/angularjs-app",
			image: angularLogo
		},
	];

	const active = computed(() => {
		return buttons.findIndex(i => i.path === route.path);
	})

	// change router and active tag
	const handleClick = (item) => {
		router.push(item.path)
	};


</script>

<style scoped>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	.page-title {
		font-size: 16px;
		font-weight: 600;
		margin: 10px;
		padding: 0;
	}
	.menu-card {
		display: flex;
		justify-content: center;
		margin-bottom: 10px;
	}
	.custom-page {
		padding: 0;
		width: 160px;
		display: flex;
		justify-content: center;
		cursor: pointer;
		text-align: center;
	}
	.custom-page.active {
		background-color: aliceblue;
	}
	.custom-page .image {
		height: 140px;
	}
	.box-card .card-body-box {
		height: 50vh;
		overflow: auto;
	}
	.card-header {
		display: flex;
		justify-content: space-between;
	}
</style>
