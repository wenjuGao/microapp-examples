# microapp-examples

## 前端微服务实例

### single-spa

通过single-spa在Vue 主项目中加载vue、react、svelte子项目。

涉及到single-spa的使用形式包括：
1. 通过registerApplication注册应用通过url匹配加载

```javascript
registerApplication(
	'vue-app',
	() => import('microapps/vue-app/app'),
	location => location.pathname.startsWith('/vue-app')
)

start({ urlRerouteOnly: true, })
```

2. 当需要更灵活的控制子应用加载节点时，可以使用mountRootParcel结合Parcel加载子应用


```vue
<template>
	<Parcel  :config="parcelConfig"
		:mountParcel="mountRootParcel"
		wrapWith="div" />
</template>

<script setup>
	import Parcel from 'single-spa-vue/parcel'
	import { mountRootParcel } from 'single-spa'
	import { computed } from 'vue'
	const parcelConfig = computed(() => import('microapps/vue-app/app'));
</script>
```
