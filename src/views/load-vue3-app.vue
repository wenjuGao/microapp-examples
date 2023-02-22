<template>
	<Parcel @parcelMounted="parcelMounted"
		@parcelUpdated="parcelUpdated"
		@parcelUnmount="parcelUnMounted"
		:config="parcelConfig"
		:mountParcel="mountRootParcel"
		wrapWith="div"
		wrapClass="vue-child-app-load"
		:parcelProps="getParcelProps()" />
	<App />
</template>

<script setup>
	import App from "microapps/vue3-app/src/App"
	import Parcel from 'single-spa-vue/parcel'
	import { mountRootParcel } from 'single-spa'
	import { computed } from 'vue'
	const parcelConfig = computed(() => import('microapps/vue3-app/src/singleSpaApp'))
	const getParcelProps = () => {
		// props some context to child app
		return {
			foo: { token: 'some thing' }
		}
	}
	const parcelMounted = () => {
		console.log("parcel mounted");
	}
	const parcelUpdated = () => {
		console.log("parcel updated");
	};
	const parcelUnMounted = () => {
		console.log("parcel parcelUnMounted");
	};
</script>