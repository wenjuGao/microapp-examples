<template>
	<Parcel @parcelMounted="parcelMounted"
		@parcelUpdated="parcelUpdated"
		@parcelUnmount="parcelUnMounted"
		:config="parcelConfig"
		:mountParcel="mountRootParcel"
		wrapWith="div"
		wrapClass="vue-child-app-load"
		:parcelProps="getParcelProps()" />
</template>

<script setup>
	import Parcel from 'single-spa-vue/parcel'
	import { mountRootParcel } from 'single-spa'
	import { computed } from 'vue'
	// eslint-disable-next-line no-undef
	const parcelConfig = computed(() => System.import("@single-spa/vue2-app"))
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