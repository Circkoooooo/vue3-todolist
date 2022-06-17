<script setup lang="ts">
import './content-title.less'
interface ContentProps {
	clsPrefix: string,
	title: string
}
withDefaults(defineProps<ContentProps>(), {})
</script>
<template>
	<div :class='`title ${clsPrefix}-title`'>
		{{ title }}
	</div>
</template>