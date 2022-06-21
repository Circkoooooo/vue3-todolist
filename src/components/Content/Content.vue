<script setup lang="ts">
interface ContentProps {
	clsPrefix: string,
}
withDefaults(defineProps<ContentProps>(), {})
</script>
<template>
	<div :class='`content ${clsPrefix}-content`'>
		1
	</div>
</template>