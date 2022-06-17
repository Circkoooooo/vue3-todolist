<script setup lang="ts">
const test = (data: string) => {
	console.log(data)
}
</script>
<template>
	<div class="header"
			@click="test('11')">
		头部
	</div>
</template>