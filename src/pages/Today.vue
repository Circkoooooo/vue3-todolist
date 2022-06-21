<script setup lang="ts">
import ContentTitle from '~/components/ContentTitle/ContentTitle.vue'
import Content from '~/components/Content/Content.vue'
import './Today.less'
const prefix = 'today'
</script>

<template>
	<div>
		<ContentTitle :clsPrefix="prefix"
				title="today">
		</ContentTitle>
		<Content :clsPrefix="prefix"></Content>
	</div>
</template>